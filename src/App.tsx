import { Authorization } from "./Layout/Authorization/Authorization";
import { Dashboard } from "./Layout/Dashboard/Dashboard";
import type { RootState } from "@store/store";
import { useSelector } from "react-redux";

function App() {
  const userAuth = useSelector((state: RootState) => state.auth.token);

  return (
    <div className="h-100">{userAuth ? <Dashboard /> : <Authorization />}</div>
  );
}

export default App;
