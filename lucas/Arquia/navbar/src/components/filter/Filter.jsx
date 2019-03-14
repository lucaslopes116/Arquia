import React from 'react'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Button from '@material-ui/core/Button'

const styles = (theme) => ({
	containerFilter: {
		position: 'relative'
	},
	paper: {
		position: 'absolute',
		top: 36,
		right: 0,
		left: 0,
		backgroundColor: 'red',
		zIndex: '150'
	},

	buttonContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '25%'
	}
})

class Filter extends React.Component {
	state = {
		open: true
	}

	handleClick = () => {
		this.setState((state) => ({
			open: !state.open
		}))
	}

	handleClickAway = () => {
		this.setState({
			open: false
		})
	}

	render() {
		const { classes } = this.props
		const { open } = this.state

		return (
			<div className={classes.containerFilter}>
				<ClickAwayListener onClickAway={this.handleClickAway}>
					<div className={classes.buttonContainer}>
						<Button onClick={this.handleClick}>
							Abrir filtro
							<BottomNavigationAction
								className={classes.menuAdicional}
								icon={<KeyboardArrowDown />}
							/>
						</Button>
						{open ? (
							<ul>
								<li>teste</li>
								<li>teste</li>
								<li>teste</li>
								<li>teste</li>
							</ul>
						) : null}
					</div>
				</ClickAwayListener>
			</div>
		)
	}
}

Filter.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Filter)
