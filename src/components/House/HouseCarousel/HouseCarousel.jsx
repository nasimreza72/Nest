import { Carousel } from "react-bootstrap";

export const HouseCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/8a4568c9-4b46-4bac-8e15-3a3b53707472.jpg?im_w=1200"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://a0.muscache.com/im/pictures/9dd13789-8644-436d-af02-ff1920ca269a.jpg?im_w=720"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="rounded-img" src="https://a0.muscache.com/im/pictures/07431e42-dd3a-446f-b583-07a61e29a73b.jpg?im_w=720"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
