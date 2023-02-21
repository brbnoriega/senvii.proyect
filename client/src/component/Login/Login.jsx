import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import s from "../Login/login.module.css";

const Login = () => {
  return (
    <div>
      <div id={s.textStyle}>
        <img
          src="../src/component/Login/icon_senvii.png"
          alt="senvii"
          id={s.img}
        />
        <h1>senvii</h1>
        <span>Tu consultor vial inteligente</span>
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div id={s.textFieldStyle}>
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            minlength="20"
          />
          <br />
          <TextField
            id="outlined-textarea"
            label="Contraseña"
            placeholder="Password"
            type= "Password"
          />
        </div>
      </Box>
      <div className={s.spanStyle}>
        <link rel="stylesheet" href="" />
        <span>¿Olvidaste tu contraseña?  <Link to="">Click aquí</Link></span> <br />
        <span>
          ¿No tenes cuenta? <Link to="/register">Regístrate aquí</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
