import React from "react";
import { Grid } from "@material-ui/core";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";

const App = () => {
	return (
		<Grid container direction='column'>
			<NavBar />
			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid item xs={12} sm={8}>
					<LandingPage />
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</Grid>
	);
};

export default App;
