import {
  Box,
  Grid,
  Stack,
  Button,
  Typography,
  Collapse,
  Alert,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  showProduct,
  incPagesCount,
  decPagesCount,
} from "../redux/productSlice";
import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

const Home = () => {
  // auth user token
  const token = useSelector((state) => state.auth.token);
  // initial pages state
  const pagesCount = useSelector((state) => state.product.pagesCount);

  const [open, setOpen] = useState(true);

  // redux dispatch
  const dispatch = useDispatch();

  const location = useLocation();

  // state from react-query
  const { data, status } = useQuery(
    ["products", pagesCount],
    () => getProducts(token, pagesCount, 6),
    { keepPreviousData: true }
  );

  // check loading
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <Box
      width="100%"
      minHeight="100vh"
      py={3}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      {/* paginate  */}
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        mt={15}
        mb={5}
      >
        <Button
          variant="contained"
          type="button"
          onClick={() => dispatch(decPagesCount())}
          disabled={pagesCount === 0}
          size="small"
        >
          <Typography color="white" variant="body1" textTransform="none">
            {"<"}
          </Typography>
        </Button>

        <Button
          variant="contained"
          type="button"
          size="small"
          onClick={() => {
            if (!data.last) {
              dispatch(incPagesCount());
            }
          }}
          disabled={data.last}
        >
          <Typography color="white" variant="body1" textTransform="none">
            {">"}
          </Typography>
        </Button>
      </Stack>

      {/* alert  */}
      {location.state?.message && (
        <Box
          sx={{
            width: "50%",
            mx: "auto",
          }}
        >
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {location.state?.message && location.state.message}
            </Alert>
          </Collapse>
        </Box>
      )}
      {/* products container  */}
      <Grid container spacing={3} component={motion.div}>
        {data?.content &&
          data.content.map((product) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={product.id}
              sx={{ cursor: "pointer" }}
              onClick={() => dispatch(showProduct(product))}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Home;
