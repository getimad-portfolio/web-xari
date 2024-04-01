import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import TestimonialCard from "./TestimonialCard";
import reviews from "./Reviews";

import "./TestimonialsSection.css";
import { ScrollEffectContainer } from "../../effects";

function TestimonialsSection() {
  return (
    <ScrollEffectContainer>
      <section className="mx-auto py-24 max-w-5xl" id="testimonials">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="mb-6 font-bold text-4xl">Testimonials</h2>
            <p className="text-primary-ori dark:text-dark-primary-ori text-xl">
              What people are saying about us...
            </p>
          </div>
          <div className="mx-auto w-3/4">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={120}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <TestimonialCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </ScrollEffectContainer>
  );
}

export default TestimonialsSection;
