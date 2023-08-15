import { FC, useEffect } from "react";
import Mountains from "@assets/blogimg/mountains.jpg";
import UserImg from "@assets/users/user1.png";
import "./viewpost.css";
import { Card } from "@components/Card/Card";
import { useParams } from "react-router-dom";
import { getSelectedPost } from "@features/Posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPostbyFilter,
  selectCurrentPostfromAllPosts,
} from "@src/Selectors/PostSelect";
import {} from "react-quill";

export const ViewPost: FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const posts = useSelector(selectAllPostbyFilter);
  const curentPost = useSelector(selectCurrentPostfromAllPosts);

  useEffect(() => {
    if (posts.size) {
      dispatch(getSelectedPost(postId));
    }
  }, [posts.size]);

  return (
    <div className="view-post grid md:grid-cols-4 grid-cols-1">
      <div className="col-span-3 post-content">
        <div className="post-img">
          <img src={curentPost.cover} alt="" />
        </div>
        <div className="post-info">
          <h6>{curentPost.description}</h6>
          <h2>{curentPost.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: curentPost.postBody }}></p>
        </div>
      </div>
      <div className="pl-3 hidden md:block ">
        <div className="post-author">
          <div className="author-img">
            <img src={UserImg} alt="" />
          </div>
          <div className="pl-2">
            <h6 className="author-name">Arman Vardanyan</h6>
            <h6 className="author-profesion">Front-End developer</h6>
          </div>
        </div>
        <h6 className="content-text">More content for you</h6>
        <Card
          {...{
            date: "12-03-2023",
            img: Mountains,
            title: "Market update 5 Aug",
            publish: false,
          }}
        />
        <Card
          {...{
            date: "12-03-2023",
            img: Mountains,
            title: "Market update 5 Aug",
            publish: false,
          }}
        />
      </div>
      <div></div>
    </div>
  );
};
