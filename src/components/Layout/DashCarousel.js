import React from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomCardSlide from "../CustomCardSlide";
import CustomDotGroup from "../CustomDotGroup";
import faker from "Faker";

export default function DashCarousel() {
	return (
		<>
			<CarouselProvider
				naturalSlideWidth={110}
				naturalSlideHeight={50}
				totalSlides={3}
				isPlaying={true}
				interval={2000}
				isIntrinsicHeight={true}
				infinite={true}
				style={{ height: "100%", padding: "0" }}
			>
				<Slider>
					<CustomCardSlide
						image="https://place-hold.it/1200x400&text=FeaturedPlace1&fontsize=72"
						index={0}
						header={faker.Company.companyName()}
						meta="Workspace"
						color="red"
						description={faker.Lorem.paragraph(4)}
					></CustomCardSlide>
					<CustomCardSlide
						image="https://place-hold.it/1200x400&text=FeaturedPlace2&fontsize=72"
						index={1}
						header={faker.Company.companyName()}
						meta="Farmhouse"
						color="blue"
						description={faker.Lorem.paragraph(4)}
					></CustomCardSlide>
					<CustomCardSlide
						image="https://place-hold.it/1200x400&text=FeaturedPlace3&fontsize=72"
						index={2}
						header={faker.Company.companyName()}
						meta="Banquet"
						color="yellow"
						description={faker.Lorem.paragraph(4)}
					></CustomCardSlide>
				</Slider>
				<CustomDotGroup slides1={3} />
			</CarouselProvider>
		</>
	);
}
