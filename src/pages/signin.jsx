import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { history } from "../_helpers/history";
import { authActions } from '../_store/auth.slice';

import "./signin.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxWidth: "xs",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1.5,
  textAlign: "center",
  p: 4,
};
const SignIn = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (login == true) {
      history.navigate("/dashboard");
    }
  });
  const handleOpen = () => {
    if (account === "test" && password === "test") {
      navigate("/dashboard");
      setLogin(true);
      return;
    }
    if (account === "") {
      setValue("Account is not entered");
    } else if (password === "") {
      setValue("Password is not entered");
    } else {
      setValue("Incorrect Account or Password");
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div className="signin">
      <Container maxWidth="xs" sx={{ paddingTop: "23vh" }}>
        <Box
          sx={{
            background: "linear-gradient(60deg, #ec407a, #d81b60);",
            boxShadow:
              "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(233 30 99 / 40%);",
            width: "335px",
            maxWidth: "xs",
            paddingY: "1.5em",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            marginLeft: "29px",
            marginTop: "-36px",
            borderRadius: "5px",
            position: "absolute",
          }}
        >
          DiBao Pay Control
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            height: "320px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography
            align="center"
            paddingTop="52px"
            paddingBottom="20px"
            color="action.active"
          >
            Please login first
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PersonIcon
              sx={{ color: "action.active", mr: 1, my: 0.5, ml: 3 }}
            />
            <TextField
              id="account"
              label="account"
              name="account"
              defaultValue={account}
              onChange={(event) => {
                setAccount(event.target.value);
              }}
              variant="standard"
              sx={{ width: "75%" }}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "30px" }}
          >
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5, ml: 3 }} />
            <TextField
              id="password"
              label="password"
              name="password"
              type="password"
              defaultValue={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "75%" }}
            />
          </Box>
          <Button
            variant="text"
            sx={{ marginTop: "38px", paddingX: "80px" }}
            type="submit"
            onClick={handleOpen}
          >
            Login
          </Button>
          {console.log("password" + password)}
          {console.log("account" + account)}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <HighlightOffIcon
                  sx={{ color: "#f27474", fontSize: "120px" }}
                />
                <Typography
                  id="transition-modal-title"
                  variant="h4"
                  component="h2"
                  color="action.active"
                  fontWeight="bold"
                  marginTop="15px"
                >
                  ERROR
                </Typography>
                <Typography
                  id="transition-modal-description"
                  sx={{ mt: 2 }}
                  color="action.active"
                >
                  {value}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginTop: "20px", paddingX: "30px" }}
                  onClick={handleClose}
                >
                  OK
                </Button>
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Container>
      <Container maxWidth="xs" sx={{ paddingTop: "10vh" }}>
        <Box
          sx={{
            bgcolor: "white",
            height: "78px",
            borderRadius: "10px",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PublicIcon
              sx={{ color: "action.active", mr: 1, my: 0.5, ml: 3 }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                id="input-with-sx"
                label="English"
                variant="standard"
                sx={{ width: "90%" }}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Chinese</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
