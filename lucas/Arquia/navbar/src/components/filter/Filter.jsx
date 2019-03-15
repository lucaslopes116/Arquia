import React from 'react'
import TittleFiltro from './../tittleFiltro/TittleFiltro'
import ChipsArray from './../chip/ChipsArray'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = (theme) => ({
	filterContainer: {
		Width: '200px',
		display: 'flex',
		position: 'absolute',
		top: '30px',
		left: '33%',
		right: '33%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
		margintop: '100px'
	},
	filter: {
		Width: '100%'
	},
	expandIcon: {
		top: '30%'
	},
	teste: {
		marginTop: '10px'
	}
})

class ControlledExpansionPanels extends React.Component {
	state = {
		expanded: null
	}

	handleChange = (panel) => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		})
	}

	render() {
		const { classes } = this.props
		const { expanded } = this.state

		return (
			<div className={classes.filterContainer}>
				<ExpansionPanel
					className={classes.filter}
					expanded={expanded === 'panel1'}
					onChange={this.handleChange('panel1')}
				>
					<ExpansionPanelSummary
						expandIcon={
							<ExpandMoreIcon className={classes.teste} />
						}
					>
						<TittleFiltro />
					</ExpansionPanelSummary>
					<ChipsArray />
				</ExpansionPanel>
			</div>
		)
	}
}

ControlledExpansionPanels.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ControlledExpansionPanels)
