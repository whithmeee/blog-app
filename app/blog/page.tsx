"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Blog = () => {
    const article = useSelector((s: RootState) => s.article.article);

    return (
        <div>
            <h2>Статьи</h2>
            <div>
                {article.length <= 0 ? (
                    <h3>Вы еще не добавили статью</h3>
                ) : (
                    article
                )}
            </div>
        </div>
    );
};

export default Blog;
