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
const _data = [
  {
    name: "T29",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T30",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T31",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T32",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T33",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T34",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T35",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T36",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T37",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T38",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T39",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T40",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T49",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T50",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T51",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T60",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T61",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T62",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T73",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T74",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T75",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T76",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T87",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T88",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T89",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T90",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T91",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T92",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T93",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T24",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T23",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T22",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T21",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T28",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T25",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T27",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T26",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T19",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T20",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T18",
    type: "shell",
    width: 4,
    height: 4,
    area: 16,
    t: 2,
    c: 4,
    s: 4,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T17",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T13",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T14",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T15",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T16",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T12",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T11",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T10",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T9",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T5",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T6",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T7",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T8",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T4",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T3",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T2",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T1",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T41",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T42",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T43",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T44",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T48",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T47",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T46",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T45",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T52",
    type: "shell",
    width: 4,
    height: 3,
    area: 13,
    is_book: false,
  },
  {
    name: "T53",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T54",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T55",
    type: "shell",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
  },
  {
    name: "T59",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T58",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T57",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T56",
    type: "shell",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T63",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T64",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T65",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T66",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T67",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T72",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T71",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T70",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T69",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T68",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T77",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T78",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T79",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T80",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T81",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T86",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T85",
    type: "shell",
    width: 3,
    height: 3,
    area: 9,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T84",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T83",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "T82",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C35-I",
    width: 5,
    height: 5,
    area: 25,
    is_book: false,
    type: "bare",
  },
  {
    name: "C35-II",
    width: 5,
    height: 5,
    area: 25,
    is_book: false,
    type: "bare",
  },
  {
    name: "C35-III",
    width: 5,
    height: 5,
    area: 25,
    is_book: false,
    type: "bare",
  },
  {
    name: "C35-VIII",
    width: 5,
    height: 5,
    area: 25,
    is_book: false,
    type: "bare",
  },
  {
    name: "C35-V",
    width: 5,
    height: 5,
    area: 25,
    is_book: false,
    type: "bare",
  },
  {
    name: "C36-I",
    width: 5,
    height: 3,
    area: 15,
    is_book: false,
    type: "shell",
  },
  {
    name: "C36-II",
    width: 5,
    height: 3,
    area: 15,
    is_book: false,
    type: "shell",
  },
  {
    name: "C36-III",
    width: 3,
    height: 3,
    area: 9,
    is_book: false,
    type: "shell",
  },
  {
    name: "C36-IV",
    width: 3,
    height: 3,
    area: 9,
    is_book: false,
    type: "shell",
  },
  {
    name: "C4",
    type: "bare",
    width: 11,
    height: 7,
    area: 77,
    is_book: false,
  },
  {
    name: "C1",
    type: "bare",
    width: 11,
    height: 8,
    area: 88,
    is_book: false,
  },
  {
    name: "C3",
    type: "bare",
    width: 12,
    height: 7,
    area: 84,
    is_book: false,
  },
  {
    name: "C2",
    type: "bare",
    width: 12,
    height: 8,
    area: 96,
    is_book: false,
  },
  {
    name: "C37",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C38",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C39",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C40",
    width: 9,
    height: 3,
    area: 27,
    is_book: false,
    type: "bare",
  },
  {
    name: "C41",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C42",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C43",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C44",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C45",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C46",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "bare",
  },
  {
    name: "C47",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C48",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C49",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C50",
    width: 9,
    height: 3,
    area: 27,
    is_book: false,
    type: "bare",
  },
  {
    name: "C51",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C52",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C53",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C54",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
    type: "bare",
  },
  {
    name: "C55",
    width: 5,
    height: 5,
    area: 25,
    is_book: false,
    type: "bare",
  },
  {
    name: "C56",
    width: 5,
    height: 3,
    area: 15,
    t: 2,
    c: 4,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shall",
  },
  {
    name: "C57",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shall",
  },
  {
    name: "C58",
    width: 5,
    height: 4,
    area: 20,
    t: 2,
    c: 4,
    s: 4,
    ps: 2,
    d: 2,
    is_book: false,
    type: "shall",
  },
  {
    name: "C59",
    width: 4,
    height: 4,
    area: 16,
    t: 2,
    c: 4,
    s: 4,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shall",
  },
  {
    name: "C60",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C61",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C62",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C63",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C64",
    width: 7,
    height: 6,
    area: 42,
    is_book: false,
    type: "bare",
  },
  {
    name: "C65",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C66",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C67",
    width: 7,
    height: 6,
    area: 42,
    is_book: false,
    type: "bare",
  },
  {
    name: "C22",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
    type: "shell",
  },
  {
    name: "C21",
    width: 4,
    height: 3,
    type: "shell",

    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C20",
    width: 4,
    type: "shell",

    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C19",
    type: "bare",
    width: 9,
    height: 3,
    area: 27,
    is_book: false,
  },
  {
    name: "C18",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C17",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C16",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C15",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C14",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C13",
    type: "shell",
    width: 9,
    height: 3,
    area: 27,
    is_book: false,
  },
  {
    name: "C12",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C11",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C10",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C9",
    type: "shell",
    width: 4,
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C8",
    width: 9,
    height: 3,
    area: 27,
    is_book: false,
    type: "bare",
  },
  {
    name: "C7",
    width: 4,
    height: 3,
    area: 12,
    type: "shell",
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C6",
    width: 4,
    type: "shell",
    height: 3,
    area: 12,
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C5",
    width: 4,
    height: 3,
    area: 12,
    type: "shell",
    t: 1,
    c: 2,
    s: 3,
    ps: 1,
    d: 1,
    is_book: false,
  },
  {
    name: "C23",
    width: 6,
    height: 6,
    area: 36,
    type: "bare",

    is_book: false,
  },
  {
    name: "C24",
    width: 7,
    height: 6,
    area: 42,
    is_book: false,
    type: "bare",
  },
  {
    name: "C25",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C26",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C27",
    width: 6,
    height: 4,
    area: 24,
    is_book: false,
    type: "bare",
  },
  {
    name: "C28",
    width: 6,
    height: 5,
    area: 30,
    is_book: false,
    type: "bare",
  },
  {
    name: "C29",
    width: 6,
    height: 5,
    area: 30,
    is_book: false,
    type: "bare",
  },
  {
    name: "C30",
    width: 6,
    height: 4,
    area: 24,
    is_book: false,
    type: "bare",
  },
  {
    name: "C31",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C32",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
  {
    name: "C33",
    width: 7,
    height: 6,
    area: 42,
    is_book: false,
    type: "bare",
  },
  {
    name: "C34",
    width: 6,
    height: 6,
    area: 36,
    is_book: false,
    type: "bare",
  },
];
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
              label="Number of Bags"
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
              label="Number of Extra Bags"
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
                router.push("/exhibitors");
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
