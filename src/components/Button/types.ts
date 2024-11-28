type ButtonType = "button" | 'submit' | "reset";

export interface ButtonProps {
    name: string;
    type?: ButtonType;
    disabled?: boolean;
    onClick?: () => void;
}