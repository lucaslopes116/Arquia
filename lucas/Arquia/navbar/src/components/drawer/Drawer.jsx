import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = (themes) => ({
	drawerContainer: {
		width: '100%',
		display: 'inline-block',
		position: 'absolute',
		top: '30px',
		left: '0px',
		border: 'none',
		boxShadow: 'none'
	},
	drawerExpansion: {
		boxShadow: 'none',
		justifyContent: 'center'
	},
	drawerPanelSummary: {
		display: 'inline-block',
		marginTop: '8px'
	}
})

class Drawer extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<button className={classes.drawerContainer}>
				<ExpansionPanel className={classes.drawerExpansion}>
					<ExpansionPanelSummary
						className={classes.drawerPanelSummary}
						expandIcon={<ExpandMoreIcon />}
					>
						{this.props.tittleName}
					</ExpansionPanelSummary>
					{this.props.children}
				</ExpansionPanel>
			</button>
		)
	}
}

Drawer.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Drawer)
