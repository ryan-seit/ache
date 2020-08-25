import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	typographyStyles: {
		flex: 1,
	},
}));

export const NavBar = () => {
	const classes = useStyles();
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography className={classes.typographyStyles}>ACHE Page</Typography>
				<AcUnitIcon />
			</Toolbar>
		</AppBar>
	);
};
