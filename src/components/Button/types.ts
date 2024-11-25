interface Button {
    name?: string
    type?: "submit" | "reset" | "button"
    onClick?: any
}

export interface ButtonProps {
    buttonParameters: Button
}