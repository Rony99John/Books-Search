import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function BookCard({ BookInfo }) {
  // console.log("inside the cards", BookInfo);
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTop2XX8BC8DRdRu_tQP4wcmiBEY0WTA2JQ7g&usqp=CAU";

  return (
    <>
      {BookInfo.map((book) => (
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={book.volumeInfo.imageLinks.smallThumbnail}
              alt="Books"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Author(s):
                <br /> {book.volumeInfo.authors.join(" & ")}
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
      ))}
    </>
  );
}
