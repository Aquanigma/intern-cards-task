import { switchLikedFilter } from "../redux/cards/cards-state";
import {useDispatch} from "react-redux";

import filterIcon from "../assets/filter_icon.svg";
const FilterButton = () =>{
    const dispatch = useDispatch();
    return <div className="filter_area">
        <button
            onClick={() => dispatch(switchLikedFilter())}>
            <img src={filterIcon} alt="filter"/>
            <span className="filter_button_text">Only liked</span>
        </button>
    </div>;
}

export default FilterButton;