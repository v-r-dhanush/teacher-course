import axios from "axios";

// Create a custom Axios instance with base URL
const axiosHTTP = axios.create({
  baseURL: "http://localhost:8888",  // Ensure this matches your backend URL
});

// Request interceptor to add the Authorization token if available
axiosHTTP.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle response data
axiosHTTP.interceptors.response.use(
  (response) => {
    return response.data; // Return only the response data
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Global GET method
export const GET = (url, headers = {}) => {
  return axiosHTTP.get(url, { headers });
};

// Global POST method
export const POST = (url, payload, headers = {}) => {
  return axiosHTTP.post(url, payload, { headers });
};

// Global PUT method
export const PUT = (url, payload, headers = {}) => {
  return axiosHTTP.put(url, payload, { headers });
};

// Global DELETE method
export const DELETE = (url, headers = {}) => {
  return axiosHTTP.delete(url, { headers });
};
