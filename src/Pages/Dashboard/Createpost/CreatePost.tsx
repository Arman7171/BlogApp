import { FC } from "react";
import "./createpost.css";
import { PostAction } from "@components/PostAction/PostAction";
import { addPost, postType } from "@features/Posts/postsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreatePost: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createPost = (data: postType) => {
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
    <PostAction {...{postAction: createPost, actionType: 'create'}} />
  );
};
