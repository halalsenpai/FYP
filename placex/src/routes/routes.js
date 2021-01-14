import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import Dashboard from "../components/Layout/Dashboard";
import ErrPage from "../components/ErrPage";
import LoginModal from "../components/LoginModal/LoginModal";
// import ListPlace from "../components/Features/listingplace/ListPlace";
import { ListingPlaceForm } from "../components/ListingPlaceForm";
import { userData } from "../Api/userData";
export default function Routes() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/dashboard">
					<Dashboard />
				</Route>
				<Route
					path={"/dashboard(.+)"}
					render={() => (
						<>
							<Route exact path="/dashboard/:id" component={ErrPage} />
						</>
					)}
				/>
				<Route exact path="/login" component={() => <LoginModal />} />

				<Route
					exact
					path="/list-place"
					component={ListingPlaceForm}
					placex={userData}
				/>
				<Route path="*">
					<ErrPage />
				</Route>
			</Switch>
		</>
	);
}
