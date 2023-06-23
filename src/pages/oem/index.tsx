import { getAllExhibitor } from "@/Api";
import { Layout } from "@/Layouts/Admin.layout";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Right from "@heroicons/react/24/solid/CheckIcon";
import Woring from "@heroicons/react/24/solid/XMarkIcon";
import {
  Box,
  Container,
  Grid,
  Stack,
  Table,
  Card,
  Typography,
  styled,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
  TableBody,
  useTheme,
  CardContent,
  SvgIcon,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { useRouter } from "next/navigation";
const SS = ({ name, icon, url }: any) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(url)}
      sx={{ height: "100%", cursor: "pointer" }}
    >
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {name}
            </Typography>
            <Typography variant="h4">{name}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>{icon}</SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};
const Scrollbar = styled(SimpleBar)``;
const Page = () => {
  const [ex, setEx] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllExhibitor(localStorage.getItem("token") || "")
      .then(async (data) => {
        let _d = await data.json();
        setEx(_d.data.rows);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const theme = useTheme();
  return loading && ex ? (
    <CircularProgress />
  ) : (
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
              <Typography variant="h4">OEM</Typography>
            </Stack>
          </Stack>

          <Grid container spacing={7}>
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/userprofile"
                name={"User Profile"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
              />
            </Grid>

            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/fascia"
                name={"Fascia"}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zm-3 8H8.618l3-6h7.764l-3 6z"></path>
                  </svg>
                }
              />
            </Grid>
            {/* <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/furniture"
                name={"Furniture"}
                icon={<UsersIcon />}
              />
            </Grid> */}
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/hostandhostess"
                name={"Host And Hostess"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M11 2l-.15 .005a2 2 0 0 0 -1.85 1.995v2.803l-2.428 -1.401a2 2 0 0 0 -2.732 .732l-1 1.732l-.073 .138a2 2 0 0 0 .805 2.594l2.427 1.402l-2.427 1.402a2 2 0 0 0 -.732 2.732l1 1.732l.083 .132a2 2 0 0 0 2.649 .6l2.428 -1.402v2.804a2 2 0 0 0 2 2h2l.15 -.005a2 2 0 0 0 1.85 -1.995v-2.804l2.428 1.403a2 2 0 0 0 2.732 -.732l1 -1.732l.073 -.138a2 2 0 0 0 -.805 -2.594l-2.428 -1.403l2.428 -1.402a2 2 0 0 0 .732 -2.732l-1 -1.732l-.083 -.132a2 2 0 0 0 -2.649 -.6l-2.428 1.4v-2.802a2 2 0 0 0 -2 -2h-2z"
                      stroke-width="0"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/contractor"
                name={"Contractor"}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 6h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm5 4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V8h2v2zm0-4H9V4h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2zm0-4h-2V4h2v2zm5 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z"></path>
                  </svg>
                }
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/catalogue"
                name={"Catalogue"}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.103 0-2 .897-2 2v4h18V5c0-1.103-.897-2-2-2zM3 19c0 1.103.897 2 2 2h8V11H3v8zm12 2h4c1.103 0 2-.897 2-2v-8h-6v10z"></path>
                  </svg>
                }
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/badges"
                name={"Badges"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
              />
            </Grid>

            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/powerrequirement"
                name={"Power Requirement"}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
              />
            </Grid>
          </Grid>
        </Stack>
        <Card>
          <Scrollbar>
            <Box sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {[
                      "Exhibitors",
                      "01",
                      "02",
                      "03",
                      "04",
                      "05",
                      "06",
                      "07",
                      "08",
                      "09",
                      "10",
                      "11",
                      "12",
                    ].map((v) => (
                      <>
                        <TableCell>{v}</TableCell>
                      </>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ex.map((data: any) => (
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle2">
                          {data.company_name}
                        </Typography>
                      </TableCell>

                      {[
                        data.oem_user_profile,
                        data.oem_fascia,
                        data.oem_exhibitor_badges,
                        data.oem_power_requirement,
                        data.oem_fascia,
                        data.oem_host_hostess,
                        data.oem_booth_contractor,
                        data.oem_catalog_entry,
                        data.oem_indemnity_undertaking,
                        data.oem_participation,
                        data.oem_sponsorship,
                        data.oem_newsletter,
                      ].map((v) => (
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
                              bgcolor: v
                                ? theme.palette.success.main
                                : theme.palette.error.main,
                            }}
                          >
                            {v ? <Right /> : <Woring />}
                          </Box>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Scrollbar>
        </Card>
      </Container>
    </Box>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
