import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { addCamping } from "../../JS/actions/campActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddCamping() {
  const user=useSelector(state=>state.userReducer.currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [place, setPlace] = React.useState("");
  const [camperName, setCamperName] = React.useState(user.fullName);
  const [camperPhone, setCamperphone] = React.useState(user.phoneNumber);
  //const [price, setPrice] = React.useState(0);
  //const [qte, setQte] = React.useState(0);
  const [image, setImage] = React.useState("");

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    
    data.append("place", place);
    data.append("camperName", camperName);
    data.append("camperPhone", camperPhone);
    //data.append("price", price);
    //data.append("qte", qte);
    data.append("file", image);
   
    dispatch(addCamping(data, navigate));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            AddCamping{" "}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="place"
              label="add place"
              name="place"
              autoFocus
              onChange={(e) => setPlace(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={
                { readOnly: true, }
              }
              value={user.fullName}
              id="camperName"
              //label="Add vendor name"
              name="camperName"
              //autoFocus
              onChange={(e) => setCamperName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              type="number"
              value={user.phoneNumber}
              fullWidth
              id="camperPhone"
              //label="Add vendor phone"
              name="camperPhone"
              autoFocus
              onChange={(e) => setCamperphone(e.target.value)}
            />
            {/*<TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="add price"
              type="number"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="qte"
              label="add quantity"
              type="number"
              id="qte"
              onChange={(e) => setQte(e.target.value)}
            />*/}
            <TextField
              margin="normal"
              required
              fullWidth
              name="file"
              label="add image"
              type="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
            />

            
            <Button
            disabled={!place || !image}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add camping{" "}
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
