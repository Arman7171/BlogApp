import { FC, useState, useEffect } from "react";
import "./postaction.css";
import { Input } from "@components/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@components/Button/Button";
import { Link } from "react-router-dom";
import idGenerator from "@src/utils/idGenerator";
import formatDate from "@src/utils/formatDate";
import { postType } from "@features/Posts/postsSlice";

export type newPost = {
  title: string;
  description: string;
  cover: string;
  postBody: string;
  status: string;
};

type actionType = {
  postAction: (data: postType) => void;
  actionType: string;
  curentPost?: postType;
};

export const PostAction: FC<actionType> = ({
  postAction,
  actionType,
  curentPost,
}) => {
  const [imgURL, setImgURL] = useState<any>("");
  const {
    handleSubmit,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useForm<newPost>();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const editorContent = watch("postBody");

  useEffect(() => {
    register("postBody", { required: true, value: curentPost?.postBody });
  }, [register]);

  const selectImg = (img: any) => {
    const image = new FileReader();
    image.addEventListener("load", () => {
      setImgURL(image.result);
    });
    image.readAsDataURL(img.target.files[0]);
  };

  const createPost: SubmitHandler<newPost> = (data) => {
    const postData = {
      ...data,
      cover: imgURL,
      id: idGenerator(),
      status: data.status,
      date: formatDate(new Date()),
    };
    postAction(postData);
  };

  const onEditorStateChange = (editorState: string) => {
    setValue("postBody", editorState);
  };

  return (
    <form className="post-action" onSubmit={handleSubmit(createPost)}>
      <h2>Create Post</h2>
      <label>
        Post title <span className="text-red-500">*</span>
      </label>
      <Input
        {...{
          type: "text",
          icon: false,
          register,
          required: "field is required",
          placeholder: "title",
          valueName: "title",
          value: curentPost?.title,
          errors,
        }}
      />
      <p>
        Post Cover <span className="text-red-500">*</span>
      </p>
      <label htmlFor="file-upload" className="post-cover">
        Attach image
      </label>
      <input
        type="file"
        id="file-upload"
        {...register("cover", {
          required: true,
          onChange: (e) => selectImg(e),
        })}
      />
      <p className="text-[10px] mb-3 text-gray-500">
        Please, upload file with JPG, PNG, SVG, BMP, or GIF extension. Maximum
        file size - 15 MB.
      </p>
      <p className="text-red-500 text-xs italic mt-2">{errors?.cover?.type}</p>
      {imgURL && <img className="selectedimg mb-3" src={imgURL} />}
      <label>Post description</label>
      <Input
        {...{
          type: "text",
          icon: false,
          register,
          placeholder: "Enter short description",
          valueName: "description",
          value: curentPost?.description,
          errors,
        }}
      />
      <label>
        Post body <span className="text-red-500">*</span>
      </label>
      {curentPost?.postBody != '' ? (
        <ReactQuill
          theme="snow"
          value={editorContent}
          onChange={onEditorStateChange}
          modules={modules}
          formats={formats}
        />
      ) : null}

      <p className="text-red-500 text-xs italic mt-2">
        {errors?.postBody?.type}
      </p>
      <div className="flex justify-between items-center mt-3">
        <Link to="/dashboard">
          <div className="">
            <Button {...{ name: "Cancel", type: "post" }} />
          </div>
        </Link>
        {actionType === "create" ? (
          <div className="flex">
            <Button
              {...{
                name: "Save & preview",
                type: "post",
                color: "#061137",
                callback: () => setValue("status", "draft"),
              }}
            />
            <Button
              {...{
                name: "Send for approval",
                callback: () => setValue("status", "pending"),
              }}
            />
          </div>
        ) : null}
      </div>
    </form>
  );
};
