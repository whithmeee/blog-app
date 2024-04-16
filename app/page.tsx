"use client";
import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./page.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { clearArticle, setArticle } from "./redux/articleSlice";
const СodeBlock = Quill.import("formats/code-block");

class CustomCodeBlock extends СodeBlock {
    static create(value: string) {
        const node = super.create(value);
        node.innerHTML = `<code>${value}</code>`;
        return node;
    }
}

Quill.register(CustomCodeBlock, true);

export default function Home() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const formats = ["header", "list", "bullet", "link", "label", "code-block"];

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, false] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "label", "code-block"],
            ],
        },
    };

    const handleChange = (value: string) => {
        setValue(value);
    };

    const handleSave = () => {
        //тут будет dispatch от redux
        dispatch(setArticle(value));
    };

    return (
        <>
            <h1>Добавить статью</h1>
            <ReactQuill
                value={value}
                theme="snow"
                formats={formats}
                modules={modules}
                onChange={handleChange}
            ></ReactQuill>
            <button onClick={handleSave} className={styles["button"]}>
                Добавить
            </button>
        </>
    );
}
