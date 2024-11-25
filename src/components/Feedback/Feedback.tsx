import "./styles.css"
import Button from "../Button/Button";
import {useState} from "react";

function Feedback() {

    const [likesCount, setLikesCount] = useState(0);
    const [dislikesCount, setDislikesCount] = useState(0);

    const onLikeClick = (): void => {
        setLikesCount((previous: number): number => previous + 1);
    }

    const onDislikeClick = (): void => {
        setDislikesCount((previous: number): number => previous + 1);
    }

    const onResetClick = (): void => {
        setLikesCount(0);
        setDislikesCount(0);
    }


    return (
        <div className="feedback-counter-wrapper">
            <div className="feedback-wrapper">
                <div className="result-display" id="likes">{likesCount}</div>
                <Button buttonParameters={{name: "Like", type: "button", onClick: onLikeClick}}/>
                <Button buttonParameters={{name: "Dislike", type: "button", onClick: onDislikeClick}}/>
                <div className="result-display" id="dislikes">{dislikesCount}</div>
            </div>
            <Button buttonParameters={{name: "Reset", type: "button", onClick: onResetClick}}/>
        </div>
    )
}

export default Feedback;