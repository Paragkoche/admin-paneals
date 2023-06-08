import { getOEMexportBoothContractor } from "@/Api";
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
} from "@mui/material";
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
    getOEMexportBoothContractor(localStorage.getItem("token") || "").then(
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
    getOEMexportBoothContractor(localStorage.getItem("token") || "")
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
                <Typography variant="h4">Contractor</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    onClick={async () => {
                      const a = document.createElement("a");

                      a.setAttribute(
                        "href",
                        "https://api.boilerworldexpo.com/api/api/oem/exportBoothContractor"
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
                var tempcontractor_company_name =
                  data[i].exhibitor_contractors.length > 0
                    ? data[i].exhibitor_contractors[0].contractor_company_name
                    : "";
                var tempcontractor_person_name =
                  data[i].exhibitor_contractors.length > 0
                    ? data[i].exhibitor_contractors[0].contractor_person_name
                    : "";
                var tempcontractor_person_mobile =
                  data[i].exhibitor_contractors.length > 0
                    ? data[i].exhibitor_contractors[0].contractor_person_mobile
                    : "";
                var tempcontractor_person_email =
                  data[i].exhibitor_contractors.length > 0
                    ? data[i].exhibitor_contractors[0].contractor_person_email
                    : "";
                var tempcontractor_letter =
                  data[i].exhibitor_contractors.length > 0
                    ? data[i].exhibitor_contractors[0].authorisation_letter
                    : "";
                if (tempcontractor_letter !== "")
                  content.push([
                    data[i].company_name,
                    data[i].company_repName || "",
                    data[i].mobile_no,
                    data[i].email,
                    data[i].city,
                    data[i].country,
                    tempcontractor_company_name,
                    tempcontractor_person_name,
                    tempcontractor_person_mobile,
                    tempcontractor_person_email,
                    tempcontractor_letter,
                  ]);

                if (data[i].exhibitor_contractors.length > 1) {
                  for (
                    var j = 1;
                    j < data[i].exhibitor_contractors.length;
                    j++
                  ) {
                    content.push([
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      data[i].exhibitor_contractors[j].contractor_company_name,
                      data[i].exhibitor_contractors[j].contractor_person_name,
                      data[i].exhibitor_contractors[j].contractor_person_mobile,
                      data[i].exhibitor_contractors[j].contractor_person_email,
                      data[i].exhibitor_contractors[j].authorisation_letter,
                    ]);
                  }
                }
              }
              console.log(content);
              return content.map((v) => (
                <TableRow hover>
                  {v.map((vv) => (
                    <TableCell>{vv}</TableCell>
                  ))}
                </TableRow>
              ));
            }}
            tableHeadTitles={[
              "Company Name",
              "Full Name",
              "Mobile Number",
              "Email Address",
              "City",
              "Country",
              "Contractor Comapny Name",
              "Contractor Name",
              "Contractor Mobile",
              "Contractor Email",
              "Authorisation Letter",
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
