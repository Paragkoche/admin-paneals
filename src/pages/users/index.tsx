import { CustomersTable } from "@/Components/Tables/admin.tabls";
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
import { getAllAdmin, getAllExhibitor } from "@/Api";
import { useRouter } from "next/router";
export function applyPagination(
  documents: any,
  page: number,
  rowsPerPage: number
) {
  return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

const Page = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [exhibitor, setExhibitor] = React.useState<Array<Exhibitor>>([]);
  const [data, setData] = React.useState(
    applyPagination(exhibitor, page, rowsPerPage)
  );
  React.useEffect(() => {
    return setData(applyPagination(exhibitor, page, rowsPerPage));
  }, [page, rowsPerPage, exhibitor]);
  console.log(exhibitor, data);

  React.useEffect(() => {
    getAllAdmin(localStorage.getItem("token") || "").then(
      (data) => {
        console.log(data);

        setExhibitor(data.data.data.rows);
        console.log(exhibitor);
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
        <title>Admins</title>
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
                <Typography variant="h4">Users</Typography>
              </Stack>
              <div>
                <Button
                  onClick={() => router.push("/users/add")}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
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
            fu={() =>
              getAllAdmin(localStorage.getItem("token") || "").then(
                (data) => {
                  console.log(data);

                  setExhibitor(data.data.data.rows);
                  console.log(exhibitor);
                },
                (e) => {
                  console.log(e);
                }
              )
            }
          />
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
