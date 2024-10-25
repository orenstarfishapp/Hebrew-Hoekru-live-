// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Register from "./pages/register.jsx";
import Footer from "./components/Footer.jsx";
import Lesson from "./pages/Lesson.jsx";
import { useUserData } from './hooks/useUserData.js';

function App() {
	const { user } = useUserData();

	return (
		<Router>
			<Navbar user={user} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/lessons" element={<Lesson />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
