import { CustomersTable } from "@/Components/Tables/Exhibitors-tabels";
import { Layout } from "@/Layouts/Admin.layout";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { json2csv } from "json-2-csv";
import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  OutlinedInput,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import { Exhibitor } from "../../types";
import { getAllExhibitor } from "@/Api";
import { useRouter } from "next/router";
export function applyPagination(
  documents: any,
  page: number,
  rowsPerPage: number
) {
  return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

const Page = () => {
  const useCustomers = (exhibitor: Exhibitor[]) => {
    return (page: number, rowsPerPage: number) => {
      return React.useMemo(() => {
        return applyPagination(exhibitor, page, rowsPerPage);
      }, [page, rowsPerPage]);
    };
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [exhibitor, setExhibitor] = React.useState<Array<Exhibitor>>([]);
  const [data, setData] = React.useState(
    applyPagination(exhibitor, page, rowsPerPage)
  );
  React.useEffect(() => {
    return setData(applyPagination(exhibitor, page, rowsPerPage));
  }, [page, rowsPerPage, exhibitor]);
  const refresh = () => {
    getAllExhibitor(localStorage.getItem("token") || "").then(
      async (data) => {
        let d = await data.json();
        setExhibitor(d.data.rows);
      },
      (e) => {
        console.log(e);
      }
    );
  };
  React.useEffect(() => {
    getAllExhibitor(localStorage.getItem("token") || "").then(
      async (data) => {
        let d = await data.json();
        setExhibitor(d.data.rows);
      },
      (e) => {
        console.log(e);
      }
    );
  }, []);
  const handlePageChange = React.useCallback((event: any, value: any) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = React.useCallback((event: any) => {
    setRowsPerPage(event.target.value);
  }, []);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Exhibitor</title>
      </Head>
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
                <Typography variant="h4">Exhibitors</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    onClick={async () => {
                      const a = document.createElement("a");

                      a.setAttribute(
                        "href",
                        "https://api.boilerworldexpo.com/api/exhibitor/export"
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
                      <PlusIcon />
                    </SvgIcon>
                  }
                  onClick={() => {
                    router.push("/exhibitor/add");
                  }}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
          </Stack>

          <CustomersTable
            count={exhibitor.length}
            items={data}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            refresh={refresh}
          />
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
