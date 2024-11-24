import "./styles.css"
import Button from "../Button/Button";
import {useState} from "react";

function Feedback() {

    const [likesCount, setLikesCount] = useState(0);
    const [dislikesCount, setDislikesCount] = useState(0);

    const onLikeClick = () => {
        setLikesCount((previous) => previous + 1);
    }

    const onDislikeClick = () => {
        setDislikesCount((previous) => previous + 1);
    }

    const onResetClick = () => {
        setLikesCount(0);
        setDislikesCount(0);
    }

    return (
        <div className="feedback-counter-wrapper">
            <div className="feedback-wrapper">
                <div className="result-display" id="likes">{likesCount}</div>
                <Button name="Like" onClick={onLikeClick} className="count-button" />
                <Button name="Dislike" onClick={onDislikeClick} />
                <div className="result-display" id="dislikes">{dislikesCount}</div>
            </div>
            <Button name="Reset" onClick={onResetClick} />
        </div>
    )
}

export default Feedback;