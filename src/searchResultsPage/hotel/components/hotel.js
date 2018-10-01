import React from "react"
import PropTypes from "prop-types"

import GeneralDetails from "searchResultsPage/hotel/generalDetails/components/generalDetails"
import PriceDetails from "searchResultsPage/hotel/priceDetails/components/priceDetails"
import Thumbnail from "searchResultsPage/hotel/thumbnail/components/thumbnail"

import "searchResultsPage/hotel/hotel.css"

const Hotel = (props) => (
	<li className="item-wrapper">
		<Thumbnail url={ props.thumbnail } />
		<GeneralDetails { ...props.generalDetails } />
		<PriceDetails { ...props.priceDetails } />
	</li>
)

Hotel.propTypes = {
	thumbnail: PropTypes.string,
	generalDetails: PropTypes.object,
	priceDetails: PropTypes.object
}

export default Hotel
