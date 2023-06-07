import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (
    <Box display="flex" flexDirection="column">
      {/* The Navbar component is rendered at the top of the application */}
      <Navbar />
      {/* The AllRoutes component is responsible for rendering different routes based on the current URL */}
      <AllRoutes />
    </Box>
  );
}

export default App;
