import axios from 'axios';
import { logout } from '../helper';

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const axiosPrivate = axios.create({
    baseURL: VITE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosPrivate.interceptors.request.use(
    (config) => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));

            if (user) {
                config.headers["Authorization"] = "Bearer " + user.token;
            }
        } catch (err) {
            console.error(err);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosPrivate.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async (error) => {
        const status = error.response ? error.response.status : null;

        if (status === 401) {
            logout()
        }

        return Promise.reject(error);
    }
);

export { axiosPrivate };