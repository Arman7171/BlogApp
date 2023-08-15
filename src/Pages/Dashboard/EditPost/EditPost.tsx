import { FC, useEffect } from "react";
import { PostAction } from "@components/PostAction/PostAction";
import { addPost, getSelectedPost, postType } from "@features/Posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectAllPostbyFilter, selectCurrentPostfromAllPosts } from "@src/Selectors/PostSelect";

export const EditPost: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postId } = useParams();
  const posts = useSelector(selectAllPostbyFilter);
  const curentPost = useSelector(selectCurrentPostfromAllPosts);
  console.log(curentPost);
  
  useEffect(() => {
    if (posts.size) {
      console.log('mtav', postId);
      
      dispatch(getSelectedPost(postId));
    }
  }, [posts.size]);

  const createPost = (data: postType) => {
    console.log('create', data);
    const storeagePosts = localStorage.getItem("posts");

    let posts;
    if (storeagePosts) {
      posts = JSON.parse(storeagePosts);
    } else {
      posts = [];
    }
    posts = [...posts, data];
    posts = JSON.stringify(posts);
    localStorage.setItem("posts", posts);
    dispatch(addPost(data));
    navigate("/dashbord");
  }

  return (
    <>
    {
      curentPost.id ? <PostAction {...{postAction: createPost, actionType: 'edit', curentPost}} />  : null
    }
    </>
  );
};
