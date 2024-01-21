import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routes/RouterMain"
import "./styles/index.scss"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <RouterMain />
      <ToastContainer theme="dark" />
    </>
  );
};

export default App;
