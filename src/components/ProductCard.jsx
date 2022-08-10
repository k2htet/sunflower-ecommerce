import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 500, mx: "auto" }}>
      <Link to={`products/${product.id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product.image}
          sx={{ objectFit: "contain" }}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.primary" mt={1}>
            {product.amount} mmk
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          type="button"
          onClick={() =>
            dispatch(
              addCart({ ...product, qty: 1, total: parseInt(product.amount) })
            )
          }
        >
          <Typography color="white" variant="body1" textTransform="none">
            Cart
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
