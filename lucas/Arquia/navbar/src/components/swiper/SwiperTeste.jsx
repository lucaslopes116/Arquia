import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const styles = (themes) => ({
	slideContainer: {
		padding: '0 10px'
	}
})

class SwiperTeste extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<SwipeableViews className={classNames(classes.slideContainer)}>
				{this.props.children}
			</SwipeableViews>
		)
	}
}

SwiperTeste.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SwiperTeste)
