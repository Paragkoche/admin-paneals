import { getOEMUserProfile, getOEMexhibitorFurniture } from "@/Api";
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
    getOEMexhibitorFurniture(localStorage.getItem("token") || "").then(
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
    getOEMexhibitorFurniture(localStorage.getItem("token") || "")
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
                <Typography variant="h4">Fascia</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    onClick={async () => {
                      const a = document.createElement("a");

                      a.setAttribute(
                        "href",
                        "https://api.boilerworldexpo.com/api/api/oem/exportFurniture"
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
                if (data[i].vendor_orders.length > 0) {
                  // for first orders

                  let company_name =
                    data[i].company_name != null ? data[i].company_name : "";
                  let product_name =
                    data[i].vendor_orders[0].orderItems[0].product_name != null
                      ? data[i].vendor_orders[0].orderItems[0].product_name
                      : "";
                  let product_price =
                    data[i].vendor_orders[0].orderItems[0].product_price != null
                      ? data[i].vendor_orders[0].orderItems[0].product_price
                      : "";
                  let product_quantity =
                    data[i].vendor_orders[0].orderItems[0].product_quantity !=
                    null
                      ? data[i].vendor_orders[0].orderItems[0].product_quantity
                      : "";
                  let total = product_price * product_quantity;
                  let total_tax = total * 0.18;
                  content.push([
                    company_name,
                    product_name,
                    product_price,
                    product_quantity,
                    total,
                    total_tax,
                  ]);

                  if (data[i].vendor_orders[0].orderItems.length > 1) {
                    for (
                      var j = 1;
                      j < data[i].vendor_orders[0].orderItems.length;
                      j++
                    ) {
                      let company_name =
                        data[i].company_name != null
                          ? data[i].company_name
                          : "";
                      let product_name =
                        data[i].vendor_orders[0].orderItems[j].product_name !=
                        null
                          ? data[i].vendor_orders[0].orderItems[j].product_name
                          : "";
                      let product_price =
                        data[i].vendor_orders[0].orderItems[j].product_price !=
                        null
                          ? data[i].vendor_orders[0].orderItems[j].product_price
                          : "";
                      let product_quantity =
                        data[i].vendor_orders[0].orderItems[j]
                          .product_quantity != null
                          ? data[i].vendor_orders[0].orderItems[j]
                              .product_quantity
                          : "";
                      let total = product_price * product_quantity;
                      let total_tax = total + total * 0.18;
                      content.push([
                        "",
                        product_name,
                        product_price,
                        product_quantity,
                        total,
                        total_tax,
                      ]);
                    }
                  }

                  // for second and consecutive orders

                  if (data[i].vendor_orders.length > 1) {
                    for (var x = 1; x < data[i].vendor_orders.length; x++) {
                      let company_name =
                        data[i].company_name != null
                          ? data[i].company_name
                          : "";
                      let product_name =
                        data[i].vendor_orders[x].orderItems[0].product_name !=
                        null
                          ? data[i].vendor_orders[x].orderItems[0].product_name
                          : "";
                      let product_price =
                        data[i].vendor_orders[x].orderItems[0].product_price !=
                        null
                          ? data[i].vendor_orders[x].orderItems[0].product_price
                          : "";
                      let product_quantity =
                        data[i].vendor_orders[x].orderItems[0]
                          .product_quantity != null
                          ? data[i].vendor_orders[x].orderItems[0]
                              .product_quantity
                          : "";
                      let total = product_price * product_quantity;
                      let total_tax = total * 0.18;
                      content.push([
                        "",
                        product_name,
                        product_price,
                        product_quantity,
                        total,
                        total_tax,
                      ]);

                      if (data[i].vendor_orders[x].orderItems.length > 1) {
                        for (
                          var j = 1;
                          j < data[i].vendor_orders[x].orderItems.length;
                          j++
                        ) {
                          let company_name =
                            data[i].company_name != null
                              ? data[i].company_name
                              : "";
                          let product_name =
                            data[i].vendor_orders[x].orderItems[j]
                              .product_name != null
                              ? data[i].vendor_orders[x].orderItems[j]
                                  .product_name
                              : "";
                          let product_price =
                            data[i].vendor_orders[x].orderItems[j]
                              .product_price != null
                              ? data[i].vendor_orders[x].orderItems[j]
                                  .product_price
                              : "";
                          let product_quantity =
                            data[i].vendor_orders[x].orderItems[j]
                              .product_quantity != null
                              ? data[i].vendor_orders[x].orderItems[j]
                                  .product_quantity
                              : "";
                          let total = product_price * product_quantity;
                          let total_tax = total * 0.18;
                          content.push([
                            "",
                            product_name,
                            product_price,
                            product_quantity,
                            total,
                            total_tax,
                          ]);
                        }
                      }
                    }
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
              "Company",
              "Product Name",
              "Product Unit Price",
              "Quantity",
              "Total",
              "Total with Tax",
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
