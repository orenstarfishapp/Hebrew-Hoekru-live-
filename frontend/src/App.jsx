import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Register from "./pages/register.jsx";
import Footer from "./components/Footer.jsx";
import Lesson from "./pages/Lesson.jsx";
import axios from "axios";
import { useUser } from "./context/user.js";
import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true); // New loading state
  const { setUser } = useUser();

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    let res;
    if (token) {
      try {
        res = await axios.get("/api/auth", {
          headers: { token },
        });

        setUser(res.data.user);
      } catch (e) {
        alert(e.response?.data ?? "Something went wrong");
      }
    }
    return { user: res?.data?.user };
  };

  useEffect(() => {
    const getData = async () => {
      await getUserData();
      setLoading(false);
    };

    getData();
  }, [setUser]);

  return (
    loading ? ( 
		<div className="flex items-center justify-center h-screen ">
			 <Loader  size={50} type="hash"/>
		</div>
     
    ) : (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lessons" element={<Lesson />} />
        </Routes>
        <Footer />
      </Router>
    )
  );
}

export default App;
