<<<<<<< HEAD
import axios from "axios";

// Use env variable if available, fallback to local backend during dev
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
=======
import axios from 'axios';

const API_BASE_URL = window.location.origin.replace(':5000', ':8080');
>>>>>>> 1fbf345837554de4ea57bb7352f4fbcee08f9ffe

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
<<<<<<< HEAD
    "Content-Type": "application/json",
  },
});

// Attach token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle unauthorized responses
=======
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach token to every request
>>>>>>> 1fbf345837554de4ea57bb7352f4fbcee08f9ffe
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
<<<<<<< HEAD
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
=======
      localStorage.removeItem('token'); 
      localStorage.removeItem('user'); 
      window.location.href = '/login';
>>>>>>> 1fbf345837554de4ea57bb7352f4fbcee08f9ffe
    }
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
export default axiosInstance;
=======
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
>>>>>>> 1fbf345837554de4ea57bb7352f4fbcee08f9ffe
