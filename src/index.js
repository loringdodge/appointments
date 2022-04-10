import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals'

import './index.css'

import Appointments from './pages/appointments'
import Layout from './components/Layout'

const rootElement = document.getElementById("root")

/*
	Routes are nested and subviews displayed via <Outlet>
	
	The clinic schedule is accessed at http://localhost:3000/schedules.

	For individual clinic schedules, they can be accessed at http://localhost:3000/schedules/:clinicId
*/
render(
	<BrowserRouter>
		<Routes>
			<Route path="/schedules" element={<Layout />}>
				<Route path=":clinicId" element={<Appointments />} />
			</Route>
		</Routes>
	</BrowserRouter>
	,
	rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
