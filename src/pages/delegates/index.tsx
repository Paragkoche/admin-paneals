import {
  deleteDelegate,
  getAllDelegates,
  getOEMexhibitorCatalogue,
} from "@/Api";
import Tabls from "@/Components/Tables/Tabls";
import Table_Cons from "@/Components/Tables/userprofile.table";
import { Layout } from "@/Layouts/Admin.layout";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Stack,
  SvgIcon,
  Table,
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
import { format } from "date-fns";
import {
  Avatar,
  // Box,
  Card,
  Checkbox,
  // Stack,
  // Table,
  TableBody,
  // TableCell,
  TableHead,
  TablePagination,
  // TableRow,
  // Typography,
} from "@mui/material";
import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";

const Scrollbar = styled(SimpleBar)``;
const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");

import Back from "@heroicons/react/24/solid/ArrowLeftIcon";
export function applyPagination(
  documents: any[],
  page: number,
  rowsPerPage: number
) {
  console.log("ss -- ", documents);

  return documents?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

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
                    "company_name",
                    "name",
                    "gender",
                    "category",
                    "institute",
                    "branch",
                    "mobile_no",
                    "email",
                    // "district",
                    "city",
                    "state",
                    "country",
                    "hall",
                    "Email",
                    "day_1",
                    "day_2",
                    "day_3",
                    "all_day",
                    "Action Button",
                  ].map((v, i) => (
                    <TableCell>{v}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((customer: any) => {
                  return (
                    <TableRow hover key={customer.id}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Avatar
                            src={customer.avatar}
                            sx={{ bgcolor: "warning.main" }}
                          >
                            {getInitials(customer.company_name)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {customer.company_name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.gender}</TableCell>
                      <TableCell>{customer.category}</TableCell>
                      <TableCell>{customer.institute}</TableCell>
                      <TableCell>{customer.branch}</TableCell>
                      <TableCell>{customer.mobile_no}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      {/* <TableCell>{customer.district}</TableCell> */}
                      <TableCell>{customer.city}</TableCell>
                      <TableCell>{customer.state}</TableCell>
                      <TableCell>{customer.country}</TableCell>
                      <TableCell>{customer.hall}</TableCell>
                      <TableCell>{customer.email}</TableCell>
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
                            bgcolor: customer.day_1
                              ? theme.palette.success.main
                              : theme.palette.error.main,
                          }}
                        >
                          {customer.day_1 ? <Right /> : <Woring />}
                        </Box>
                      </TableCell>
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
                            bgcolor: customer.day_2
                              ? theme.palette.success.main
                              : theme.palette.error.main,
                          }}
                        >
                          {customer.day_2 ? <Right /> : <Woring />}
                        </Box>
                      </TableCell>
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
                            bgcolor: customer.day_3
                              ? theme.palette.success.main
                              : theme.palette.error.main,
                          }}
                        >
                          {customer.day_3 ? <Right /> : <Woring />}
                        </Box>
                      </TableCell>
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
                            bgcolor:
                              (customer.day_1 &&
                                customer.day_2 &&
                                customer.day_3) == true
                                ? theme.palette.success.main
                                : theme.palette.error.main,
                          }}
                        >
                          {(customer.day_1 &&
                            customer.day_2 &&
                            customer.day_3) == true ? (
                            <Right />
                          ) : (
                            <Woring />
                          )}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            setOpen(true);
                            setDProps({
                              data: {
                                title: "Alert",
                                message: `Are you sure you want to delete the details of this delegate?`,
                              },
                              action_button: [
                                {
                                  name: "Yes",
                                  fun: () => {
                                    deleteDelegate(
                                      localStorage.getItem("token") || "",
                                      customer.id
                                    )
                                      .then(
                                        (data) => {
                                          setMessage(data.data.message);
                                          setOpenS(true);
                                        },
                                        (error) => {
                                          setMessage(error.data.message);
                                          setOpenS(true);
                                        }
                                      )
                                      .finally(() => {
                                        refresh();
                                        setOpen(false);
                                      });
                                  },
                                },
                                {
                                  name: "No",
                                  fun: () => setOpen((s) => !s),
                                },
                              ],
                            });
                          }}
                          color="error"
                        >
                          Delete
                        </Button>
                      </TableCell>
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
      <PopUp open={open} {...Dprops} />
      <Snackbar
        open={openS}
        message={message}
        onClose={() => setOpenS((s) => !s)}
      />
    </>
  );
};
const PopUp = (props: {
  data?: {
    title: string;
    message: string;
  };
  action_button?: Array<{ fun: () => any; name: string }>;
  open: boolean;
}) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>{props.data?.title}</DialogTitle>
      <DialogContent>{props.data?.message}</DialogContent>
      <DialogActions>
        {props?.action_button?.map((v, i) => (
          <Button onClick={v.fun} key={i}>
            {v.name}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};
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
                <Typography variant="h4">Delegates</Typography>
                {/* <Stack alignItems="center" direction="row" spacing={1}>
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
                </Stack> */}
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <Back />
                    </SvgIcon>
                  }
                  onClick={() => {
                    router.push("/admin");
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
            refresh={() => {
              getAllDelegates(localStorage.getItem("token") || "").then(
                async (data) => {
                  let _data = await data.json();
                  console.log(_data.data);

                  setExhibitor(_data.data.rows);
                },
                (e) => {
                  console.log(e);
                }
              );
            }}
            rowsPerPage={rowsPerPage}
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
