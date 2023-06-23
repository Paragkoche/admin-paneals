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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a1 1 0 0 1 1 -1z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M21 12v6a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h6z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M9 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2a1 1 0 0 1 1 1z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    ),
  },
  {
    title: "Visitors",
    path: "/visitor",
    icon: () => (
      <SvgIcon fontSize="small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z"
            stroke-width="0"
            fill="currentColor"
          />
          <path
            d="M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
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
