import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  alpha,
} from "@mui/material";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => null,
});

export const Chart = styled(ApexChart)``;
const useChartOptions = () => {
  const theme: any = useTheme();

  return {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: true,
      },
    },
    colors: [theme.palette.primary.main, "#06AED4", "#F79009"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },

    stroke: {
      curve: "smooth",
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },

    yaxis: {
      labels: {
        formatter: (value: any) => value,
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};
export default (props: any) => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();

  return (
    <Card sx={{ ...sx, mr: { lg: 4 } }}>
      <CardHeader title="Users" />
      <CardContent>
        <Chart
          height={350}
          options={chartOptions as any}
          series={chartSeries}
          type="line"
          width="100%"
        />
      </CardContent>
    </Card>
  );
};
