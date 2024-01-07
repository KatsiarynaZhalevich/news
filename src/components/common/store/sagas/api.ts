import { API_LINK } from "../../constants";
import { PostsData } from "../interfaces/interfaces";

const requestPosts = (params: string, currentPage: number): PostsData | unknown => fetch(`${API_LINK}${params}&page=${currentPage-1}`)
.then((response) => response.json())
.then(res => res);

export const Api = {requestPosts};