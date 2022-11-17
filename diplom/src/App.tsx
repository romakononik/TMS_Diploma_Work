import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import "../src/firebase"
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return <Provider store={store}>
    <MainRoutes />
  </Provider>
}

export default App;
