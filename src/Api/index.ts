import axios from "axios";
const URL = "https://api.boilerworldexpo.com/api";
export const Login = async (data: { email: string; password: string }) => {
  return axios.post(URL + "/api/admin/login", data);
};
export const getAllVisitor = async (token: string) => {
  return fetch(URL + "/visitor?query=.com&limit=50000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getAllDelegates = async (token: string) => {
  return fetch(URL + "/api/delegate?limit=50000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getAllExhibitor = async (token: string) => {
  return fetch(URL + "/exhibitor?limit=50000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const refreshToken = async (token: string) => {
  return fetch(URL + "/api/admin/refreshToken", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};

export const deleteVisitor = async (token: string, id: string) => {
  return fetch(URL + "/visitor/delete/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const deleteExhibitor = async (token: string, id: string) => {
  return fetch(URL + "/exhibitor/delete/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};

export const ConformExhibitor = async (token: string, id: string) => {
  return fetch(URL + "/exhibitor/confirm/exhibitor/" + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const disapproveExhibitor = async (token: string, id: string) => {
  return fetch(URL + "/exhibitor/disapprove/exhibitor/" + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getAllStall = async (token: String) => {
  return fetch(URL + "/api/stall/?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const AddStall = async (token: String, data: any) => {
  return axios.post(URL + "/api/stall/add", data);
};
export const getExhibitor = async (token: string, id: string) => {
  return fetch(URL + "/exhibitor/getOne/" + id, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const UpdateStall = async (token: string, id: string, data: any) => {
  return axios.put(URL + "/api/stall/update/" + id, data);
};
export const getStallByEx = async (name: string) => {
  return fetch(URL + "/api/stall/?searchFor=exhibitor&query=" + name, {
    method: "GET",
  });
};

export const create_admin = async (data: any, token: string) => {
  return axios(URL + "/api/admin/create", {
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getAllAdmin = async (token: string) => {
  return axios(URL + "/api/admin/getAll", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};

export const getOEMUserProfile = async (token: string) => {
  return axios(URL + "/api/oem/exhibitorUserProfile?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMVisa = async (token: string) => {
  return axios(URL + "/api/oem/exhibitorVisa?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMFascia = async (token: string) => {
  return axios(URL + "/api/oem/exhibitorFascia?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMPowerReq = async (token: string) => {
  return axios(URL + "/api/oem/exhibitorPowerRequirement?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMexhibitorFurniture = async (token: string) => {
  return axios(URL + "/api/oem/exhibitorFurniture?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMexhbitorBadges = async (token: string) => {
  return axios(URL + "/api/oem/exhbitorBadges?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMexhibitorHostAndHostess = async (token: string) => {
  return axios(URL + "/api/oem/exhibitorHostAndHostess?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMexhibitorCatalogue = async (token: string) => {
  return axios(URL + "/api/oem/exhbitorCatalogue?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const getOEMexportBoothContractor = async (token: string) => {
  return axios(URL + "/api/oem/exhibitorContractor?limit=500000000000000", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
};
export const createEx = async (token: string, data: any) => {
  return axios(URL + "/api/admin/createExhibitor", {
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
}
export const createVisitor = async (token: string, data: any) => {
  return axios(URL + "/api/admin/createVisitor", {
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
  });
}