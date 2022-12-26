import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BookDetails({ Item, Showing, onClose }) {
  // console.log("book", Item.volumeInfo);
  return (
    <div>
      {Item === undefined ? (
        <> </>
      ) : (
        <Modal
          open={Showing}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Title: {Item.volumeInfo.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Author(s): {Item.volumeInfo.authors.join(" & ")}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {Item.volumeInfo.publisher &&
                `Publisher: ${Item.volumeInfo.publisher}`}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              language: {Item.volumeInfo.language}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Pages: {Item.volumeInfo.pageCount}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Free Download Link:
              <br />
              {Item.accessInfo.epub.downloadLink}`
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  border: "2px solid Red",
  boxShadow: 24,
  p: 8,
};
