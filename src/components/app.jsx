import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from "../pages/Profile";
import { setUser } from '../store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user) {
				dispatch(setUser(user));
			}
		})
	}, [])
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</Router>

	);
}

export { App };
