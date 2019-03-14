import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MenuList from './../menuList/MenuList'

const styles = (theme) => ({
	navi: {
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#9575cd',
		position: 'absolute',
		bottom: '0px'
	}
})

class Menu extends React.Component {
	state = {
		value: 'recents'
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	icones = [
		{
			value: 'teste',
			label: 'Hora',
			component: <RestoreIcon />
		},
		{
			value: 'favicon',
			label: 'Favorito',
			component: <FavoriteIcon />
		},
		{
			value: 'location',
			label: 'Ta perto',
			component: <LocationOnIcon />
		},
		{
			value: 'more',
			label: '',
			component: <MenuList />
		}
	]

	render() {
		const { classes } = this.props
		const { value } = this.state

		return (
			<BottomNavigation
				value={value}
				onChange={this.handleChange}
				className={classes.navi}
			>
				{this.icones.map((icone, index) => (
					<BottomNavigationAction
						key={index}
						label={icone.label}
						value={icone.value}
						icon={icone.component}
					/>
				))}
			</BottomNavigation>
		)
	}
}

Menu.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Menu)
