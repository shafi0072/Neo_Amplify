"use client"; 
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Add your password reset API call here
    console.log("Password reset request sent for email:", email);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Enter your email address below and we'll send you instructions to
          reset your password.
        </Typography>

        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              If this email is registered, you will receive a password reset
              link shortly.
            </Alert>
          )}
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
