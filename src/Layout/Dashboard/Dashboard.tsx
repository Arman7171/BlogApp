import { Topbar } from "@components/Topbar/Topbar";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { FC, useEffect } from "react";
import "./dashboard.css";
import { Routing } from "@src/Routing";
import { useDispatch } from "react-redux";
import { getPosts } from "@features/Posts/postsSlice";

export const Dashboard: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="content">
        <Routing />
      </div>
    </div>
  );
};
