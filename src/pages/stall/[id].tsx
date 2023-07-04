import { Layout } from "@/Layouts/Admin.layout";
import {
  AddStall,
  getAllExhibitor,
  getAllStall,
  getExhibitor,
} from "../../Api";
import { useRouter } from "next/router";
import React from "react";
import FloorPlan from "@/Components/FloorPlan";
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import { MultiSelect } from "react-mui-multi-select";
import { _data } from "../../conf/conf";

const Page = () => {
  const router = useRouter();
  const [ex, setEx] = React.useState<any>();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [pop, setPop] = React.useState(false);
  const [allData, setAllData] = React.useState<
    Array<{
      name?: string;
      width?: number;
      height?: number;
      area?: number;
      is_book?: boolean;
    }>
  >([]);
  const [data, setData] = React.useState<
    Array<
      | {
          name: string;
          width: number;
          height: number;
          area: number;
          is_book: boolean;
        }
      | any
    >
  >([]);
  const [value, setValue] = React.useState<
    Array<{
      name: string;
      width: number;
      height: number;
      area: number;
      is_book: boolean;
    }>
  >([]);
  const [from, setFrom] = React.useState({
    stall_no: "",
    stall_type: "",
    number_of_bagdes: 0,
    extra_badges: 0,
    number_food_coupons: 0,
    extra_food_coupons: 0,
    table: 0,
    chair: 0,
    power_socket: 0,
    dustbin: 0,
    spotlight: 0,
    hall: "",
    height: 0,
    length: 0,
    width: 0,
    area: 0,
    price: 0,
    open_sides: 0,
    exhibitor_id: router.query.id,
  });
  React.useEffect(() => {
    getAllStall(localStorage.getItem("token") || "").then(async (data) => {
      let json = await data.json();
      let ds: any[] = [];
      if (json.data.length !== 0) {
        for (let i of json.data) {
          if (ds.length == 0) {
            ds = _data.filter(
              (v) => i.stall_no.split(" ").indexOf(v.name) == -1
            );
          } else {
            ds = ds.filter((v) => i.stall_no.split(" ").indexOf(v.name) == -1);
          }
        }

        setAllData(ds);
      } else {
        setAllData(_data);
      }
    });
    getExhibitor(
      localStorage.getItem("token") || "",
      router.query.id?.toString() || ""
    )
      .then(async (data) => {
        let json = await data.json();
        setEx(json.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router.query.id]);
  const [loading, setLoading] = React.useState(true);
  return loading && !router.query.id ? (
    <Box>
      <CircularProgress></CircularProgress>
    </Box>
  ) : (
    <>
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FloorPlan />
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl>
              <Box>
                <TextField
                  type="tex"
                  value={ex?.company_repName}
                  disabled
                  sx={{ m: 3 }}
                ></TextField>
              </Box>
            </FormControl>
            <FormControl sx={{ m: 3, width: 200 }}>
              <InputLabel id="Hall-label">Hall</InputLabel>
              <Select
                labelId="Hall-label"
                onChange={(e: any) => {
                  setData(
                    allData.filter(
                      (v: any) => v.name[0] == e.target.value[0] && !v.is_book
                    )
                  );
                  setFrom((s) => ({
                    ...s,
                    hall: e.target.value[0],
                  }));
                }}
              >
                <MenuItem value="Tsavo-hall">TSAVO Hall</MenuItem>
                <MenuItem value="COURTYARD-hall">COURTYARD Hall</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 3, width: 500 }}>
              <Box>
                <MultiSelect
                  getOptionKey={(u) => u.name || ""}
                  getOptionLabel={(u) => u.name || ""}
                  value={value}
                  options={data}
                  label="Stall"
                  placeholder="Stall"
                  onChange={(e) => {
                    setValue(e);
                    let w = 0;
                    let l = 0;
                    let a = 0;
                    let no = "";
                    let t = "";
                    let tb = 0;
                    let c = 0;
                    let sl = 0;
                    let ps = 0;
                    let d = 0;

                    for (let i of e) {
                      w += i.width;
                      l += i.height;
                      a += i.area;
                      no += i.name + " ";
                      tb += i.t;
                      c += i.c;
                      sl += i.s;
                      ps += i.ps;
                      d += i.d;
                      if (t == "") t += i.type;
                      if (t[0] == "b" && i.type[0] !== "b") t += "-" + i.type;
                      if (t[0] == "s" && i.type[0] !== "s") t += "-" + i.type;
                    }
                    setFrom((s) => ({
                      ...s,
                      stall_type: t,
                      stall_no: no,
                      width: w,
                      length: l,
                      area: a,
                      table: tb,
                      chair: c,
                      power_socket: ps,
                      spotlight: sl,
                      dustbin: d,
                    }));
                    console.log(t);
                  }}
                />
              </Box>
            </FormControl>
            <FormControl sx={{ m: 3, width: 200 }}>
              <InputLabel id="Stall-type-label">Stall Type</InputLabel>
              <Select
                labelId="Stall-type-label"
                value={from.stall_type}
                onChange={(e) =>
                  setFrom((s) => ({
                    ...s,
                    stall_type: e.target.value as string,
                  }))
                }
              >
                <MenuItem value="shell">Shell</MenuItem>
                <MenuItem value="bare">Bare</MenuItem>
                <MenuItem value="bare-shell">Bare-Shell</MenuItem>
                <MenuItem value="shell-bare">Shell-Bare</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="number"
              label="Number of Badges"
              onChange={(e) =>
                setFrom((s) => ({
                  ...s,
                  number_of_bagdes: parseInt(e.target.value),
                }))
              }
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              label="Number of Extra Badges"
              onChange={(e) =>
                setFrom((s) => ({
                  ...s,
                  extra_badges: parseInt(e.target.value),
                }))
              }
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              label="Food Coupons"
              value={from.number_food_coupons}
              onChange={(e) =>
                setFrom((s) => ({
                  ...s,
                  number_food_coupons: parseInt(e.target.value),
                }))
              }
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              value={from.extra_food_coupons}
              onChange={(e) =>
                setFrom((s) => ({
                  ...s,
                  extra_food_coupons: parseInt(e.target.value),
                }))
              }
              label="Extra Food Coupons"
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              onChange={(e) =>
                setFrom((s) => ({ ...s, price: parseInt(e.target.value) }))
              }
              label="Price"
              value={from.price}
              sx={{ m: 3 }}
            ></TextField>

            <TextField
              type="number"
              label="Table"
              onChange={(e) =>
                setFrom((s) => ({ ...s, table: parseInt(e.target.value) }))
              }
              value={from.table}
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              label="Chair"
              onChange={(e) =>
                setFrom((s) => ({ ...s, chair: parseInt(e.target.value) }))
              }
              value={from.chair}
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              label="Power Socket"
              onChange={(e) =>
                setFrom((s) => ({
                  ...s,
                  power_socket: parseInt(e.target.value),
                }))
              }
              value={from.power_socket}
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              onChange={(e) =>
                setFrom((s) => ({ ...s, spotlight: parseInt(e.target.value) }))
              }
              value={from.spotlight}
              label="Spotlight"
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              onChange={(e) =>
                setFrom((s) => ({ ...s, dustbin: parseInt(e.target.value) }))
              }
              value={from.dustbin}
              label="Dustbin"
              sx={{ m: 3 }}
            ></TextField>

            <TextField
              type="number"
              onChange={(e) =>
                setFrom((s) => ({ ...s, height: parseInt(e.target.value) }))
              }
              label="height"
              value={from.height}
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              label="Width"
              value={from.width}
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              value={from.length}
              label="Length"
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              label="Area"
              value={from.area}
              sx={{ m: 3 }}
            ></TextField>
            <TextField
              type="number"
              label="Open Sides"
              sx={{ m: 3 }}
            ></TextField>
          </Box>
        </Box>
        <Button
          onClick={() => {
            AddStall(localStorage.getItem("token") || "", from)
              .then(async (e) => {
                setMessage(e.data.message);
                setPop((s) => !s);
              })
              .finally(() => {
                router.push("/exhibitor");
              });
          }}
        >
          Submit
        </Button>
      </Box>
      <Snackbar
        onBlur={() => setOpen((s) => !s)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={pop}
        onClose={() => setPop((a) => !a)}
        message={message}
        key={"Top" + "right"}
      />
    </>
  );
};

Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
