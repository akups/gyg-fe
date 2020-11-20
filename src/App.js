import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import {
  TourCard,
  TourGrid,
  SearchField,
  SearchButton,
} from "./components/styled";

import "./App.css";

// fetches initial data
const fetchData = async (setData) => {
  const result = await fetch(
    "https://creatingmyguide-server.herokuapp.com/activities"
  );

  const data = await result.json();

  setData(data);
};

// fetches the search results (for autocomplete)
const fetchSearchResults = async (setSearchResults, searchTerm) => {
  const result = await fetch(
    `https://creatingmyguide-server.herokuapp.com/activity/search/${searchTerm}`
  );
  const data = await result.json();

  setSearchResults(data);
};

// fetches the definitive results for the user and sets all activities to new ones
const fetchResultsData = async (setData, searchTerm) => {
  const result = await fetch(
    `https://creatingmyguide-server.herokuapp.com/activity/search/${searchTerm}`
  );
  const data = await result.json();

  setData({ tours: data });
};

function App() {
  // Here we are fetching data to display the activities
  const [data, setData] = useState({ tours: [] });
  // Here we store search results to show the autocomplete
  const [searchResults, setSearchResults] = useState([]);
  // here we store the search term to search when user click on search
  const [searchTerm, setSearchTerm] = useState("");

  // run searches on re-renders
  useEffect(() => {
    fetchData(setData);
  }, []);

  // run searches on re-renders (when search term changes)
  useEffect(() => {
    fetchSearchResults(setSearchResults, searchTerm);
  }, [searchTerm]);

  // store the search term in the state
  const handleChange = async (e) => {
    debounce(setSearchTerm(e.target.value), 500);
  };
  // fetch definitive results
  const handleClick = () => {
    fetchResultsData(setData, searchTerm);
  };

  return (
    <div className="App">
      <div>
        <h1>Berlin Tours</h1>
        <SearchField type="search" onChange={handleChange} />
        <SearchButton onClick={handleClick}>
          <img
            src="./images/search.png"
            alt="search-icon"
            style={{ width: " 15px", height: "15px" }}
          />
        </SearchButton>
        {searchResults.map((activity) => (
          <p>{activity.title}</p>
        ))}
      </div>
      <TourGrid data-test-target="tour-grid">
        {data.tours.map(({ id, image, ...props }) => {
          return (
            <TourCard
              key={id}
              {...props}
              img={`${process.env.PUBLIC_URL}${image}`}
            />
          );
        })}
      </TourGrid>
    </div>
  );
}

export default App;
