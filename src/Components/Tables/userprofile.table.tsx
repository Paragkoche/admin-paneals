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
  DialogTitle,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  DialogContent,
  TablePagination,
  TableRow,
  Typography,
  Snackbar,
} from "@mui/material";
import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";
import React from "react";
import { ConformExhibitor, deleteExhibitor, disapproveExhibitor } from "@/Api";
import { useRouter } from "next/router";
const Scrollbar = styled(SimpleBar)``;
const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");
export default ({
  count = 0,
  items = [],
  onPageChange = () => {},
  onRowsPerPageChange,
  page = 0,
  rowsPerPage = 0,
}: {
  count: number;
  items: any[];
  onPageChange: (event: any, value: any) => void;
  onRowsPerPageChange: (event: any) => void;
  page: number;
  rowsPerPage: number;
}) => {
  const router = useRouter();
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Booth Type</TableCell>
                <TableCell>Hall</TableCell>
                <TableCell>Stall No</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Email ID</TableCell>
                <TableCell>GST</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Post Code / Pin code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer: any) => {
                return (
                  customer.oem_user_profile && (
                    <TableRow hover key={customer.id}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Typography variant="subtitle2">
                            {customer.first_name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{customer.last_name}</TableCell>
                      <TableCell>{customer.company_name}</TableCell>
                      <TableCell>
                        {customer.stall[0]?.stall_type || ""}
                      </TableCell>
                      <TableCell>{customer.stall[0]?.hall || ""}</TableCell>
                      <TableCell>{customer.stall[0]?.stall_no || ""}</TableCell>
                      <TableCell>{customer.mobile_no}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.gst}</TableCell>
                      <TableCell>{customer.website}</TableCell>
                      <TableCell>{`${customer.address_line1 || ""},${
                        customer.address_line2 || ""
                      },${customer.address_line3 || ""}`}</TableCell>
                      <TableCell>{customer.city}</TableCell>
                      <TableCell>{customer.state}</TableCell>
                      <TableCell>{customer.country}</TableCell>
                      <TableCell>{customer.post_code}</TableCell>
                    </TableRow>
                  )
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
  );
};
