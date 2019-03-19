import React from 'react'
import TittleFiltro from '../tittleFiltro/TittleFiltro'
import ChipsArray from './../chip/ChipsArray'
import Drawer from '../drawer/Drawer'

class Filter extends React.Component {
	render() {
		return (
			<Drawer tittleName={<TittleFiltro />}>
				<ChipsArray />
			</Drawer>
		)
	}
}

export default Filter
