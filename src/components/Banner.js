/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  const carouselImages = [
    { index: "1", url: "https://bit.ly/3aTtuul", name: "Prime Video" },
    { index: "2", url: "https://bit.ly/3aUWWjK", name: "Amazon Music" },
    { index: "3", url: "https://bit.ly/3DWPVeF", name: "Audible" },
  ];

  return (
    <div>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        interval={5000}
        transitionTime={200}
        autoPlay
        infiniteLoop
      >
        {carouselImages.map((carousel) => {
          return (
            <div key={carousel.index}>
              <img src={carousel.url} alt={carousel.name} loading="lazy" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Banner;
