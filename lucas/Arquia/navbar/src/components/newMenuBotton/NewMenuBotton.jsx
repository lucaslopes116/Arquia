import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FilterList from '@material-ui/icons/FilterList'

const styles = (themes) => ({
	newMenu: {
		width: '100%',
		backgroundColor: '#9575cd',
		position: 'absolute',
		bottom: '0px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	newMenuLabel: {
		color: '#FFF',
		fontSize: '18px',
		textTransform: 'uppercase',
		fontWeight: 'Bolder'
	},
	linhaVertical: {
		height: '100%',
		border: '1px solid #4527a0'
	}
})

class NewMenuBotton extends React.Component {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	render() {
		const { classes } = this.props
		const { value } = this.state

		return (
			<BottomNavigation
				value={value}
				onChange={this.handleChange}
				showLabels
				className={classes.newMenu}
			>
				<BottomNavigationAction
					className={classes.newMenuLabel}
					label="Card"
				/>
				<hr className={classes.linhaVertical} />
				<BottomNavigationAction
					className={classes.newMenuLabel}
					label="Plugin"
				/>
				<hr className={classes.linhaVertical} />
				<BottomNavigationAction
					className={classes.newMenuLabel}
					label="Menu"
				/>
				<hr className={classes.linhaVertical} />
				<BottomNavigationAction
					className={classes.newMenuLabel}
					icon={<FilterList />}
				/>
			</BottomNavigation>
		)
	}
}

NewMenuBotton.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewMenuBotton)
