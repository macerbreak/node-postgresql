import {Send} from "express-serve-static-core";
import { Query } from 'express-serve-static-core';
export interface TypedRequestBody<T> extends Express.Request {
    body: T
}
export interface TypedRequestQuery<T extends Query> extends Express.Request{
    query:T
}
export interface TypedResponse<ResBody> extends Express.Response {
    json: Send<ResBody, this>;
}
