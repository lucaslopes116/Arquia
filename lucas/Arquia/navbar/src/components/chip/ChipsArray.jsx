import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'

const styles = (theme) => ({
	paperContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		padding: theme.spacing.unit / 2,
		boxShadow: 'none'
	},
	chip: {
		margin: theme.spacing.unit / 2
	}
})

class ChipsArray extends React.Component {
	state = {
		chipData: [
			{ key: 0, label: 'Pera' },
			{ key: 1, label: 'Uva' },
			{ key: 2, label: 'Maça' },
			{ key: 3, label: 'Cenoura' },
			{ key: 4, label: 'Melancia' }
		]
	}

	handleDelete = (data) => () => {
		this.setState((state) => {
			const chipData = [...state.chipData]
			const chipToDelete = chipData.indexOf(data)
			chipData.splice(chipToDelete, 1)
			return { chipData }
		})
	}

	render() {
		const { classes } = this.props

		return (
			<Paper className={classes.paperContainer}>
				{this.state.chipData.map((data) => {
					let icon = null

					return (
						<Chip
							key={data.key}
							icon={icon}
							label={data.label}
							onDelete={this.handleDelete(data)}
							className={classes.chip}
						/>
					)
				})}
			</Paper>
		)
	}
}

ChipsArray.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ChipsArray)
