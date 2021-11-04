import axios, { AxiosResponse } from "axios";
import { IPost, IUser, IComments } from "../interfaces";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/",
});

const responseBody = (response: AxiosResponse) => response.data;

export const HTTP = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const DATA = {
  getUsers: (): Promise<IUser[]> => HTTP.get("users"),
  getPosts: (url: string): Promise<IPost[]> => {
    return HTTP.get(url);
  },
  getComments: (id: number): Promise<IComments[]> =>
    HTTP.get(`posts/${id}/comments`),
};
