import heartIcon from "../assets/heart-solid.svg";
import heartIconRed from "../assets/heart-solid-red.svg";
import deleteIcon from "../assets/delete.svg";
import {useDispatch} from "react-redux";
import { switchLikeCard, deleteCard } from "../redux/cards/cards-state";
import {memo, useCallback} from "react";
interface Card{
    id: string,
    img: string,
    author: string,
    liked: boolean
}
export const Card = memo(function Card({ id, img, author, liked }: Card){
    const dispatch = useDispatch();
    const handleLike = useCallback(() =>{
        dispatch(switchLikeCard(id));
    }, [id,dispatch]);
    const handleDelete = useCallback(() =>{
        dispatch(deleteCard(id));
    },[id,dispatch]);

    return (<div className="card">
        <img src={img} alt="as"/>
        <div className="card_bottom">
            <div className="card_author">{author}</div>
            <div>
                <button onClick={handleLike}>
                    <img src={`${liked ? heartIconRed : heartIcon}`} alt="like"/>
                </button>
                <button onClick={handleDelete}>
                    <img src={deleteIcon} alt="delete"/>
                </button>
            </div>
        </div>
    </div>);
});

export default Card;