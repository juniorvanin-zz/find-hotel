import React from "react"
import PropTypes from "prop-types"

import "filters/sortBy/sortBy.css"

const SortBy = (props) => (
	<div className="sort-by-wrapper">
		<label htmlFor="sortBy"> Sort by </label>
		<select id="sortBy">
			{
				props.sortByOptions.map((option) => (
					<option key={ option.key } value={ option.key }>{ option.value }</option>
				))
			}
		</select>
		<span> { props.numberOfHotels } hotels, <a href="">{ props.numberOfGreatDeals } with great deals </a></span>
	</div>
)

SortBy.propTypes = {
	numberOfHotels: PropTypes.number,
	numberOfGreatDeals: PropTypes.number,
	sortByOptions: PropTypes.array
}

export default SortBy
