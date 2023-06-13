import MainCard from "@/Components/MainCard";
import { Layout } from "@/Layouts/Admin.layout";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ChartCard from "../Components/Cards/Card";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { OverviewTraffic } from "@/Components/Cards/Traffic";
import { getAllExhibitor, getAllVisitor, getAllDelegates } from "@/Api";

const Page = () => {
  const router = useRouter();
  const [loding, setLoading] = React.useState(true);
  const [visitors, setVisitors] = React.useState([]);
  const [Delegates, setDelegates] = React.useState([]);
  const [exhibitor, setExhibitor] = React.useState([]);
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/auth/Login");
    }
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token") || "";

      getAllVisitor(token).then(
        async (data) => {
          let d = await data.json();
          console.log(d.data);

          setVisitors(d.data.rows);
        },
        (e) => {
          console.log(e);
        }
      );
      getAllDelegates(token)
        .then(
          async (data) => {
            console.log(data);

            let d = await data.json();
            setDelegates(d.data.rows);
          },
          (e) => {
            console.log(e);
          }
        )
        .finally(() => setLoading(false));
      getAllExhibitor(token).then(
        async (data) => {
          let d = await data.json();
          setExhibitor(d.data.rows);
        },
        (e) => {
          console.log(e);
        }
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>Overview</title>
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
                <Typography variant="h4">Overview</Typography>
              </Stack>
            </Stack>

            <Grid container spacing={3}>
              <Grid xs={12} sm={6} lg={3}>
                <MainCard
                  name={"Vendors"}
                  icon={<UsersIcon />}
                  count={0}
                  color="primary.main"
                  sx={{ height: "100%" }}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <MainCard
                  name="Visitors"
                  icon={<UsersIcon />}
                  count={visitors.length}
                  color="warning.main"
                  sx={{ mx: 2 }}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <MainCard
                  name="Exhibitors"
                  icon={<UsersIcon />}
                  count={exhibitor.length}
                  color="error.main"
                  sx={{ mx: 2 }}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={3}>
                <MainCard
                  name="Delegates"
                  icon={<UsersIcon />}
                  count={Delegates.length}
                  color="info.main"
                  sx={{ height: "100%" }}
                />
              </Grid>

              <Grid xs={12} lg={8} sx={{ mt: 4 }}>
                <ChartCard
                  chartSeries={[
                    {
                      name: "Exhibitor",
                      data: [
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 1 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 2 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 3 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 4 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 5 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 6 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 7 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 8 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 9 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 10 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 11 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        exhibitor.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 12 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                      ],
                    },

                    {
                      name: "Visitors",
                      data: [
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 1 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 2 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 3 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 4 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 5 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 6 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 7 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 8 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 9 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 10 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 11 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        visitors.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 12 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                      ],
                    },
                    {
                      name: "Delegates",
                      data: [
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 1 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 2 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 3 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 4 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 5 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 6 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 7 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 8 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 9 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 10 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 11 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                        Delegates.filter(
                          (v: any) =>
                            new Date(v.createdAt).getMonth() == 12 - 1 &&
                            new Date(v.createdAt).getFullYear() ==
                              new Date(Date.now()).getFullYear()
                        ).length,
                      ],
                    },
                  ]}
                  sx={{ height: "100%" }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={4} sx={{ mt: 4 }}>
                <OverviewTraffic
                  labels={["Exhibitor", "Visitors", "Delegates", "Vendors"]}
                  chartSeries={[
                    exhibitor.length || 0,
                    visitors.length || 0,
                    Delegates.length || 0,
                    0,
                  ]}
                  sx={{ height: "100%" }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
