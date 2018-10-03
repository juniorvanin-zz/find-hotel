import React, { Fragment } from "react"
import PropTypes from "prop-types"
import MediaQuery from "react-responsive"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter as FilterIcon, faSortAmountDown as SortIcon } from "@fortawesome/free-solid-svg-icons"

import DistanceInput from "searchResultsPage/filters/distanceInput/components/distanceInput"
import MinRatingInput from "searchResultsPage/filters/minRatingInput/components/minRatingInput"
import MaxPriceInput from "searchResultsPage/filters/maxPriceInput/components/maxPriceInput"
import SortBy from "searchResultsPage/filters/sortBy/components/sortBy"

const BLUE = "#0092e5"

class Filters extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const options = this.props.options
		return (
			<Fragment>
				<MediaQuery minWidth={800}>
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
				</MediaQuery>
				<MediaQuery maxWidth={800}>
					<SortByMobileButton />
					<FilterByMobileButton />
				</MediaQuery>
			</Fragment>
		)
	}
}

const SortByMobileButton = () => (
	<button className="mobile-filter-button">
		<FontAwesomeIcon icon={ SortIcon } color={BLUE} />
		<span> Sort by </span>
	</button>
)

const FilterByMobileButton = () => (
	<button className="mobile-filter-button">
		<FontAwesomeIcon icon={ FilterIcon } color={BLUE} />
		<span> Filter by </span>
	</button>
)

Filters.propTypes = {
	sortByInfo: PropTypes.object,
	options: PropTypes.object
}

export default Filters
