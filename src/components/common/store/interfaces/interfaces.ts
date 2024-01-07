export type Post = {
  author: string,
  title: string,
  url: string,
  story_id?: string,
}

export type PageSettings = {
  currentPage: number,
  searchType: '&query=' | ',author_',
  searchStr: string,
}

export type PostsData = {
  posts: Post[], 
  loading: boolean,
  errors: string,
  fetched: boolean,
  pageCount: number,
}

export type Store  = {
  page: PageSettings,
  posts: PostsData,
};
