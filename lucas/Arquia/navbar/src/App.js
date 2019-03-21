import React, { Component } from 'react'
import Card from './screen/Card'
import SwiperTeste from './components/swiper/SwiperTeste'
import NewMenuBotton from './components/newMenuBotton/NewMenuBotton'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import './App.css'

const styles = (themes) => ({
	slide: {
		transform: 'scale(0.9)',
		transition: 'all 3s ease-in-out',
		border: '1px solid #9575cd',
		borderRadius: '20px',
		overflow: 'hidden'
	}
})

class App extends Component {
	state = {
		listaCards: [],
		currentIndex: 0,
		showSwipe: false,
		showCard: true
	}

	componentDidMount() {
		this.setState({
			listaCards: [<Card />, <Card />, <Card />]
		})
	}
	activeSwipe = () => {
		this.setState({
			showSwipe: true
		})
	}

	drawDefault() {
		const { currentIndex, showCard, listaCards } = this.state

		return showCard ? (
			<div className="App">
				{listaCards[currentIndex]}
				<NewMenuBotton menuCard={this.activeSwipe} />
			</div>
		) : null
	}

	selectCard = (index) => {
		this.setState({
			currentIndex: index,
			showSwipe: false
		})
	}

	drawSwipe() {
		const { classes } = this.props
		const { listaCards } = this.state

		return (
			<div className="App">
				<SwiperTeste>
					{listaCards.map((item, index) => (
						<div
							className={classes.slide}
							onClick={() => this.selectCard(index)}
						>
							{item}
						</div>
					))}
				</SwiperTeste>
				<NewMenuBotton menuCard={this.activeSwipe} />
			</div>
		)
	}

	render() {
		const { showSwipe } = this.state

		return showSwipe ? this.drawSwipe() : this.drawDefault()
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
