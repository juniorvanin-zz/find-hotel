import React from "react"
import PropTypes from "prop-types"

import SortBy from "filters/sortBy/components/sortBy"

const Filters = (props) => (
	<SortBy { ...props.sortByInfo } />
)

Filters.propTypes = {
	sortByInfo: PropTypes.object
}

export default Filters
