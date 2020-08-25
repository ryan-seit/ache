import React from "react";
import { Grid } from "@material-ui/core";
import { ContentCard } from "../components/ContentCard";

export const LandingPage = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				<ContentCard />
			</Grid>
			<Grid item xs={4}>
				<ContentCard />
			</Grid>
			<Grid item xs={4}>
				<ContentCard />
			</Grid>
		</Grid>
	);
};
