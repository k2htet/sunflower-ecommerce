import { Stack, Avatar, Badge, Typography, Container } from "@mui/material";
import { BsCartDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const name = useSelector((state) => state.auth.username);
  const cartCount = useSelector((state) => state.cart.totalCart);
  return (
    <Container>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1,
          borderBottom: "1px solid #C9D0D2",
          background: "#fff",
        }}
        py={2}
        px={{ xs: 2, sm: 2, md: 3, lg: 6 }}
      >
        <Stack>
          <Link to="/">
            <Typography
              variant="h5"
              sx={{ letterSpacing: "0.3rem", color: "hsl(26, 100%, 55%)" }}
            >
              SUNFLOWER
            </Typography>
          </Link>
        </Stack>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          spacing={3}
        >
          <Link to="/cart">
            <Badge badgeContent={cartCount} color="primary">
              <BsCartDashFill size="24px" />
            </Badge>
          </Link>
          <Avatar>{name.slice(0, 1)}</Avatar>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
