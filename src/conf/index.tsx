import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import { SvgIcon } from "@mui/material";
import StallIcon from "@heroicons/react/24/solid/HomeIcon";
export const items = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Exhibitors",
    path: "/exhibitor",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Visitors",
    path: "/visitor",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Users",
    path: "/users",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Oem",
    path: "/oem",
    icon: (
      <SvgIcon fontSize="small">
        <StallIcon />
      </SvgIcon>
    ),
  },
];
