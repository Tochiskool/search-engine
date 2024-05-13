import { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(" I need to tell my dad about some data");
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className='search-bar'>
      <form action='' onSubmit={handleFormSubmit}>
        <label htmlFor=''>Search here..</label>
        <input type='text' value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
