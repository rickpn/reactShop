import axios from 'axios'

const axiosComponent = baseURL => {




    const instance = axios.create({

        baseURL: baseURL || "localhost:3000",

        timeout: 3000,

    })

    return instance;
}



export { axiosComponent }

export default axiosComponent();
