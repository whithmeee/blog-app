import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    disabled: boolean;
}
