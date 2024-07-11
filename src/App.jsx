import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Typography, Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Finance Tracker
      </Typography>
      <Button variant="contained" color="primary">
        Button
      </Button>
    </Container>
  );
}

export default App;
