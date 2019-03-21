import React from 'react'
import Filter from '../components/filter/Filter'
import Container from '../components/container/Container'
import Header from '../components/header/Header'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const style = (theme) => ({
	main: {
		/* margin: 10px; */
		/* border: 1px solid black; */
		display: 'flex',
		/* position: relative; */
		overflow: 'hidden',
		/* max-width: 350px; */
		width: '100%',
		minHeight: '400px',
		/* border-radius: 10px; */
		flexDirection: 'column'
	}
})

class Card extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<React.Fragment>
				<div className={classes.main}>
					<Header />
					<Filter />
					<Container />
				</div>
			</React.Fragment>
		)
	}
}

Card.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(Card)
