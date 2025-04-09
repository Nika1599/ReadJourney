import "./App.css";
import { lazy } from "react";
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage.jsx")
);
function App() {
  return (
    <>
      <div>
        <RegisterPage />
      </div>
    </>
  );
}

export default App;
