import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  getOneCamp, updateOneCamp } from "../../JS/actions/campActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const theme = createTheme();

export default function EditCamp() {

    const {id} = useParams()

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      price: data.get("price"),
      qte: data.get("qte"),
    });
    dispatch(
        updateOneCamp(id, updateCamp, navigate )
    );
  };

  const oldCamp = useSelector(state=> state.campReducer.oneCamp)
const [updateCamp, setUpdateCamp] = React.useState(oldCamp)

  React.useEffect(() => {
dispatch(getOneCamp(id))
  }, [])

  React.useEffect(() => {
    setUpdateCamp(oldCamp)
  }, [oldCamp])
  

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
            Edit Camp{" "}
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
              label="edit Camp place"
              name="place"
              autoFocus
              value= {updateCamp.place}
              onChange={(e)=> setUpdateCamp({...updateCamp, place: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="camperName"
              label="edit name camper"
              type="text"
              id="camperName"
              value= {updateCamp.camperName}
              onChange={(e)=> setUpdateCamp({...updateCamp, camperName: e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="camperPhone"
              label="edit phone camper"
              type="number"
              id="camperPhone"
              value= {updateCamp.camperPhone}
              onChange={(e)=> setUpdateCamp({...updateCamp, camperPhone: e.target.value})}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              save{" "}
            </Button>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}
