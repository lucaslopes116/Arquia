import React from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Autorenew from '@material-ui/icons/Autorenew'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = (theme) => ({
	headTittle: {
		fontFamily: 'Roboto',
		fontWeight: 'Bold',
		fontSize: '18px',
		color: 'white'
	},

	headContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: '46px',
		backgroundColor: '#9575cd'
	},

	icons: {
		color: 'white',
		marginBottom: '10px'
	}
})

class Header extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<React.Fragment>
				<div className={classes.headContainer}>
					<BottomNavigationAction
						className={classes.icons}
						icon={<KeyboardArrowLeft />}
					/>
					<h1 className={classes.headTittle}>
						Auditorias Realizadas
					</h1>
					<BottomNavigationAction
						className={classes.icons}
						icon={<Autorenew />}
					/>
				</div>
			</React.Fragment>
		)
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
