import {
  getOEMUserProfile,
  getOEMexhbitorBadges,
  getOEMexhibitorFurniture,
} from "@/Api";
import Tabls from "@/Components/Tables/Tabls";
import Table_Cons from "@/Components/Tables/userprofile.table";
import { Layout } from "@/Layouts/Admin.layout";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Head } from "next/document";
import React from "react";
import { useRouter } from "next/router";
import Back from "@heroicons/react/24/solid/ArrowLeftIcon";
import SimpleBar from "simplebar-react";
export function applyPagination(
  documents: any[],
  page: number,
  rowsPerPage: number
) {
  console.log("ss -- ", documents);

  return documents?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
const Page = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [exhibitor, setExhibitor] = React.useState<Array<any>>([]);
  const [data, setData] = React.useState(
    applyPagination(exhibitor, page, rowsPerPage)
  );
  React.useEffect(() => {
    return setData(applyPagination(exhibitor, page, rowsPerPage));
  }, [page, rowsPerPage, exhibitor]);
  const refresh = () => {
    getOEMexhbitorBadges(localStorage.getItem("token") || "").then(
      async (data) => {
        setExhibitor(data.data.data.rows);
      },
      (e) => {
        console.log(e);
      }
    );
  };
  const router = useRouter();
  React.useEffect(() => {
    getOEMexhbitorBadges(localStorage.getItem("token") || "")
      .then(
        async (data) => {
          console.log(data.data);

          setExhibitor(data.data.data.rows);
        },
        (e) => {
          console.log(e);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handlePageChange = React.useCallback((event: any, value: any) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = React.useCallback((event: any) => {
    setRowsPerPage(event.target.value);
  }, []);
  const [loading, setLoading] = React.useState(true);
  //   console.log(exhibitor);

  return !loading && data ? (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Badges</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    onClick={async () => {
                      const a = document.createElement("a");

                      a.setAttribute(
                        "href",
                        "https://api.boilerworldexpo.com/api/api/oem/exportBadges"
                      );

                      a.setAttribute("download", "");

                      a.click();
                    }}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <Back />
                    </SvgIcon>
                  }
                  onClick={() => {
                    router.push("/oem");
                  }}
                  variant="contained"
                >
                  Back
                </Button>
              </div>
            </Stack>
          </Stack>

          <Tables
            count={exhibitor.length}
            items={data}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            // child={() => {
            //   let content = [];

            //   let data = exhibitor;
            //   for (var i = 0; i < data.length; i++) {
            //     if (data[i].exhibitor_mannings.length > 0) {
            //       let company_name =
            //         data[i].company_name != null ? data[i].company_name : "";
            //       let name =
            //         data[i].exhibitor_mannings[0].name != null
            //           ? data[i].exhibitor_mannings[0].name
            //           : "";
            //       let designation =
            //         data[i].exhibitor_mannings[0].designation != null
            //           ? data[i].exhibitor_mannings[0].designation
            //           : "";
            //       let email =
            //         data[i].exhibitor_mannings[0].email != null
            //           ? data[i].exhibitor_mannings[0].email
            //           : "";
            //       let mobile =
            //         data[i].exhibitor_mannings[0].mobile != null
            //           ? data[i].exhibitor_mannings[0].mobile
            //           : "";
            //       content.push([
            //         company_name.toUpperCase(),
            //         name.toUpperCase(),
            //         designation.toUpperCase(),
            //         email,
            //         mobile,
            //       ]);
            //       if (data[i].exhibitor_mannings.length > 1) {
            //         for (
            //           var j = 1;
            //           j < data[i].exhibitor_mannings.length;
            //           j++
            //         ) {
            //           content.push([
            //             "",
            //             data[i].exhibitor_mannings[j].name
            //               ? data[i].exhibitor_mannings[j].name.toUpperCase()
            //               : "",
            //             data[i].exhibitor_mannings[j].designation
            //               ? data[i].exhibitor_mannings[
            //                   j
            //                 ].designation.toUpperCase()
            //               : "",
            //             data[i].exhibitor_mannings[j].email
            //               ? data[i].exhibitor_mannings[j].email
            //               : "",
            //             data[i].exhibitor_mannings[j].mobile
            //               ? data[i].exhibitor_mannings[j].mobile
            //               : "",
            //           ]);
            //         }
            //       }
            //     }
            //   }
            //   console.log(content);
            //   return content.map((v) => (
            //     <TableRow hover>
            //       {v.map((vv) => (
            //         <TableCell>{vv}</TableCell>
            //       ))}
            //     </TableRow>
            //   ));
            // }}
            tableHeadTitles={[
              "Company",
              "Exhibitor Name",
              "Designation",
              "Email",
              "Mobile",
            ]}
          />
        </Container>
      </Box>
    </>
  ) : (
    <CircularProgress></CircularProgress>
  );
};
const Scrollbar = styled(SimpleBar)``;
const Tables = (props: any) => {
  const theme = useTheme();
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    refresh,
  } = props;
  console.log(items);
  const [openS, setOpenS] = React.useState(false);
  const [message, setMessage] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [Dprops, setDProps] = React.useState<{
    data?: {
      title: string;
      message: string;
    };
    action_button?: Array<{ fun: () => any; name: string }>;
  }>({});

  return (
    <>
      <Card>
        <Scrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Company",
                    "Exhibitor Name",
                    "Designation",
                    "Email",
                    "Mobile",
                  ].map((v, i) => (
                    <TableCell>{v}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((customer: any) => {
                  let exhibitor_mannings = customer.exhibitor_mannings[0];
                  return (
                    <TableRow hover key={customer.id}>
                      <TableCell>{customer.company_name}</TableCell>
                      <TableCell>{exhibitor_mannings.name || ""}</TableCell>
                      <TableCell>
                        {exhibitor_mannings.designation || ""}
                      </TableCell>
                      <TableCell>{exhibitor_mannings.email || ""}</TableCell>
                      <TableCell>{exhibitor_mannings.mobile || ""}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
