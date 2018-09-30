import React from "react"
import PropTypes from "prop-types"

import BestPrice from "searchResults/hotel/PriceDetails/bestPrice/components/bestPrice"
import OtherPrices from "searchResults/hotel/PriceDetails/otherPrices/components/otherPrices"
import ShowDetailsButton from "searchResults/hotel/PriceDetails/showDetailsButton/components/showDetailsButton"

import "searchResults/hotel/PriceDetails/PriceDetails.css"

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
