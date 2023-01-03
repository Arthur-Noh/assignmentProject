import axios from 'axios';

const createInstance = () => {
    const instance = axios.create({
        baseURL: 'https://api.github.com/repos/angular/angular-cli/',
    });

    instance.interceptors.request.use(
        async (config) => {
            config.headers = {
                'Content-Type' : 'application/json',
            };

            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    )

    return instance;
};

let Instance = createInstance();

const initAxiosInstance = () => {
    console.log(`[AxiosFactory] init, host: https://api.github.com/repos/angular/angular-cli/`);
    Instance = createInstance();
};

export {
    Instance,
    initAxiosInstance,
};