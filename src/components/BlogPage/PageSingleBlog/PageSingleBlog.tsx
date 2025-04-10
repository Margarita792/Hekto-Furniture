import { useParams } from "react-router-dom";
import PostSingleBlog from "../PostSingleBlog/PostSingleBlog";


function PageSingleBlog() {
    const { id } = useParams();
  return (<>
  <PostSingleBlog id={id as string}/>
  </>
  )
}
export default PageSingleBlog;