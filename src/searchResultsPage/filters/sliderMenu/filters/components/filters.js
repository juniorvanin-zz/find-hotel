import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as StarIcon } from "@fortawesome/free-solid-svg-icons"

const GREY = "#9F9F9F"

const Filters = () => (
	<div className="filters">
		<span> Guest rating </span>
		<div className="filter-group rating">
			<button className="selected"> Any </button>
			<button> 6+ </button>
			<button> 7+ </button>
			<button> 8+ </button>
			<button> 9+ </button>
		</div>
		<span> Star rating </span>
		<div className="filter-group stars">
			<button className="selected"> Any </button>
			<button>
				<span>2</span>
				<FontAwesomeIcon icon={ StarIcon } color={GREY} />
			</button>
			<button>
				<span>3</span>
				<FontAwesomeIcon icon={ StarIcon } color={GREY} />
			</button>
			<button>
				<span>4</span>
				<FontAwesomeIcon icon={ StarIcon } color={GREY} />
			</button>
			<button>
				<span>5</span>
				<FontAwesomeIcon icon={ StarIcon } color={GREY} />
			</button>
		</div>
	</div>
)

export default Filters
