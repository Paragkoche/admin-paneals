import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";
import React from "react";
import { deleteVisitor } from "@/Api";

const Scrollbar = styled(SimpleBar)``;
const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");
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
export const CustomersTable = (props: any) => {
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
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Action Button</TableCell>
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
                            {getInitials(customer.company_repName)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {customer.company_repName}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.company_name}</TableCell>
                      <TableCell>{customer.mobile_no}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            setOpen(true);
                            setDProps({
                              data: {
                                title: "Alert",
                                message: `Are you sure you want to delete the details of this Visitor?`,
                              },
                              action_button: [
                                {
                                  name: "Yes",
                                  fun: () => {
                                    deleteVisitor(
                                      localStorage.getItem("token") || "",
                                      customer.id
                                    )
                                      .then(
                                        async (data) => {
                                          const d = await data.json();
                                          setMessage(d.message);
                                          setOpenS(true);
                                        },
                                        async (error) => {
                                          const d = await error.json();

                                          setMessage(d.message);
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

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
  refresh: PropTypes.func,
};
