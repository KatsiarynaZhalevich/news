import { PostsData, Store } from "../store";

const getPostsData = (store: Store): PostsData=> store.posts;

export default getPostsData;
