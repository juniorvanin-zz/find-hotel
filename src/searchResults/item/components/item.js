import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as StarIcon, faSmile as SmileIcon } from "@fortawesome/free-regular-svg-icons"
import { faLocationArrow as LocationArrowIcon } from "@fortawesome/free-solid-svg-icons"
import "../item.css"

class Item extends React.Component {
	render() {
		return (
			<div className="item-wrapper">
				<div className="thumbnail"></div>
				<div className="general-details">
					<h2>Quentin Amsterdam Hotel</h2>
					<div className="stars">
						<FontAwesomeIcon icon={StarIcon} color="#FF7C44"/>
						<FontAwesomeIcon icon={StarIcon} color="#FF7C44"/>
						<FontAwesomeIcon icon={StarIcon} color="#FF7C44"/>
						<FontAwesomeIcon icon={StarIcon} color="#e5e5e5"/>
						<FontAwesomeIcon icon={StarIcon} color="#e5e5e5"/>
					</div>
					<div className="location">
						<FontAwesomeIcon icon={LocationArrowIcon} color="#0098E8"/>
						<span> 120 m to city center - Jordan </span>
					</div>
					<div className="rating">
						<FontAwesomeIcon icon={SmileIcon} color="#82BB7F"/>
						<span> Amazing 9.2 </span>
					</div>
					<ul className="tags">
						<li> Amazing SPA </li>
						<li> Good food </li>
						<li> Family friendly </li>
						<li> Great location </li>
						<li> Perfect WiFi </li>
					</ul>
				</div>
				<div className="price-details">
					<span> $ 104 </span>
				</div>
			</div>
		)
	}
}

export default Item
