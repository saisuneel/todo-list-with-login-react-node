import axios from "axios"

export type HttpMethod = "GET" | "POST"

const requestConfig = (url?: string, method?: HttpMethod, data?: Object) => {
    return {
        baseUrl: "http://localhost:3000/",
        url: url || "",
        method: method || "GET",
        timeout: 10000,
        data
    }
}

const postRequest = (url: string, data: Object) => {
    return request(url, "POST", data)
}

const getRequest = (url: string) => {
    return request(url)
}

const request = async (url?: string, httpMethod?: HttpMethod, data?: Object) => {
    console.log("method:", httpMethod, "url:", url);
    const config = requestConfig(url, httpMethod, data);
    return await axios.request(config)
}

export {
    getRequest,
    postRequest,
}
