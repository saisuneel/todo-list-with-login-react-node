import axios from "axios"

export type HttpMethod = "GET" | "POST" | "DELETE"

const requestConfig = (url?: string, method?: HttpMethod, data?: Object) => {
    return {
        baseUrl: "http://localhost:3000",
        url: url || "",
        method: method || "GET",
        timeout: 10000,
        data,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}

const postRequest = (url: string, data: Object) => {
    return request(url, "POST", data)
}

const getRequest = (url: string) => {
    return request(url)
}

const deleteRequest = (url: string) => {
    return request(url, "DELETE")
}

const request = async (url?: string, httpMethod?: HttpMethod, data?: Object) => {
    const config = requestConfig(url, httpMethod, data);

    console.log("method:", config.method, "url:", `${config.baseUrl}${url}`);
    return await axios.request(config)
}

export {
    getRequest,
    postRequest,
    deleteRequest,
}
