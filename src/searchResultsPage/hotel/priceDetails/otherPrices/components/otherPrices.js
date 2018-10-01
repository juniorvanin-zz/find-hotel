import React from "react"
import PropTypes from "prop-types"

const OtherPrices = (props) => (
	<ul className="other-prices">
		{
			props.otherPrices.map((price) => (
				<li key={ price.site }>
					<span className="site"> { price.site } </span>
					<span className="price"> { price.amount } </span>
				</li>
			))
		}
	</ul>
)

OtherPrices.propTypes = {
	otherPrices: PropTypes.array
}

export default OtherPrices
