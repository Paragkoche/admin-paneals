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
                icon={<UsersIcon />}
              />
            </Grid>

            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS url="/oem/fascia" name={"Fascia"} icon={<UsersIcon />} />
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
                icon={<UsersIcon />}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/contractor"
                name={"Contractor"}
                icon={<UsersIcon />}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/catalogue"
                name={"Catalogue"}
                icon={<UsersIcon />}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS url="/oem/badges" name={"Badges"} icon={<UsersIcon />} />
            </Grid>

            <Grid xs={12} sm={6} lg={3} m={4}>
              <SS
                url="/oem/powerrequirement"
                name={"Power Requirement"}
                icon={<UsersIcon />}
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
