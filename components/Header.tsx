"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
const Header = () => {
    return (
        <header className={styles["header"]}>
            <ul>
                <li>
                    <Link href="/">Главная</Link>
                </li>
                <li>
                    <Link href="/blog">Блог</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
