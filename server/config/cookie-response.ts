import {hoursAfterNow} from "../../shared/time";
import {Response} from "express";
import {constants} from "http2";

const cookieConfig = () => {
    return {
        expires: hoursAfterNow(24)
    }
}

const cookieResponse = (res: Response, cookieKey: string, cookieValue: string) => {
    res.cookie(cookieKey, cookieValue, cookieConfig())
        .status(constants.HTTP_STATUS_OK)
        .end()
}

export {
    cookieResponse
}