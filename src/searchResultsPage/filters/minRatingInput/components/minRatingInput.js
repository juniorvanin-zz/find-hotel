import React from "react"
import PropTypes from "prop-types"
import InputRange from "searchResultsPage/filters/inputRange/inputRange"
import { faSmile as SmileIcon } from "@fortawesome/free-regular-svg-icons"

const MinRatingInput = (props) => (
	<InputRange
		icon={SmileIcon}
		label="Min rating"
		type="number"
		selectedValue={ props.selectedValue }
		minValue={ props.minValue }
		maxValue={ props.maxValue }
	/>
)

MinRatingInput.propTypes = {
	minValue: PropTypes.number,
	maxValue: PropTypes.number,
	selectedValue: PropTypes.number
}

export default MinRatingInput
