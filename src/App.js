import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AppRouter from "./Component/AppRouter";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  // const element = useRoutes(routes);

  // return element;
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
