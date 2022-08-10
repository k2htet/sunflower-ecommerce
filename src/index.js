import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new QueryClient();
root.render(
  <React.StrictMode>
    {/* Mui Theme Provider  */}
    <ThemeProvider theme={theme}>
      {/* redux toolkit provider  */}
      <Provider store={store}>
        {/* React Router  */}
        <Router>
          {/* React Query Provider */}
          <QueryClientProvider client={client}>
            <App />
          </QueryClientProvider>
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
