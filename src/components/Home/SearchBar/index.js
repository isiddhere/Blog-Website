import "./styles.css";
import { useState } from "react";

const SearchBar = (props) => {
  const onInputHandler = (event) => {
    const userInput = event.target.value;
    props.onSubmit(userInput);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="searchBar-wrap ">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={onInputHandler}
          placeholder="Search by category"
        />
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
