"use client";
import React from "react";
import { ButtonProps } from "./Button.props";

import styles from "./Button.module.scss";

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className={styles["button"]} {...props}>
            {children}
        </button>
    );
};

export default Button;
