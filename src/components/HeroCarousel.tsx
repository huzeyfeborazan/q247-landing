"use client";

import Slider from "react-slick";
import Image from "next/image";

const slides = [
  {
    src: "/images/banner1.jpg",
    heading: "Welcome to Q247",
    sub: "Challenge your brain. Compete with the world."
  },
  {
    src: "/images/banner2.jpg",
    heading: "Daily Trivia Battles",
    sub: "New questions every hour. Can you keep up?"
  },
  {
    src: "/images/banner3.jpg",
    heading: "Track Your Score",
    sub: "See your ranking and climb the leaderboard."
  }
];

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="relative w-full max-h-[832px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-[60vh] md:h-[80vh] w-full">
            <Image
              src={slide.src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover brightness-50"
              priority={idx === 0}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.heading}</h2>
              <p className="text-lg md:text-2xl mt-4">{slide.sub}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
