"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const Blog = () => {
    const articles = useSelector((s: RootState) => s.article.article);

    return (
        <div>
            <h2>Статьи</h2>
            <div>
                {articles.length > 0 ? (
                    articles.map((article, index) => {
                        return <p key={index}>{article}</p>;
                    })
                ) : (
                    <h2>Вы не добавили статью</h2>
                )}
            </div>
        </div>
    );
};

export default Blog;
