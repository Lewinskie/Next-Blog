import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const styles = {
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginTop: "4rem",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    maxWidth: "350px",
    borderRadius: "0.5rem",
    boxShadow:
      " 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  title: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: 600,
    textAlign: "center",
    color: "#000",
  },
  inputContainer: {
    display: "flex",
    padding: "0.75rem",
    width: "100%",
  },
  register: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email required"),
      password: Yup.string().required("Password required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box style={styles.wrapper}>
      <form style={styles.form} onSubmit={formik.handleSubmit}>
        <Typography style={styles.title}>Login to your account</Typography>
        <div style={styles.inputContainer}>
          <TextField
            variant="outlined"
            id="email"
            type="email"
            placeholder="Email"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div style={styles.inputContainer}>
          <TextField
            id="password"
            type="password"
            placeholder="Password"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <Button variant="contained" type="submit" fullWidth>
          login
        </Button>

        <div style={styles.inputContainer}>
          <div style={styles.register}>
            <Typography sx={{ color: "gray" }}>No Account?</Typography>
            <Typography sx={{ color: "gray", marginLeft: "5px" }}>
              <Link href="/sign-up">Register</Link>
            </Typography>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default Login;
