import React, { useState, useEffect } from "react";
import BookDetails from "./bookDetails";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function BookCard({ BookInfo }) {
  // console.log("inside the cards", BookInfo);
  const [Show, setShow] = useState(false);
  const [Item, setItem] = useState();
  function tic(book) {
    setItem(book);
  }
  // useEffect(() => {
  //   setShow(true);
  // }, [Item]);

  let ImageURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTop2XX8BC8DRdRu_tQP4wcmiBEY0WTA2JQ7g&usqp=CAU";

  return (
    <div className="Cards">
      {BookInfo.length === 0 ? (
        <h2>No Results</h2>
      ) : (
        BookInfo.map((book, index) => (
          <div
            onClick={() => {
              setItem(book);
              setShow(true);
            }}
            className="singleCards"
            key={index}
          >
            <Card sx={{ maxWidth: 200 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={book.volumeInfo.imageLinks.smallThumbnail || ImageURL}
                  alt="Books"
                />
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    Author(s):
                    <br />
                    {book.volumeInfo.authors !== undefined
                      ? book.volumeInfo.authors.join(" & ")
                      : book.volumeInfo.authors}
                    {/* {book.volumeInfo.authors.join(" & ")} */}
                  </Typography>
                  <br />
                  <Typography variant="body4" color="text.secondary">
                    Published {book.volumeInfo.publishedDate}
                    {book.volumeInfo.publisher &&
                      ` By: ${book.volumeInfo.publisher}`}
                  </Typography>
                  <br />
                  <Typography variant="body4" color="text.secondary">
                    {(book.volumeInfo.averageRating &&
                      `${book.volumeInfo.averageRating}⭐ ${book.volumeInfo.ratingsCount}👥`) ||
                      "Not Rated"}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))
      )}
      <BookDetails
        Item={Item}
        Showing={Show}
        onClose={() => setShow(false)}
      ></BookDetails>
    </div>
  );
}
