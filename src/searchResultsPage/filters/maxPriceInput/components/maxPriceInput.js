import React from "react"
import PropTypes from "prop-types"
import { faEuroSign as EuroIcon } from "@fortawesome/free-solid-svg-icons"
import InputRange from "searchResultsPage/filters/inputRange/inputRange"

const MaxPriceInput = (props) => (
	<InputRange
		icon={EuroIcon}
		label="Max price"
		type="money"
		selectedValue={ props.selectedValue }
		minValue={ props.minValue }
		maxValue={ props.maxValue }
	/>
)

MaxPriceInput.propTypes = {
	minValue: PropTypes.number,
	maxValue: PropTypes.number,
	selectedValue: PropTypes.number
}

export default MaxPriceInput
