import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { MoreHoriz } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = (themes) => ({
	menuAdicional: {
		marginBottom: '10px'
	}
})

class SimpleMenu extends React.Component {
	state = {
		anchorEl: null
	}

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { anchorEl } = this.state
		const { classes } = this.props

		return (
			<div>
				<Button
					aria-owns={anchorEl ? 'simple-menu' : undefined}
					aria-haspopup="true"
					onClick={this.handleClick}
				>
					<BottomNavigationAction
						className={classes.menuAdicional}
						icon={<MoreHoriz />}
					/>
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.handleClose}>Teste</MenuItem>
					<MenuItem onClick={this.handleClose}>
						Teste do teste
					</MenuItem>
					<MenuItem onClick={this.handleClose}>
						Teste do teste do teste
					</MenuItem>
				</Menu>
			</div>
		)
	}
}

SimpleMenu.prototypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMenu)
