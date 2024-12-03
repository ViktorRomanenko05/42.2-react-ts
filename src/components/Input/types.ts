import {ChangeEvent} from "react";

export interface InputProps {
    name: string,
    id?: string,
    type?: 'text' | 'email' | 'password' | 'tel',
    placeholder?: string,
    label?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    value?: string
}