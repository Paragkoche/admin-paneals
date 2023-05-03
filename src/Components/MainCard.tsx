import { useTheme } from "@emotion/react";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
  alpha,
  colors,
} from "@mui/material";
import { ReactElement } from "react";

export default ({
  name,
  count,
  icon,
  sx,
  color,
}: {
  name: string;
  count: number;
  icon: ReactElement;
  sx: SxProps<Theme>;
  color: string;
}) => {
  const theme = useTheme();
  return (
    <Card sx={sx}>
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
            <Typography variant="h4">{count}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: color,
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
