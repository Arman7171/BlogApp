import { FC } from "react";
import Menu from "@assets/icons/menu.svg";
import Topline from "@assets/icons/topline.png";
import "./topbar.css";
import { Button } from "@components/Button/Button";
import { Link } from "react-router-dom";
import getPathName from "@utils/pathNameMaker";
import { selectCurrentPostfromAllPosts } from "@src/Selectors/PostSelect";
import { useSelector } from "react-redux";

export const Topbar: FC = () => {
  const postId = useSelector(selectCurrentPostfromAllPosts).id;

  const path = getPathName();

  return (
    <div className="topbar">
      <div className="md:flex hidden">
        {!path ? (
          <>
            <span className="pr-3">
              <Button name="Blog posts" />
            </span>
            <Button name="Newslatters" color="#2e5827" />
          </>
        ) : (
          <>
            <Link to={`${path === "viewpost" ? "dashboard" : `dashboard/viewpost/${postId}`}`}>
              <div className="return-text">
                {"< Return to the previous page"}
              </div>
            </Link>
          </>
        )}
      </div>
      <div className="flex">
        {!path ? (
          <Link to={"dashboard/createpost"}>
            <Button name="Create post" />
          </Link>
        ) : path === "viewpost" ? (
          <>
            <Link to={`dashboard/editpost/${postId}`} className="mr-2">
              <Button
                {...{ name: "Edit post", type: "post", color: "#061137" }}
              />
            </Link>
            <Button name="Publish" color="#2e5827" />
          </>
        ) : null}
        <span className="pr-4 pl-10">
          <img src={Topline} alt="" />
        </span>
        <Button name="GO" icon={Menu} />
      </div>
    </div>
  );
};
