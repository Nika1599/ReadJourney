import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage.jsx")
);

const LoginPage = lazy(() =>
  import("../../pages/RegisterPage/LogInPage/LoginPage.jsx")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <RegisterPage />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
