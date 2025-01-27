"use client"; 
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName, "Last Name:", lastName, "Email:", email, "Password:", password);
  };

  return (
    <Container maxWidth="xs">
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="given-name"
          autoFocus
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color="primary" variant="contained" size="large" fullWidth type="submit">
          Register
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Already have an account?
        <Link href="/Login" variant="body2">
          Sign In
        </Link>
      </Typography>
    </Box>
  </Container>
  
  );
}
