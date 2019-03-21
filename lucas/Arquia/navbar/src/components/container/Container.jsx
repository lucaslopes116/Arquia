import React from 'react'
import SwiperTeste from '../swiper/SwiperTeste'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = (theme) => ({
	tittle: {
		margin: '40px 20px 20px',
		fontFamily: 'Roboto',
		fontWeight: 'Bold'
	}
})

class Container extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div>
				<h1 className={classes.tittle}>Título</h1>
				<p>* gráfico *</p>
				<SwiperTeste />
			</div>
		)
	}
}

Container.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Container)
