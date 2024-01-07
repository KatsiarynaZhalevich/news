import { PostsData, Store } from "../interfaces/interfaces";

const getPostsData = (store: Store): PostsData=> store.posts;

export default getPostsData;
