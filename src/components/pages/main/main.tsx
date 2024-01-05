
import { useEffect } from "react";
import Pagination from "../../common/pagination/pagination";
import { useSelector } from "react-redux";
import Search from "./search/search";
import { useDispatch } from "react-redux";
import { postsRequested } from "../../common/store/slices/fetchPostsSlice";
import getPostsData from "../../common/store/selectors/fetchPostsSelectors";
import getPostsSettings from "../../common/store/selectors/settingSelectors";
import NewsList from "./newsList/newsList";

const Main = () => {

  const settings = useSelector(getPostsSettings);
  const posts = useSelector(getPostsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequested());
  }, [settings]);

  return <div className="p-5 h-full">
              <Search />
              <NewsList posts={posts}/> 
              {(!posts.loading && posts.pageCount !== 0) ? <Pagination pageCount={posts.pageCount}/> : null}       
          </div>
    
}

export default Main
