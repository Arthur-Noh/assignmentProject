import axios from 'axios';

const createInstance = () => {
    const instance = axios.create({
        baseURL: 'https://github.com/angular/angular-cli',
    });

    instance.interceptors.request.use(
        async (config) => {
            config.headers = {
                // Authorization: `Bearer ${ACCESS_TOKEN}`,
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
    console.log(`[AxiosFactory] init, host: https://github.com/angular/angular-cli`);
    Instance = createInstance();
};

export {
    Instance,
    initAxiosInstance,
};