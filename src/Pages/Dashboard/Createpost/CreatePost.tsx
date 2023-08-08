import { FC, useState } from "react"
import './createpost.css'
import { Input } from "@components/Input/Input"
import { useForm } from "react-hook-form"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from "@components/Button/Button";

export const CreatePost: FC = () => {
    const [value, setValue] = useState('');
    const {
        register,
        formState: {errors}
    } = useForm()

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['clean']
        ],
      }
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

    return(
        <form className="post-action">
            <h2>Create Post</h2>
            <label>Post title</label>
            <Input  
                {
                    ...
                    {
                        type: 'text',
                        icon: false,
                        register,
                        required: 'field is required',
                        placeholder: 'title',
                        errors
                    }
                }
            />
            <p>Post Cover <span className="text-red-500">*</span></p>
            <label htmlFor="file-upload" className="post-cover">Attach image</label>
            <input type="file" id="file-upload" />
            <p className="text-[10px] mb-3 text-gray-500">Please, upload file with JPG, PNG, SVG, BMP,  or GIF extension. Maximum file size - 15 MB. </p>
            <label>Post description <span className="text-red-500">*</span></label>
            <Input  
                {
                    ...
                    {
                        type: 'text',
                        icon: false,
                        register,
                        required: 'field is required',
                        placeholder: 'Enter short description',
                        errors
                    }
                }
            />
            <label>Post body <span className="text-red-500">*</span></label>
            <ReactQuill 
                theme="snow" 
                value={value} 
                onChange={setValue} 
                modules={modules}
                formats={formats} 
            />
            <div className="flex justify-between items-center mt-3">
                <div className=""><Button {... {name:"Cancel", type: 'post'}} /></div>
                <div className="flex">
                    <Button {... {name:"Save & preview", type: 'post', color: "#061137"}} />
                    <Button {... {name:"Send for approval"}} />
                </div>
            </div>
        </form>
    )
}