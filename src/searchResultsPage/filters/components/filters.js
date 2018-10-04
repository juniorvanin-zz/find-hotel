import React, { Fragment } from "react"
import PropTypes from "prop-types"
import MediaQuery from "react-responsive"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter as FilterIcon, faSortAmountDown as SortIcon } from "@fortawesome/free-solid-svg-icons"

import DistanceInput from "searchResultsPage/filters/distanceInput/components/distanceInput"
import MinRatingInput from "searchResultsPage/filters/minRatingInput/components/minRatingInput"
import MaxPriceInput from "searchResultsPage/filters/maxPriceInput/components/maxPriceInput"
import SortBy from "searchResultsPage/filters/sortBy/components/sortBy"
import SliderMenu from "searchResultsPage/filters/sliderMenu/components/sliderMenu"
import MobileFilters from "searchResultsPage/filters/sliderMenu/filters/components/filters"

const BLUE = "#0092e5"

class Filters extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sliderFilterVisibility: false
		}
	}

	toggleSliderMenu() {
		this.setState (
			{
				sliderMenuVisibility: !this.state.sliderMenuVisibility
			}
		)
	}

	render() {
		const { priceRange, ratingRange, distanceRange } = this.props.options
		return (
			<Fragment>
				<MediaQuery minWidth={836}>
					<div className="input-range-group">
						<div className="input-range-wrapper">
							<MaxPriceInput
								minValue={ priceRange.min }
								maxValue={ priceRange.max }
								selectedValue={ priceRange.selectedValue }
							/>
						</div>
						<div className="input-range-wrapper">
							<MinRatingInput
								minValue={ ratingRange.min }
								maxValue={ ratingRange.max }
								selectedValue={ ratingRange.selectedValue }
							/>
						</div>
						<div className="input-range-wrapper">
							<DistanceInput
								minValue={ distanceRange.min }
								maxValue={ distanceRange.max }
								selectedValue={ distanceRange.selectedValue }
							/>
						</div>
					</div>
					<SortBy { ...this.props.sortByInfo } />
				</MediaQuery>
				<MediaQuery maxWidth={835}>
					<SliderMenu title="Filter" visibility={ this.state.sliderMenuVisibility } toggleSliderMenu={ () => this.toggleSliderMenu() }>
						<MobileFilters />
					</SliderMenu>
					<SortByButton />
					<FilterByButton toggleSliderMenu={ () => this.toggleSliderMenu() }/>
				</MediaQuery>
			</Fragment>
		)
	}
}

const SortByButton = () => (
	<button className="mobile-button">
		<FontAwesomeIcon icon={ SortIcon } color={BLUE} />
		<span> Sort by </span>
	</button>
)

const FilterByButton = (props) => (
	<button className="mobile-button" onClick={ () => props.toggleSliderMenu() }>
		<FontAwesomeIcon icon={ FilterIcon } color={BLUE} />
		<span> Filter by </span>
	</button>
)

FilterByButton.propTypes = {
	toggleSliderMenu: PropTypes.func
}

Filters.propTypes = {
	sortByInfo: PropTypes.object,
	options: PropTypes.object
}

export default Filters
