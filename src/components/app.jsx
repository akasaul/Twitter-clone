import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from "../pages/Profile";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:username" element={<Profile />} />
			</Routes>
		</Router>

	);
}

export { App };
