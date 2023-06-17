import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Stall from "@heroicons/react/24/solid/BuildingStorefrontIcon";
import UserGroup from "@heroicons/react/24/solid/UserGroupIcon";
import { SvgIcon } from "@mui/material";
// import StallIcon from "@heroicons/react/24/solid/HomeIcon";
import CardIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
import React from "react";
export default [
  {
    title: "Dashboard",
    path: "/admin",
    icon: () => (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Exhibitors",
    path: "/exhibitor",
    icon: () => (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Delegates",
    path: "/delegates",
    icon: () => (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Visitors",
    path: "/visitor",
    icon: () => (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Stall",
    path: "/stall",
    icon: () => (
      <SvgIcon fontSize="small">
        <Stall />
      </SvgIcon>
    ),
  },
  {
    title: "OEM",
    path: "/oem",
    icon: () => (
      <SvgIcon fontSize="small">
        <Stall />
      </SvgIcon>
    ),
  },
  {
    title: "Users",
    path: "/users",
    icon: () => (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Vendors",
    path: "/vendors",
    icon: () => (
      <SvgIcon fontSize="small">
        <UserGroup />
      </SvgIcon>
    ),
  },
];
