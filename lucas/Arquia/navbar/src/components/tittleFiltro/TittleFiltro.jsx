import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
		marginTop: '7px'
	}
})

class TittleFiltro extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div>
				<p className={classes.heading}>Filtros</p>
			</div>
		)
	}
}

TittleFiltro.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TittleFiltro)
