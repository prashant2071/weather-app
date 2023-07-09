import axios from "axios";
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoOptions } from "../api/cityApi";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState();
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions =async (inputValue) =>{
    try {
        const response = await axios.request(geoOptions);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  }
  return (
    <>
      <AsyncPaginate
        placeholder="Search city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
