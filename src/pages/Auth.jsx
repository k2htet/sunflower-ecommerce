import { useState } from "react";
import { Stack, TextField, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/authSlice";

const Auth = () => {
  // change login form to register form state
  const [loginForm, setLoginForm] = useState(true);

  // set auth user state

  const dispatch = useDispatch();
  // state from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // api url
  const REG_URL = "/api/auth/register";
  const LOGIN_URL = "/api/auth/login";

  // handle register form submit
  const onRegisterFormSubmit = async (data) => {
    try {
      if (data.password === data.confirmPassword) {
        const response = await axios.post(
          REG_URL,
          JSON.stringify({
            username: data.username,
            password: data.password,
          }),
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        dispatch(
          authUser({
            username: data.username,
            password: data.password,
            token: response.data.token,
          })
        );
      }
    } catch (error) {
      return;
    }
  };

  // ့handle login form submit
  const onLoginFormSubmit = async (data) => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          username: data.username,
          password: data.password,
        }),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      dispatch(
        authUser({
          username: data.username,
          password: data.password,
          token: response.data.token,
        })
      );
    } catch (error) {
      return;
    }
  };

  return loginForm ? (
    <Stack
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      sx={{ background: "#ececec" }}
    >
      <Stack
        sx={{
          width: { xs: "280px", sm: "320px", md: "400px", lg: "500px" },
          height: "auto",
          borderRadius: "10px",
          background: "#fff",
        }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Stack
          component="form"
          autoComplete="off"
          direction="column"
          py={5}
          spacing={2}
          onSubmit={handleSubmit(onLoginFormSubmit)}
        >
          <TextField
            id="userName"
            label="User Name"
            variant="standard"
            autoFocus
            name="username"
            {...register("username", { required: "User Name Required" })}
          />

          {errors?.username && (
            <Typography variant="body2" color="red">
              {errors.username.message}
            </Typography>
          )}

          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            autoComplete="off"
            name="password"
            {...register("password", { required: "Password Required" })}
          />
          {errors?.password && (
            <Typography variant="body2" color="red">
              {errors.password.message}
            </Typography>
          )}

          <Box component="div">
            <Button variant="contained" sx={{ width: "100%" }} type="submit">
              <Typography color="white" variant="body1" textTransform="none">
                Login
              </Typography>
            </Button>
          </Box>

          <Link
            to="#"
            onClick={(prev) => setLoginForm(!prev)}
            style={{ color: "blue" }}
          >
            Register
          </Link>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <Stack
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ background: "#ececec" }}
    >
      <Stack
        sx={{
          width: { xs: "280px", sm: "320px", md: "400px", lg: "500px" },
          height: "auto",
          borderRadius: "10px",
          background: "#fff",
        }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Stack
          component="form"
          autoComplete="off"
          direction="column"
          py={5}
          spacing={2}
          onSubmit={handleSubmit(onRegisterFormSubmit)}
        >
          <TextField
            id="userName"
            label="User Name"
            variant="standard"
            autoFocus
            name="username"
            {...register("username", { required: "User Name Required" })}
          />

          {errors?.username && (
            <Typography variant="body2" color="red">
              {errors.username.message}
            </Typography>
          )}

          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            autoComplete="off"
            name="password"
            {...register("password", { required: "Password Required" })}
          />
          {errors?.password && (
            <Typography variant="body2" color="red">
              {errors.password.message}
            </Typography>
          )}
          <TextField
            id="cPassword"
            label="Confirm Password"
            variant="standard"
            type="password"
            autoComplete="off"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password Required",
            })}
          />
          {errors?.confirmPassword && (
            <Typography variant="body2" color="red">
              {errors.confirmPassword.message}
            </Typography>
          )}

          <Box component="div">
            <Button variant="contained" sx={{ width: "100%" }} type="submit">
              <Typography color="white" variant="body1" textTransform="none">
                Register
              </Typography>
            </Button>
          </Box>

          <Link
            to="#"
            onClick={() => setLoginForm(true)}
            style={{ color: "blue" }}
          >
            Login
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Auth;
