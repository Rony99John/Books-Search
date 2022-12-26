import React, { useState, useEffect } from "react";
import BookCard from "./Components/bookCard";
import "./App.css";
import axios from "axios";

function App() {
  const [Search, setSearch] = useState("");
  const [Books, setBooks] = useState([]);
  let APIURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${Search}"&filter=free-ebooks&printType=books&orderBy=newest&key=AIzaSyBiIocJL_h_H4h2VgPuFwEKou1FeNcintc&maxResults=40`;
  function NewSearch(event) {
    // if (event.key === "Enter") {}
    if (event.target.value !== "") {
      setSearch(event.target.value.replace(/ /g, "+"));
    } else {
      setBooks([]);
    }
  }
  useEffect(() => {
    axios
      .get(APIURL)
      .then((res) => {
        if (res.data.items !== undefined) {
          setBooks(res.data.items);
          console.log("Response: ", res.data.items);
        } else {
          setBooks([]);
        }
      })
      .catch((err) => console.log(err));
  }, [Search]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Author's Books Search</h1>
          <input
            className="SearchBar"
            type="text"
            placeholder="    Search for an author…"
            onChange={NewSearch}
          />
          <BookCard BookInfo={Books} />
        </header>
      </div>
    </>
  );
}

export default App;
