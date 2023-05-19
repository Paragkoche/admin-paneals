import { create_admin } from "@/Api";
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
  Snackbar,
} from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { MultiSelect } from "react-mui-multi-select";
const Page = () => {
  const [fdata, setFdata] = useState<{
    name: string;
    mobile_no: string;
    email: string;
    password: string;
    role: string;
    feature: string[];
    capability: string[];
  }>({
    name: "",
    mobile_no: "",
    email: "",
    password: "",
    role: "",
    feature: [],
    capability: [],
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
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
            <form
              onSubmit={(e) => {
                setLoading(true);
                e.preventDefault();
                let permissions = fdata.capability.map((v) => {
                  let d: any[] = [];
                  fdata.feature.map((vv) => {
                    d.push({ capability: v, feature: vv });
                  });
                  return d;
                });
                create_admin(
                  { ...fdata, permissions },
                  localStorage.getItem("token") || ""
                )
                  .then(({ data }) => {
                    if (data.status) {
                      setFdata({
                        name: "",
                        mobile_no: "",
                        email: "",
                        password: "",
                        role: "",
                        feature: [],
                        capability: [],
                      });
                    }
                    setMessage(data.message);
                    setOpen(true);
                  })
                  .finally(() => setLoading(false));
              }}
            >
              <Stack spacing={3}>
                <TextField
                  value={fdata.name}
                  fullWidth
                  label="Name"
                  name="Name"
                  type="text"
                  onChange={(e) =>
                    setFdata((s) => ({ ...s, name: e.target.value }))
                  }
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={fdata.mobile_no}
                  name="Phone Number"
                  type="number"
                  onChange={(e) =>
                    setFdata((s) => ({ ...s, mobile_no: e.target.value }))
                  }
                />
                <TextField
                  fullWidth
                  value={fdata.email}
                  label="Email Address"
                  name="email"
                  type="email"
                  onChange={(e) =>
                    setFdata((s) => ({ ...s, email: e.target.value }))
                  }
                />
                <TextField
                  fullWidth
                  value={fdata.password}
                  label="Password"
                  name="Password"
                  type="Password"
                  onChange={(e) =>
                    setFdata((s) => ({ ...s, password: e.target.value }))
                  }
                />
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Select
                    label="Role"
                    value={fdata.role}
                    onChange={(e: any) =>
                      setFdata((s) => ({ ...s, role: e.target.value }))
                    }
                  >
                    <MenuItem value="superadmin">Super Admin</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </FormControl>
                {fdata.role == "admin" && (
                  <>
                    <FormControl>
                      <Box>
                        <MultiSelect
                          getOptionKey={(v) => v}
                          getOptionLabel={(v) => v}
                          options={["exhibitor", "visitor", "user", "vendor"]}
                          value={fdata.feature}
                          label="Feature"
                          onChange={(value: string[]) => {
                            console.log(value);

                            setFdata((s) => ({
                              ...s,
                              feature: value,
                            }));
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
                          value={fdata.capability}
                          label="Permission"
                          onChange={(value: string[]) => {
                            console.log(value);

                            setFdata((s) => ({
                              ...s,
                              capability: value,
                            }));
                          }}
                        ></MultiSelect>
                      </Box>
                    </FormControl>
                  </>
                )}{" "}
                <Button
                  disabled={loading}
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Add Admin
                </Button>
                <Button type="button" fullWidth size="large" sx={{ mt: 3 }}>
                  Back
                </Button>
              </Stack>
            </form>
          </div>
        </Box>
      </Box>
      <Snackbar
        onClick={() => setOpen((s) => !s)}
        open={open}
        autoHideDuration={500}
        message={message}
      />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
