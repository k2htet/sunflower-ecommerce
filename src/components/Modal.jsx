import { useState } from "react";
import { Box, Typography, Modal, Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { confirm } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw" },
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const MyModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirm = () => {
    dispatch(confirm());
    navigate("/", { replace: true, state: { message: "Order Success,Thank" } });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Order Confirm ?
          </Typography>

          <Stack direction="row" justifyContent="space-around" mt={3}>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleConfirm}>
              <Typography variant="body2" color="white">
                Confirm
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
