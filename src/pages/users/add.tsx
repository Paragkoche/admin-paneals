import { Layout } from "@/Layouts/Auth.layout";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
} from "@mui/material";
import Head from "next/head";
import { MultiSelect } from "react-mui-multi-select";
const Page = () => {
  return (
    <>
      <Head>
        <title>Admin Add | Boiler World Expo Admin</title>
      </Head>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Create Admin</Typography>
            </Stack>
            <form>
              <Stack spacing={3}>
                <TextField fullWidth label="Name" name="Name" type="text" />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="Phone Number"
                  type="number"
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="Password"
                  type="Password"
                />
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Select label="Role">
                    <MenuItem value="superadmin">Super Admin</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <Box>
                    <MultiSelect
                      getOptionKey={(v) => v}
                      getOptionLabel={(v) => v}
                      options={[]}
                      value={[]}
                      label="Feature"
                      onChange={function (value: never[]): void {
                        throw new Error("Function not implemented.");
                      }}
                    ></MultiSelect>
                  </Box>
                </FormControl>
                <FormControl>
                  <Box>
                    <MultiSelect
                      getOptionKey={(v) => v}
                      getOptionLabel={(v) => v}
                      options={[
                        "read",
                        "create",
                        "delete",
                        "update",
                        "confirm",
                      ]}
                      value={[]}
                      label="Permission"
                      onChange={() => {}}
                    ></MultiSelect>
                  </Box>
                </FormControl>
                <Button
                  disabled
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="button"
                  variant="contained"
                >
                  Add Admin
                </Button>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="button"
                  variant="contained"
                >
                  Back
                </Button>
              </Stack>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
