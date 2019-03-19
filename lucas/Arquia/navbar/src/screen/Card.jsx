import React from 'react'
import Filter from '../components/filter/Filter'
import Container from '../components/container/Container'
import Menu from '../components/menuBotton/Menu'
import NewMenuBotton from '../components/newMenuBotton/NewMenuBotton'
import Header from '../components/header/Header'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const style = (theme) => ({
	main: {
		position: 'relative',
		margin: '10px',
		display: 'flex',
		flexDirection: 'column',
		border: '1px solid black',
		borderRadius: '10px',
		minHeight: '400px',
		overflow: 'hidden',
		maxWidth: '350px'
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
					<NewMenuBotton />
				</div>
			</React.Fragment>
		)
	}
}

Card.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(Card)
