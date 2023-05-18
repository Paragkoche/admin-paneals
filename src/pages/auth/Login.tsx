import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Button,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Layout } from "../../Layouts/Auth.layout";
import React from "react";
import { Login } from "@/Api";
import { useRouter } from "next/router";
const Page = () => {
  const [fdata, setFdata] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Login | Boiler World Expo Admin</title>
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
              <Typography variant="h4">Login</Typography>
            </Stack>
            <form>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={fdata.email}
                  onChange={(e) =>
                    setFdata((s) => ({ ...s, email: e.target.value }))
                  }
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  onChange={(e) =>
                    setFdata((s) => ({ ...s, password: e.target.value }))
                  }
                />
              </Stack>
              <Button
                fullWidth
                disabled={loading}
                size="large"
                sx={{ mt: 3 }}
                type="button"
                variant="contained"
                onClick={() => {
                  setLoading(true);
                  Login(fdata)
                    .then(
                      (e) => {
                        if (e.data.status) {
                          setMessage(e.data.message);
                          setOpen(true);
                          localStorage.setItem("token", e.data.token);
                          localStorage.setItem(
                            "user",
                            JSON.stringify(e.data.data)
                          );
                          router.push("/");
                        } else {
                          setMessage(e.data.message);
                          setOpen(true);
                        }
                      },
                      (e) => {
                        setMessage(e.data.message);
                        setOpen(true);
                      }
                    )
                    .finally(() => {
                      setLoading(false);
                    });
                }}
              >
                Continue
              </Button>
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
