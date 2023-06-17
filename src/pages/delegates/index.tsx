import { getAllDelegates, getOEMexhibitorCatalogue } from "@/Api";
import Tabls from "@/Components/Tables/Tabls";
import Table_Cons from "@/Components/Tables/userprofile.table";
import { Layout } from "@/Layouts/Admin.layout";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  SvgIcon,
  TableCell,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Right from "@heroicons/react/24/solid/CheckIcon";
import Woring from "@heroicons/react/24/solid/XMarkIcon";
import { Head } from "next/document";
import React from "react";
import { useRouter } from "next/router";
import Back from "@heroicons/react/24/solid/ArrowLeftIcon";
export function applyPagination(
  documents: any[],
  page: number,
  rowsPerPage: number
) {
  console.log("ss -- ", documents);

  return documents?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
const Page = () => {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [exhibitor, setExhibitor] = React.useState<Array<any>>([]);
  const [data, setData] = React.useState(
    applyPagination(exhibitor, page, rowsPerPage)
  );
  React.useEffect(() => {
    return setData(applyPagination(exhibitor, page, rowsPerPage));
  }, [page, rowsPerPage, exhibitor]);

  const router = useRouter();
  React.useEffect(() => {
    getAllDelegates(localStorage.getItem("token") || "")
      .then(
        async (data) => {
          let _data = await data.json();
          console.log(_data.data);

          setExhibitor(_data.data.rows);
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
                <Typography variant="h4">Catalogue</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    onClick={async () => {
                      const a = document.createElement("a");

                      a.setAttribute(
                        "href",
                        "https://api.boilerworldexpo.com/api/api/oem/exportCatalogue"
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

          <Tabls
            count={exhibitor.length}
            items={data}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            child={() => {
              let content = [];

              let data = exhibitor;
              for (var i = 0; i < data.length; i++) {
                content.push([
                  data[i]?.company_name || "",
                  data[i]?.name || "",
                  data[i]?.gender || "",
                  data[i]?.category || "",
                  data[i]?.institute || "",
                  data[i]?.branch || "",
                  data[i]?.mobile_no || "",
                  data[i]?.email || "",
                  data[i]?.district || "",
                  data[i]?.city || "",
                  data[i]?.state || "",
                  data[i]?.country || "",
                  data[i]?.hall || "",
                  data[i]?.day_1 || "",
                  data[i]?.day_2 || "",
                  data[i]?.day_3 || "",
                  data[i]?.all_day || "",
                ]);
              }
              console.log(content);
              return content.map((v) => (
                <TableRow hover>
                  {v.map((vv) =>
                    typeof vv !== "boolean" ? (
                      <TableCell>{vv}</TableCell>
                    ) : (
                      <TableCell>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            padding: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            borderRadius: "50%",
                            bgcolor: v
                              ? theme.palette.success.main
                              : theme.palette.error.main,
                          }}
                        >
                          {vv ? <Right /> : <Woring />}
                        </Box>
                      </TableCell>
                    )
                  )}
                </TableRow>
              ));
            }}
            tableHeadTitles={[
              "company_name",
              "name",
              "gender",
              "category",
              "institute",
              "branch",
              "mobile_no",
              "email",
              "district",
              "city",
              "state",
              "country",
              "hall",
              "day_1",
              "day_2",
              "day_3",
              "all_day",
            ]}
          />
        </Container>
      </Box>
    </>
  ) : (
    <CircularProgress></CircularProgress>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
