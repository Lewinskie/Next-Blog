import React from "react";
import { styled } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";

const Wrapper = styled("div")({
  maxWidth: "300px",
  background: "#f1f7fe",
  overflow: "hidden",
  borderRadius: "16px",
  color: "#010101",
});

const InputContainer = styled("div")({
  overflow: "hidden",
  borderRadius: "8px",
  backgroundColor: "#fff",
  margin: "1rem 0 .5rem",
  width: "100%",
});
const Input = styled("input")({
  color: "black",
  background: "none",
  border: "0",
  outline: "0",
  height: "40px",
  width: "100%",
  borderBottom: "1px solid #eee",
  fontSize: ".9rem",
  padding: "8px 15px",
});
const P = styled("p")({
  margin: 0,
  marginBottom: "0.25rem",
  color: "red",
  fontSize: "0.5rem",
});
const Button = styled("button")({
  width: "100%",
  color: "black",
  backgroundColor: "#0066ff",
  color: "#fff",
  border: 0,
  borderRadius: "24px",
  padding: "10px 16px",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background .3s ease",
  ":hover": {
    background: "#005ce6",
  },
});

const RegForm = () => {
  //Set up using Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values, formik.errors);
  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <InputContainer>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <P>{formik.errors.firstName}</P>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <P>{formik.errors.lastName}</P>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <P>{formik.errors.email}</P>
            )}
          </InputContainer>
          <InputContainer>
            <Button type="submit">Submit</Button>
          </InputContainer>
        </div>
      </form>
    </Wrapper>
  );
};

export default RegForm;
