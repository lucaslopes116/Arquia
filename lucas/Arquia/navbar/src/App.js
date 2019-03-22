import React, { Component } from 'react'
import Card from './screen/Card'
import classNames from 'classnames'
import SwiperTeste from './components/swiper/SwiperTeste'
import NewMenuBotton from './components/newMenuBotton/NewMenuBotton'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import './App.css'

const styles = (themes) => ({
	slide: {
		flex: 1,
		marginTop: 0,
		marginBottom: 0,
		marginLeft: '5%',
		marginRight: '5%',
		transform: 'scale(0.9)',
		border: '1px solid #9575cd',
		borderRadius: '20px',
		overflow: 'hidden',
		animation: 'scaleDown 0.2s',
		'&.slideActive': {
			transform: 'scale(1)',
			animation: 'grow 0.2s',
			overflow: 'hidden',
			textAlign: 'center',
			borderRadius: 0,
			border: 'none',
			marginLeft: 0,
			marginRight: 0
		}
	},
	app: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		height: '100%'
	},
	/*Animação de encolhimento de card , quando clicar para selecionar outros cards */
	'@keyframes grow': {
		'0%': {
			transform: 'scale(0.9)',
			borderRadius: '20px',
			border: '1px solid #9575cd'
		},
		'25%': {
			transform: 'scale(0.925)',
			borderRadius: '20px',
			border: '1px solid #9575cd'
		},
		'50%': {
			transform: 'scale(0.95)',
			borderRadius: '20px',
			border: '1px solid #9575cd'
		},
		'75%': {
			transform: 'scale(0.975)',
			borderRadius: '20px',
			border: '1px solid #9575cd'
		},
		'100%': {
			transform: 'scale(1)',
			borderRadius: '20px',
			border: '1px solid #9575cd'
		}
	},
	/*Animação de crescimento de card , quando clicar ele seleciona o card */
	'@keyframes scaleDown': {
		'0%': {
			transform: 'scale(1)'
		},
		'25%': {
			transform: 'scale(0.975)'
		},
		'50%': {
			transform: 'scale(0.95)'
		},
		'75%': {
			transform: 'scale(0.925)'
		},
		'100%': {
			transform: 'scale(0.9)'
		}
	}
})

class App extends Component {
	state = {
		listaCards: [],
		currentIndex: 0,
		showSwipe: false
	}

	handleChange = () => {
		this.setState((state) => ({ checked: !state.checked }))
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
		const { currentIndex, listaCards } = this.state
		const { classes } = this.props

		return (
			<React.Fragment>
				<div
					className={classNames(classes.slide, {
						slideActive: true
					})}
				>
					{listaCards[currentIndex]}
				</div>
				<NewMenuBotton menuCard={this.activeSwipe} />
			</React.Fragment>
		)
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
			<div className={classes.app}>
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
