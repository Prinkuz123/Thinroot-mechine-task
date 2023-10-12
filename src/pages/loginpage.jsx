import "../Style.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const User =[{ UserName:"Rishi",
Password:"rishi@2"}]


const initialValues = {
  username: "",
  password: "",
};

const validate = (values) => {

  let errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if ( 
  !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
      values.password
    )
  ) {
    errors.password = "Password does not meet the criteria";
  }

  return errors;
};

const Loginpage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (
        values.username === User[0].UserName &&
        values.password === User[0].Password
        )
       {
        console.log("Sign in successful");
        navigate("/");
      } else {
        console.log("Sign in failed - password does not meet the criteria");
      navigate('/login')
      }
      console.log("Formdata", values);
    },
    validate,
  });
  console.log("Form errorr", formik.errors);

  const navigate = useNavigate();
  return (
    <div className="container" style={{ height: "30rem", width: "20rem" }}>
      <h1>Login page</h1>
      <div className="login">
        <Box
          component="form"
          sx={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div className="formControl">
            <TextField
              id="username"
              type="text"
              label="Username"
              htmlFor="username"
              variant="outlined"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              sx={{ mb: 3 }}
            />
            {formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>

          <div className="formControl">
            <TextField
              id="password"
              type="password"
              label="password"
              htmlFor="password"
              variant="outlined"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              sx={{ mb: 3 }}
            />
            {formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <Stack spacing={3} direction="row">
            <Button
              variant="contained"
              type="submit"
            >
              SignIn
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default Loginpage;
