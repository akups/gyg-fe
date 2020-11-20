import React from "react";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

//import Card from "./components/Card";
import {
  TourCard,
  TourGrid,
  SearchField,
  SearchButton,
} from "./components/styled";

// fetches initial data
const fetchData = async (setData) => {
  const result = await fetch("http://localhost:3005/activities");

  const data = await result.json();

  setData(data);
};

// fetches the search results (for autocomplete)
const fetchSearchResults = async (setSearchResults, searchTerm) => {
  const result = await fetch(
    `http://localhost:3005/activity/search/${searchTerm}`
  );
  const data = await result.json();

  setSearchResults(data);
};

// fetches the definitive results for the user and sets all activities to new ones
const fetchResultsData = async (setData, searchTerm) => {
  const result = await fetch(
    `http://localhost:3005/activity/search/${searchTerm}`
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

  const debouncedSearch = useCallback(
    debounce(
      (searchTerm) => fetchSearchResults(setSearchResults, searchTerm),
      1000
    ),
    [] // will be created only once initially
  );

  // run searches on re-renders
  useEffect(() => {
    fetchData(setData);
  }, []);

  // run searches on re-renders (when search term changes)

  // store the search term in the state
  const handleChange = async (event) => {
    const { value: nextValue } = event.target;
    if (nextValue && nextValue.length) {
      setSearchTerm(nextValue);
      debouncedSearch(nextValue);
    }
  };
  // used https://divyanshu013.dev/blog/react-debounce-throttle-hooks/ asa reference (useCallback part)

  // fetch definitive results
  const handleClick = () => {
    if (searchTerm && searchTerm.length) {
      fetchResultsData(setData, searchTerm);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Berlin Tours @GetYourGuide</h1>
        <SearchField
          type="text"
          onChange={handleChange}
          placeholder="Best coffee in town..."
        />
        <SearchButton onClick={handleClick}>
          <img
            src="./images/search.png"
            alt="search-icon"
            style={{ width: " auto", height: "19px" }}
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
