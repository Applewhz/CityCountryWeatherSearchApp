import { useDispatch } from "react-redux";
import { faTrash, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "../common/Button/Button";
import { fetchWeather, removeHistoryItem } from "../../store/weatherSlice";
import "./HistoryCard.css";

export const HistoryCard = ({ id, city, country, date, time }) => {
   const dispatch = useDispatch();

   const onSearchHandler = (event) => {
      event.preventDefault();
      dispatch(fetchWeather({ cityCountryName: `${city},${country}` }));
   };

   const onDeleteHandler = (event) => {
      event.preventDefault();
      dispatch(removeHistoryItem(id));
   };

   return (
      <div className="HistoryCard">
         <p style={{ marginRight: "10px" }}>
            {city}, {country}
         </p>

         <div className="HistoryCardRightSide">
            <p style={{ marginRight: "10px" }}>{date}</p>
            <p style={{ marginRight: "10px" }}>{time}</p>

            <CustomButton
               onClick={onSearchHandler}
               icon={faMagnifyingGlass}
               divClassName="SearchAndDeleteButtonContainer"
            />

            <CustomButton
               onClick={onDeleteHandler}
               icon={faTrash}
               divClassName="SearchAndDeleteButtonContainer"
            />
         </div>
      </div>
   );
};
