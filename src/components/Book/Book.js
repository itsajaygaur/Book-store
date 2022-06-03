import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";



const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`https://book-store-clone.herokuapp.com/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  let badgeText
  if (props.book.available) {
    badgeText = "AVAILABLE"
  } else {
    badgeText = "SOLD OUT"
  }

  return (
    <div className="card">
      {badgeText && <div className="badge"> {badgeText} </div>}
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <div className="description">
        <p>{description}</p>
      </div>
      <h5>₹ {price}</h5>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto', fontWeight: "bold" }} variant="contained">
        Edit
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: 'auto', fontWeight: "bold" }} variant="contained" >
        Delete
      </Button>
    </div>
  );
}




export default Book;
