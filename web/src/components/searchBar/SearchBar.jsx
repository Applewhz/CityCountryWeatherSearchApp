import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchInput } from "../common/Input/Input";
import { CustomButton } from "../common/Button/Button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchWeather } from "../../store/weatherSlice.js";
import "./SearchBar.css";

const SearchBar = () => {
   const dispatch = useDispatch();
   const [searchTerm, setSearchTerm] = useState("");

   const onChangeHandler = (event) => {
      setSearchTerm(event.target.value);
   };

   const triggerSearch = () => {
      if (!searchTerm.trim()) return;

      dispatch(fetchWeather({ cityCountryName: searchTerm }));
      setSearchTerm("");
   };

   const onSearchHandler = (event) => {
      event.preventDefault();
      triggerSearch();
   };

   const onEnterHandler = (event) => {
      if (event.key !== "Enter") return;
      triggerSearch();
   };

   return (
      <div className="SearchBarContainer">
         <SearchInput
            value={searchTerm}
            onChange={onChangeHandler}
            onKeyDown={onEnterHandler}
            placeholder="Enter Country / City ..."
         />
         <CustomButton
            onClick={onSearchHandler}
            icon={faMagnifyingGlass}
            divClassName="SearchButtonContainer"
            iconClassName="SearchIcon"
         />
      </div>
   );
};

export default SearchBar;
