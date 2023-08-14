import { FC } from "react";
import "./home.css";
import { Card } from "@components/Card/Card";
import Woman from "@assets/blogimg/woman.jpg";
import Mountains from "@assets/blogimg/mountains.jpg";
import Polynesia from "@assets/blogimg/polynesia.jpg";
import Road from "@assets/blogimg/road.jpg";
import Tree from "@assets/blogimg/tree.jpg";
import { useSelector } from "react-redux";
import { postType } from "@features/Posts/postsSlice";
import { selectAllPostbyFilter } from "@src/Selectors/PostSelect";

export const Home: FC = () => {
  const posts = useSelector(selectAllPostbyFilter)

  const blogPosts = [
    {
      id: 1,
      date: "12-03-2023",
      img: Woman,
      title:
        "Market update 5 Aug but never used drive home ract redux toolkit query typescript",
      publish: false,
    },
    {
      id: 2,
      date: "12-03-2023",
      img: Polynesia,
      title:
        "Market update 5 Aug but never used drive home ract redux toolkit query typescript",
      desc: "asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd",
      publish: false,
    },
    {
      id: 3,
      date: "12-03-2023",
      img: Road,
      title:
        "Market update 5 Aug but never used drive home ract redux toolkit query typescript",
      desc: "asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd",
      publish: false,
    },
    {
      id: 4,
      date: "12-03-2023",
      img: Tree,
      title:
        "Market update 5 Aug but never used drive home ract redux toolkit query typescript",
      desc: "asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd",
      publish: false,
    },
  ];

  return (
    <div>
      {posts.has("draft") && (
        <>
          <h3 className="pl-2">Drafts</h3>
          <div className="grid md:grid-cols-4 grid-cols-1">
          {posts.get("draft")?.map((post: postType) => {
              return (
                <div key={post.id} className="px-2">
                  <Card
                    {...{
                      date: post.date,
                      img: post.cover,
                      title: post.title,
                      publish: true,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
      {posts.has("pending") && (
        <>
          <h3 className="pl-2">Posts pending publication</h3>
          <div className="grid md:grid-cols-4 grid-cols-1">
            {posts.get("pending")?.map((post: postType) => {
              return (
                <div key={post.id} className="px-2">
                  <Card
                    {...{
                      date: post.date,
                      img: post.cover,
                      title: post.title,
                      publish: true,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}

      <div>
        <h3>Latest</h3>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <Card
            {...{
              date: "12-03-2023",
              img: Mountains,
              title:
                "Market update 5 Aug but never used drive home ract redux toolkit query typescript",
              desc: "asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd",
              publish: true,
              bigSize: true,
            }}
          />
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            {blogPosts.map((post) => (
              <div key={post.id} className="xl:px-5 lg:px-3 px-2">
                <Card {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
