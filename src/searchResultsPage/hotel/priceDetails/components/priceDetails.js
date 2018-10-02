import React from "react"
import PropTypes from "prop-types"

import BestPrice from "searchResultsPage/hotel/PriceDetails/bestPrice/components/bestPrice"
import OtherPrices from "searchResultsPage/hotel/PriceDetails/otherPrices/components/otherPrices"
import ShowDetailsButton from "searchResultsPage/hotel/PriceDetails/showDetailsButton/components/showDetailsButton"

import "searchResultsPage/hotel/PriceDetails/PriceDetails.less"

const PriceDetails = (props) => (
	<div className="price-details">
		<del className="regular-price"> { props.regularPrice } </del>
		<BestPrice bestPrice={ props.bestPrice } />
		<OtherPrices otherPrices={ props.otherPrices } />
		<ShowDetailsButton />
	</div>
)

PriceDetails.propTypes = {
	regularPrice: PropTypes.string,
	bestPrice: PropTypes.object,
	otherPrices: PropTypes.array
}

export default PriceDetails
