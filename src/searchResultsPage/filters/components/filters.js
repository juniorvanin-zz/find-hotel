import React, { Fragment } from "react"
import PropTypes from "prop-types"

import DistanceInput from "searchResultsPage/filters/distanceInput/components/distanceInput"
import MinRatingInput from "searchResultsPage/filters/minRatingInput/components/minRatingInput"
import MaxPriceInput from "searchResultsPage/filters/maxPriceInput/components/maxPriceInput"
import SortBy from "searchResultsPage/filters/sortBy/components/sortBy"

class Filters extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const options = this.props.options
		return (
			<Fragment>
				<div className="input-range-group">
					<div className="input-range-wrapper">
						<MaxPriceInput
							minValue={ options.priceRange.min }
							maxValue={ options.priceRange.max }
							selectedValue={ options.priceRange.selectedValue }
						/>
					</div>
					<div className="input-range-wrapper">
						<MinRatingInput
							minValue={ options.ratingRange.min }
							maxValue={ options.ratingRange.max }
							selectedValue={ options.ratingRange.selectedValue }
						/>
					</div>
					<div className="input-range-wrapper">
						<DistanceInput
							minValue={ options.distanceRange.min }
							maxValue={ options.distanceRange.max }
							selectedValue={ options.distanceRange.selectedValue }
						/>
					</div>
				</div>
				<SortBy { ...this.props.sortByInfo } />
			</Fragment>
		)
	}
}

Filters.propTypes = {
	sortByInfo: PropTypes.object,
	options: PropTypes.object
}

export default Filters
