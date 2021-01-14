import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Routes from "./routes/routes";
import Navbar from "./components/Layout/nav/Navbar";

function App() {
	return (
		<div className="App">
			<Route path="/" exact component={Home} />
			<Route
				path={"/(.+)"}
				render={() => (
					<>
						<Navbar />

						<Routes />
					</>
				)}
			/>
		</div>
	);
}

export default App;
