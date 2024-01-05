import { Post } from "../../../common/store/store";

const NewsItem = ({author, title, url}: Post) => {
      
  return  <div className="border-2 border-gray-300 rounded-md drop-shadow-lg mb-6 p-2 hover:bg-gray-100">
            <a href={url} target="_blank" rel="noreferrer" className="font-semibold text-lg  hover:cursor-pointer">{title}</a>
            <p>Author: <span className="">{author}</span></p>
          </div>
}

export default NewsItem;