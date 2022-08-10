import { Box, Button, Typography, Stack, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const product = useSelector((state) => state.product.item);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    product === null && navigate("/", { replace: true });
  }, [navigate, product]);

  return (
    product && (
      <Grid
        container
        minHeight="100vh"
        alignItems="center"
        spacing={3}
        my={{ xs: "5rem", sm: "5rem", md: 0, lg: 0 }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0 }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            mx="auto"
            sx={{
              width: { xs: "250px", sm: "280px", md: "320px", lg: "350px" },
              height: { xs: "250px", sm: "280px", md: "320px", lg: "350px" },
            }}
          >
            <img src={product.image} alt="" width="100%" height="100%" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box mx="auto">
            <Typography variant="h5" color="hsl(26, 100%, 55%)">
              Sunflower Ecommerce
            </Typography>
            <Typography variant="h4" mt={2}>
              {product.name}
            </Typography>
            <Typography variant="body1" my={3}>
              {product.description}
            </Typography>
            <Typography variant="h4" mb={3}>
              {product.amount} mmk
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            alignItems="center"
            spacing={3}
          >
            <Box
              component="div"
              width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%" }}
            >
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                type="button"
                onClick={() =>
                  dispatch(
                    addCart({
                      ...product,
                      qty: 1,
                      total: parseInt(product.amount),
                    })
                  )
                }
              >
                <Typography color="white" variant="body1" textTransform="none">
                  Add to Cart
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    )
  );
};

export default ProductDetail;
