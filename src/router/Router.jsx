import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";

function RenderRouter() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      );
}
export default RenderRouter