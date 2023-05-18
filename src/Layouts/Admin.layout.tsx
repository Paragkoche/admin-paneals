import { styled, alpha } from "@mui/material/styles";

import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import BellIcon from "@heroicons/react/24/solid/BellIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import React from "react";
const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import SimpleBar from "simplebar-react";
import Logo from "@/Components/Logo";
import Link from "next/link";
import items from "@/conf";
import { SideNavItem } from "@/Components/side-nav";
import { usePathname, useRouter } from "next/navigation";
import { AccountPopover } from "@/Components/AccountPopover";
import { useCallback, useRef, useState } from "react";

export function usePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return {
    anchorRef,
    handleClose,
    handleOpen,
    handleToggle,
    open,
  };
}
// import {styled} from "@mui/material/styles"
const Scrollbar = styled(SimpleBar)``;
const TopNav = ({ navOpen }: { navOpen: any | Function }) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const anchorRef = React.useRef(null);
  const [dt, setDt] = React.useState({});
  const accountPopover = usePopover();
  const router = useRouter();
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
    setDt(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);
  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.8),
          position: "sticky",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            {!lgUp && (
              <IconButton onClick={navOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Tooltip title="Contacts">
              <IconButton>
                <SvgIcon fontSize="small">
                  <UsersIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Badge badgeContent={4} color="success" variant="dot">
                  <SvgIcon fontSize="small">
                    <BellIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: "pointer",
                height: 24,
                width: 24,
              }}
              src="https://material-kit-pro-react.devias.io/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
        data={dt}
      />
    </>
  );
};

const SideNav = ({ open, onClick }: any) => {
  const pathname = usePathname();

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "neutral.400",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={Link}
            href="/admin"
            sx={{
              display: "inline-flex",
              height: 32,
              width: 32,
            }}
          >
            <Logo />
          </Box>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {items.map((item: any) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      onClose={onClick}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});
export const Layout = ({ children }: any) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/auth/Login");
    }
  }, []);
  return (
    <>
      <TopNav navOpen={() => setOpen(!open)} />
      <SideNav open={open} onClick={() => setOpen((s) => !s)} />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  );
};
