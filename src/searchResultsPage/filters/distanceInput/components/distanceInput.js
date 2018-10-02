import React from "react"
import PropTypes from "prop-types"
import InputRange from "searchResultsPage/filters/inputRange/inputRange"
import { faLocationArrow as LocationArrowIcon } from "@fortawesome/free-solid-svg-icons"

const DistanceInput = (props) => (
	<InputRange
		icon={LocationArrowIcon}
		label="Distance from city center"
		type="km"
		selectedValue={ props.selectedValue }
		minValue={ props.minValue }
		maxValue={ props.maxValue }
	/>
)

DistanceInput.propTypes = {
	minValue: PropTypes.number,
	maxValue: PropTypes.number,
	selectedValue: PropTypes.number
}

export default DistanceInput
