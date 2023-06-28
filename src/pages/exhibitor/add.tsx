import { Layout } from "@/Layouts/Admin.layout";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Stack,
  Typography,
  SvgIcon,
  Container,
  CircularProgress,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";
import { MultiSelect } from "react-mui-multi-select";
import { createEx } from "@/Api";
import { useRouter } from "next/router";
var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",

  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const Page = () => {
  const [fdata, setFdata] = React.useState<{
    company_website: string;
    company_repName: string;
    company_name: string;
    blood_group: string;
    mobile_no: string;
    email: string;
    designation: string;
    city: string;
    state: string;
    country: string;
    password: string;
    cpassword: string;
    pro_category: any[];
    exhibitor: string;
    exhibitor_whatsapp_no: string;
    exhibitor_whatsapp_no_check: string;
    category_other_field: string;
  }>({
    company_website: "",
    company_repName: "",
    company_name: "",
    blood_group: "",
    mobile_no: "",
    email: "",
    designation: "",
    city: "",
    state: "",
    country: "India",
    password: "",
    cpassword: "",
    pro_category: [],
    exhibitor: "exhibitor",
    exhibitor_whatsapp_no: "",
    exhibitor_whatsapp_no_check: "",
    category_other_field: "",
  });
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  return (
    <>
      <Box sx={{ py: 4 }}>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4"> Add Exhibitor</Typography>
                <Stack alignItems="center" direction="row" spacing={1}></Stack>
              </Stack>
              <div>
                <Button
                  onClick={() => {
                    router.push("/exhibitor");
                  }}
                  variant="contained"
                >
                  Back
                </Button>
              </div>
            </Stack>
          </Stack>
          <Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  value={fdata.email}
                  fullWidth
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, email: v.target.value }))
                  }
                  label="Email"
                  name="email"
                  type="email"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, company_repName: v.target.value }))
                  }
                  value={fdata.company_repName}
                  fullWidth
                  label="Name"
                  name="Name"
                  type="name"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, company_name: v.target.value }))
                  }
                  value={fdata.company_name}
                  fullWidth
                  label="Company"
                  name="company"
                  type="text"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, company_website: v.target.value }))
                  }
                  value={fdata.company_website}
                  fullWidth
                  label="Website"
                  name="website"
                  type="text"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, city: v.target.value }))
                  }
                  value={fdata.city}
                  fullWidth
                  label="City"
                  name="City"
                  type="text"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, state: v.target.value }))
                  }
                  value={fdata.state}
                  fullWidth
                  label="State"
                  name="State"
                  type="text"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <MuiPhoneNumber
                  defaultCountry={"in"}
                  onChange={(v: any) => {
                    console.log(v);

                    setFdata((s) => ({ ...s, mobile_no: v }));
                  }}
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <Select
                  label="country"
                  value={fdata.country}
                  onChange={(e) =>
                    setFdata((s) => ({ ...s, country: e.target.value }))
                  }
                >
                  {country_list.map((v) => (
                    <MenuItem value={v}>{v}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  value={fdata.designation}
                  fullWidth
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, designation: v.target.value }))
                  }
                  label="Designation"
                  name="Designation"
                  type="text"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <MultiSelect
                  getOptionKey={(v: any) => v}
                  getOptionLabel={(v: any) => v}
                  value={fdata.pro_category}
                  options={[
                    "manufacturer",
                    "Authorised Dealer",
                    "Distributor",
                    "Service Provider",
                    "other",
                  ]}
                  label="Category"
                  onChange={(_) => setFdata((s) => ({ ...s, pro_category: _ }))}
                />
              </FormControl>

              {fdata.pro_category.includes("other") && (
                <FormControl sx={{ m: 3, width: 200 }}>
                  <TextField
                    value={fdata.category_other_field}
                    fullWidth
                    onChange={(v) =>
                      setFdata((s) => ({
                        ...s,
                        category_other_field: v.target.value,
                      }))
                    }
                    label="Other category"
                    name="other category"
                    type="text"
                  />
                </FormControl>
              )}
              <FormControl sx={{ m: 3, width: 400 }}>
                <InputLabel>Is this your WhatsApp Number? *</InputLabel>
                <Select
                  value={fdata.exhibitor_whatsapp_no_check}
                  onChange={(v) => {
                    setFdata((s) => ({
                      ...s,
                      exhibitor_whatsapp_no_check: v.target.value,
                      exhibitor_whatsapp_no:
                        v.target.value == "Yes" ? s.mobile_no : "",
                    }));
                    console.log(v.target.value, v.target.value == "Yes", fdata);
                  }}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <MuiPhoneNumber
                  value={fdata.exhibitor_whatsapp_no}
                  defaultCountry={"in"}
                  onChange={(v: any) => {
                    setFdata((s) => ({ ...s, exhibitor_whatsapp_no_check: v }));
                  }}
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  value={fdata.password}
                  fullWidth
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, password: v.target.value }))
                  }
                  label="Password"
                  type="password"
                />
              </FormControl>
              <FormControl sx={{ m: 3, width: 200 }}>
                <TextField
                  value={fdata.cpassword}
                  onChange={(v) =>
                    setFdata((s) => ({ ...s, cpassword: v.target.value }))
                  }
                  fullWidth
                  label="Confirm Password"
                  type="password"
                />
              </FormControl>
              <Button
                onClick={() => {
                  setLoading(true);
                  createEx(localStorage.getItem("token") || "", {
                    ...fdata,
                    pro_category: fdata.pro_category.toString(),
                    blood_group: "A+",
                    category_other_field:
                      fdata.category_other_field === ""
                        ? undefined
                        : fdata.category_other_field,
                  })
                    .then(({ data }) => {
                      if (!data.status) {
                        setMessage(data.message);
                        setOpen(true);
                      } else {
                        setMessage("Exhibitor Created successfully");
                        setOpen(true);
                        router.push("/exhibitor");
                      }
                    })
                    .finally(() => setLoading(false));
                }}
              >
                {loading ? <CircularProgress></CircularProgress> : "Submit"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Snackbar
        onClick={() => setOpen((s) => !s)}
        open={open}
        autoHideDuration={500}
        message={message}
      />
    </>
  );
};

Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
