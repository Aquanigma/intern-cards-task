import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from "./card";
import { useEffect } from "react";
import { setCards } from "../redux/cards/cards-state";
import CardSkeleton from "./card-skeleton";

function CardsArea(){
    const store = useSelector((state: RootState) => state.cardsState);
    const cardsToRender = store.onlyLiked ?
        store.value.filter((i) => i.liked) : store.value;

    const dispatch = useDispatch();
    useEffect(() => {
        fetch("https://picsum.photos/v2/list").then((result) => result.json().then((jsonResult) =>{
            dispatch(setCards(jsonResult));
        })).catch((e) => {
            console.error(e);
            alert('Unable to load data, please reload page.');
            document.location.reload();
        });
    }, []);
    if (!store.loaded) return <div className="cards_area">
        {Array(6).fill(1).map((_,index) => <CardSkeleton key={index} />)}
    </div>;
    return <div className="cards_area">
        {cardsToRender.map((i) => <Card
            key={'card'+i.id}
            id={i.id}
            img={i.download_url}
            author={i.author}
            liked={Boolean(i.liked)} />
        )}
    </div>;
}
export default CardsArea