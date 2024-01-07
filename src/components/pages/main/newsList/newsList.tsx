import SkeletonTemplate from "../../../common/skeleton/skeleton";
import { Post, PostsData } from "../../../common/store/interfaces/interfaces";
import NewsItem from "../newsItem/newsItem";

type NewsListProps = {
  posts: PostsData
};


const NewsList= ({posts}: NewsListProps) => {

return <>
        {posts.loading && <SkeletonTemplate count={5}/>}
        {!posts.loading && <>
        {posts?.posts?.map((item: Post) => <NewsItem author={item.author} key={item.story_id} title={item.title} url={item.url}/>)}
        {posts.errors ? <p className="text-center">{posts.errors}</p> : null}
        {posts.posts.length > 0 && <p className="text-center">No results to show</p> } 
        </>}
      </>;
}

export default NewsList;
