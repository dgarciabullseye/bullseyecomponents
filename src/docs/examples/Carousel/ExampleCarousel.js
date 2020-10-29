import React from "react";
import Carousel from "src-components/Carousel";

export default function ExampleCarousel() {
	const exampleImages = [
		{
			id: 1,
			titleImage: "image-1",
			image: "https://starnetflooring.zohosites.com/files/Project%20Photos/Allegeheny-Contract-5.jpg"
		},
		{
			id: 2,
			titleImage: "image-2",
			image: "https://starnetflooring.zohosites.com/files/Project%20Photos/Allegeheny-Contract-1.jpg"
		},
		{
			id: 3,
			titleImage: "image-3",
			image: "https://starnetflooring.zohosites.com/files/Project%20Photos/Allegeheny-Contract-3.jpg"
		},
		{
			id: 4,
			titleImage: "image-4",
			image: "https://starnetflooring.zohosites.com/files/Project%20Photos/Allegeheny-Contract-7.jpg"
		},
		{
			id: 5,
			titleImage: "image-5",
			image: "https://starnetflooring.zohosites.com/files/Project%20Photos/Allegeheny-Contract-5.jpg"
		},
		{
			id: 6,
			titleImage: "image-6",
			image: "https://starnetflooring.zohosites.com/files/Project%20Photos/Allegeheny-Contract-1.jpg"
		}
	];

	return (
		<Carousel
			productArray={exampleImages}
			itemNumber={8}
			title={"Optional Corousel Title"}
			containerExtraClass="p-1"
		/>
	);
}
