import React from "react";
import { _data } from "../../../conf/conf";
import {
  filledInputClasses,
  inputLabelClasses,
  outlinedInputClasses,
  paperClasses,
  tableCellClasses,
} from "@mui/material";
import { Layout } from "@/Layouts/Admin.layout";
import { useRouter } from "next/router";
import { getAllStall, getExhibitor, getStallByEx, UpdateStall } from "@/Api";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import FloorPlan from "@/Components/FloorPlan";
import { MultiSelect } from "react-mui-multi-select";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ex, setEx] = React.useState<any>({});
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
    exhibitor_id: "",
  });
  console.log(value);

  React.useEffect(() => {
    if (id)
      getAllStall(localStorage.getItem("token") || "")
        .then(async (data) => {
          let json = await data.json();
          let ds: any[] = [];
          for (let i of json.data) {
            if (ds.length == 0) {
              ds = _data.filter(
                (v) => i.stall_no.split(" ").indexOf(v.name) == -1
              );
            } else {
              ds = ds.filter(
                (v) => i.stall_no.split(" ").indexOf(v.name) == -1
              );
            }
          }

          setAllData(ds);
        })
        .then(() => {
          getExhibitor(
            localStorage.getItem("token") || "",
            id?.toString() || ""
          ).then(async (data) => {
            let json = await data.json();
            setEx(json.data);
            setFrom({
              exhibitor_id: id,
              stall_type: json.data.stall[0].stall_type,
              ...json.data.stall[0],
            });

            // setValue();
            // console.log(value);
          });
        })
        .finally(() => {
          setLoading(false);
        });
    return () => {};
  }, [id]);
  const [loading, setLoading] = React.useState(true);
  return loading ? (
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
                  value={ex.company_repName}
                  disabled
                  sx={{ m: 3 }}
                ></TextField>
              </Box>
            </FormControl>
            <FormControl sx={{ m: 3, width: 200 }}>
              <InputLabel id="Hall-label">Hall</InputLabel>
              <Select
                sx={
                  {
                    // border: "none",
                  }
                }
                labelId="Hall-label"
                onChange={(ej: any) => {
                  setValue([]);
                  setData(
                    allData.filter(
                      (v: any) => v.name[0] == ej.target.value[0] && !v.is_book
                    )
                  );

                  getStallByEx(ex.email).then(async (data) => {
                    let d = await data.json();
                    console.log(d);

                    d.data
                      .filter((v: any) => {
                        if (v.exhibitor) return v.exhibitor.id == id;
                      })
                      .map((xx: any) => {
                        console.log(xx);

                        xx.stall_no.split(" ").map((e: any) => {
                          if (e !== "") setValue((s) => [...s, { name: e }]);
                        });
                      });
                  });

                  setFrom((s) => ({
                    ...s,
                    hall: ej.target.value[0],
                  }));
                }}
              >
                <MenuItem value="T">TSAVO Hall</MenuItem>
                <MenuItem value="C">COURTYARD Hall</MenuItem>
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
                    for (let i of e) {
                      w += i.width;
                      l += i.height;
                      a += i.area;
                      no += i.name + " ";
                      if (t == "") t += i.type;
                      if (t[0] == "b" && i.type[0] !== "b") t += "-" + i.type;
                      if (t[0] == "s" && i.type[0] !== "s") t += "-" + i.type;
                    }
                    console.log(t);

                    setFrom((s) => ({
                      ...s,
                      stall_type: t,
                      stall_no: no,
                      width: w,
                      length: l,
                      area: a,
                    }));
                  }}
                />
              </Box>
            </FormControl>
            <FormControl sx={{ m: 3, width: 200 }}>
              <InputLabel id="Stall-type-label">Stall Type</InputLabel>
              <Select
                labelId="Stall-type-label"
                value={from.stall_type}
                // onChange={(e) =>
                //   setFrom((s) => ({
                //     ...s,
                //     stall_type: e.target.value as string,
                //   }))
                // }
              >
                <MenuItem value="shell">Shell</MenuItem>
                <MenuItem value="bare">Bare</MenuItem>
                <MenuItem value="bare-shell">Bare-Shell</MenuItem>
                <MenuItem value="shell-bare">Shell-Bare</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="number"
              label="Number of badges"
              value={from.number_of_bagdes}
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
              label="Number of Extra badges"
              value={from.extra_badges}
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
              value={from.open_sides}
              sx={{ m: 3 }}
            ></TextField>
            <FormControl sx={{ m: 3, width: 200 }}>
              <InputLabel id="Stall-type-label">Premium Booth</InputLabel>
              <Select>
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Button
          onClick={() => {
            UpdateStall(
              localStorage.getItem("token") || "",
              ex.stall[0].id,
              from
            )
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
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
