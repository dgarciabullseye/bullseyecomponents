import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.scss";
import "lazysizes";

const ImageCarousel = ({ productArray, title, itemNumber, containerExtraClass }) => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 2048 },
			items: Math.ceil(itemNumber * 1.5)
		},
		desktop: {
			breakpoint: { max: 2048, min: 1024 },
			items: itemNumber
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: Math.ceil(itemNumber * 0.5)
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: Math.ceil(itemNumber * 0.25)
		}
	};

	return (
		<div>
			{title && <h4>{title}</h4>}
			<br />
			<Carousel
				responsive={responsive}
				autoPlay={true}
				autoPlaySpeed={5000}
				containerClass="carousel-container"
				itemClass="carousel-item"
				removeArrowOnDeviceType={[
					"tablet",
					"mobile"
				]}>
				{productArray.map((product) => {
					return (
						<div key={product.id} className={containerExtraClass}>
							<img
								className="lazyload img-fluid"
								data-src={product.image}
								title={product.titleImage}
								alt={product.titleImage}
							/>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default ImageCarousel;
