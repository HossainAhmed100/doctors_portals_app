import { RouterProvider } from "react-router-dom";
import "react-day-picker/dist/style.css";
import { router } from "./Routes/Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
