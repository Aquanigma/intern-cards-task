import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CardItem{
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string,
    liked?: boolean,
}
interface CardsState{
    value: CardItem[],
    onlyLiked:boolean,
    loaded:boolean
}

const initialState: CardsState = { value: [], onlyLiked:false, loaded:false };

const cardsStateSlice = createSlice({
    name: "cardsState",
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<CardItem[]>) => {
            state.value = action.payload;
            state.loaded = true
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(
                (item) => Number(item.id) != Number(action.payload)
            );
        },
        switchLikeCard: (state, action: PayloadAction<string>) => {
            state.value = state.value.map((item) => {
                    if (Number(item.id) == Number(action.payload)){
                        return {...item, liked: !Boolean(item.liked)};
                    }
                    return item;
                }
            );
        },
        switchLikedFilter: (state) => {
            state.onlyLiked = !state.onlyLiked;
        },
    }
});

export const { setCards,
    deleteCard,
    switchLikeCard,
    switchLikedFilter } = cardsStateSlice.actions;
export default cardsStateSlice.reducer;