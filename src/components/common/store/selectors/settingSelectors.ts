import { PageSettings, Store } from "../interfaces/interfaces";

const getPostsSettings = (store: Store): PageSettings => store.page;

export default getPostsSettings;
