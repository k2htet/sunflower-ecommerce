import { Stack } from "@mui/material";
import { MutatingDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <Stack
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <MutatingDots
        height="100"
        width="100"
        color="hsl(26, 100%, 55%)"
        radius="12.5"
        visible={true}
      />
    </Stack>
  );
};

export default Loader;
