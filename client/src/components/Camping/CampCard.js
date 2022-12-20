import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteCamp } from "../../JS/actions/campActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CampCard({ el }) {
  const users = useSelector((state) => state.userReducer.currentUser);

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
          {el.place}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Camper name: {el.camperName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone number: {el.camperPhone}
        </Typography>
        
      </CardContent>
      <CardActions style={{ marginLeft: 50 }}>
        {users.role === "superAdmin" || users.role === "camper" && users._id === el.user._id ? (
          <div>
            <Button
              size="small"
              onClick={() => dispatch(deleteCamp(el._id))}
            >
              delete
            </Button>

            <Link to={`/editCamp/${el._id}`}>
              <Button size="small">edit</Button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </CardActions>
    </Card>
  );
}
