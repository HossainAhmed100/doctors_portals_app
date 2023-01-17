import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import "react-day-picker/dist/style.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
