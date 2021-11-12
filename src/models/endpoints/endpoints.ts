import {RequestHandler} from "express";
import { User } from "../User";

//login user
export type GetUserRequestHandler = RequestHandler<GetUserRouteParams, GetUserResBody, GetUserReqBody, GetUserQueryParams>;
export type GetUserRouteParams = undefined;
export type GetUserReqBody = User;
export type GetUserResBody = {message: string};
export type GetUserQueryParams = undefined;

//authenticate user
export type GetauthenticationRequestHandler = RequestHandler<GetauthenticationRouteParams, GetauthenticationResBody, GetauthenticationReqBody, GetauthenticationQueryParams>;
export type GetauthenticationRouteParams = undefined;
export type GetauthenticationReqBody = JSON;
export type GetauthenticationResBody = {message: string};
export type GetauthenticationQueryParams = undefined;