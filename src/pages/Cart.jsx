import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeCartItem } from "../redux/cartSlice";
import { useState } from "react";
import MyModal from "../components/Modal";
import { motion } from "framer-motion";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: "relative",
        borderBottom: "1px solid #C9D0D2",
      }}
    >
      <Box
        width={{ xs: "80px", sm: "100px", md: "150px", lg: "170px" }}
        height={{ xs: "80px", sm: "100px", md: "150px", lg: "170px" }}
        my={3}
      >
        <img
          src={item.image}
          alt={item.title}
          width="100%"
          height="100%"
          style={{
            borderRadius: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="subtitle2">{item.amount} mmk</Typography>
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="flex-start">
        <IconButton
          variant="contained"
          color="warning"
          size="small"
          onClick={() => dispatch(decrementQty(item.id))}
          disabled={item.qty === 1}
        >
          <Remove fontSize="14px" />
        </IconButton>
        <Typography variant="body2" component="span">
          {item.qty}
        </Typography>
        <IconButton
          variant="contained"
          color="primary"
          size="small"
          onClick={() => dispatch(incrementQty(item.id))}
          disabled={item.qty === 10}
        >
          <AddIcon fontSize="14px" />
        </IconButton>
      </Stack>

      <IconButton
        color="error"
        size="small"
        sx={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}
        onClick={() => dispatch(removeCartItem(item.id))}
      >
        <ClearIcon fontSize="16px" />
      </IconButton>
    </Stack>
  );
};

const Cart = () => {
  //   const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);

  // find total amount
  let total = cartItem.map((item) => item.total);
  total = total.reduce((a, b) => a + b, 0);

  // modal handler
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      sx={{ minHeight: "100vh" }}
      justifyContent="center"
      alignItems="center"
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Typography variant="h4" color="#566572">
          Your Cart
        </Typography>
        <Box>
          <Box backgroundColor="#fff" borderRadius="5px" p="15px" my={3}>
            {cartItem.length > 0 ? (
              <Box>
                {cartItem.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={3}
                  my={2}
                >
                  <Typography variant="subtitle1">Total:</Typography>
                  <Typography variant="subtitle2">{total} mmk</Typography>
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleOpen}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "white", textTransform: "capitalize" }}
                      >
                        Check Out
                      </Typography>
                    </Button>
                  </Stack>
                </Stack>

                {/* check out modal */}
                <MyModal
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />
              </Box>
            ) : (
              <Typography variant="h5" textAlign="center" my={10} color="error">
                Empty Cart
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Stack>
  );
};

export default Cart;
