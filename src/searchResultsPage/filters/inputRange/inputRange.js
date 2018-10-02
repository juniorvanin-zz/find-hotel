import React, { Fragment } from "react"
import PropTypes from "prop-types"
import ReactInputRange from "react-input-range"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "searchResultsPage/filters/inputRange/inputRange.css"

class InputRange extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 0,
		}
	}

	buildLabel(value) {
		if (this.props.type == "money") {
			return `€${value}`
		}

		if (this.props.type == "km") {
			return `${value}km`
		}

		return value
	}

	render() {
		return(
			<Fragment>
				<label className="input-range-label">
					<FontAwesomeIcon icon={ this.props.icon } color="#787878" />
					<span> { this.props.label } </span>
				</label>
				<ReactInputRange
					maxValue={ this.props.maxValue }
					minValue={ this.props.minValue }
					formatLabel={ (value) => this.buildLabel(value) }
					value={ this.state.value }
					onChange={ value => this.setState({ value }) }
				/>
			</Fragment>
		)
	}
}

InputRange.propTypes = {
	icon: PropTypes.object,
	label: PropTypes.string,
	minValue: PropTypes.number,
	maxValue: PropTypes.number,
	type: PropTypes.string
}

export default InputRange
