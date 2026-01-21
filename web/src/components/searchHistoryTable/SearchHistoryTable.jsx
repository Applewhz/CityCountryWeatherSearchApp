import { useSelector } from "react-redux";
import { selectSearchHistory } from "../../store/weatherSlice";
import { HistoryCard } from "../historyCard/HistoryCard";
import "./SearchHistoryTable.css";

const SearchHistoryTable = () => {
   const searchHistory = useSelector(selectSearchHistory);

   if (!searchHistory.length) {
      return (
         <div className="SearchHistoryOverview">
            <p className="SearchHistoryHeader">Search History</p>
            <h2>Your Search History is Empty</h2>
         </div>
      );
   }

   return (
      <div className="SearchHistoryOverview">
         <p className="SearchHistoryHeader">Search History</p>
         {searchHistory.map((item) => (
            <HistoryCard
               key={item.id}
               id={item.id}
               city={item.city}
               country={item.country}
               date={item.date}
               time={item.time}
            />
         ))}
      </div>
   );
};

export default SearchHistoryTable;
