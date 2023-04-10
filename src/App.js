import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Password } from "./components/Password";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Nomatch } from "./components/Nomatch";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="password" element={<Password />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
