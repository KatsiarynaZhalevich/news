import { PageSettings, Store } from "../store";

const getPostsSettings = (store: Store): PageSettings => store.page;

export default getPostsSettings;
