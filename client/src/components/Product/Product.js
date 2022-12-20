import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteProduct } from "../../JS/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Product({ el }) {
  const user = useSelector((state) => state.userReducer.currentUser);

  const dispatch = useDispatch();
  return (
    <Card style={{ width: 250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={el.pic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.price}Dt
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Vendor name: {el.vendorName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone number: {el.vendorPhone}
        </Typography>
      </CardContent>
      <CardActions style={{ marginLeft: 50 }}>
        {user.role === "superAdmin" ? (
          <div>
            <Button
              size="small"
              onClick={() => dispatch(deleteProduct(el._id))}
            >
              delete
            </Button>

            <Link to={`/editProduct/${el._id}`}>
              <Button size="small">edit</Button>
            </Link>
          </div>
        ) : (
          <Link to="/shopping">
          <Button style={{marginLeft:20}} size="small">Add to shop</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
