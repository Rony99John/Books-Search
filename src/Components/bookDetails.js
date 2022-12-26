import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BookDetails({ Item, Showing, onClose }) {
  //   const [open, setOpen] = React.useState(Showing);
  //   const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // console.log("book", Item.volumeInfo);
  // if (Item !== undefined) {
  // let Author = Item.volumeInfo.authors;
  // let Title = ;
  // let Publisher = Item.volumeInfo.publisher;
  // let Language = Item.volumeInfo.language;
  // let PageCount = Item.volumeInfo.pageCount;
  // let epub = Item.accessInfo.epub.downloadLink;
  // }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={Showing}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Authors
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* {Author} */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* $$ {Publisher} */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* {Language} */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* {PageCount} */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* {epub} */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
