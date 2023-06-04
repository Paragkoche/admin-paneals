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
                <TableCell>Company</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Product Category</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer: any) => {
                return (
                  <TableRow hover key={customer.id}>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">
                          {customer.company_name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{customer.company_repName}</TableCell>
                    <TableCell>{customer.mobile_no}</TableCell>
                    <TableCell>{customer.pro_category || ""}</TableCell>
                    <TableCell>{customer.email || ""}</TableCell>
                    <TableCell>{customer.city || ""}</TableCell>
                    <TableCell>{customer.country}</TableCell>
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
  );
};
