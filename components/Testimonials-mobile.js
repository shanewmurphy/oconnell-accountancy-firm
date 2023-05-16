import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials_Data = [
  {
    id: "01",
    name: "Joe Fitzgerald",
    location: "Galway",
    comment:
      "Working with this John has been a game-changer for my small business. They've helped me navigate complex tax laws and make smart financial decisions that have saved me money and improved my bottom line. I couldn't recommend them more highly.",
  },
  {
    id: "02",
    name: " John Kelly",
    location: "Galway",
    comment:
      "I was overwhelmed and confused by my taxes until I started working with this tax consultant. They took the time to explain everything to me in a way that was easy to understand, and they worked tirelessly to get me the best possible outcome. I'm so grateful for their expertise and support",
  },
  {
    id: "03",
    name: "Doanl O’Sullivan",
    location: "Galway",
    comment:
      "I've been a client of this accounting firm for years, and I've always been impressed by their professionalism, responsiveness, and attention to detail. They go above and beyond to make sure their clients are well taken care of, and I feel confident knowing that my finances are in their capable hands.",
  },
  {
    id: "04",
    location: "Cork",
    name: "James Ryan",
    comment:
      "As a freelancer, I was worried about how to handle my taxes and finances. But this accountant put my mind at ease with their expert advice and guidance. They've helped me streamline my bookkeeping and develop a long-term financial plan that's tailored to my unique needs. I'm so glad I found them!",
  },
  {
    id: "05",
    location: "Limerick",
    name: "Sarah O’Brien",
    comment:
      "I've worked with many accountants over the years, but this one is truly exceptional. They're knowledgeable, thorough, and always willing to go the extra mile for their clients. I wouldn't trust my finances to anyone else.",
  },
  {
    id: "06",
    location: "Kerry",
    name: "Ann-Maire O’Connor",
    comment:
      "This tax consultant is a lifesaver! They helped me resolve a complicated tax issue that had been hanging over my head for months, and they did it with professionalism and efficiency. I'm so grateful for their expertise and dedication to their clients",
  },
];
export default function MobileTestimonials() {
  return (
    <div>
      <div className="text-center">
        <h1 className="xl:text-6xl lg:text-5xl md:text-5xl sm:text-3xl lg:hidden md:hidden sm:block text-beige font-bold mb-4 antialiased">
          Customers Stories
        </h1>
      </div>
      <div className="w-full lg:hidden md:hidden sm:flex lg:mb-60 md:mb-40 sm:mb-36">
        <Swiper
          spaceBetween={30}
          slidesPerView="1"
          grabCursor={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Testimonials_Data.map((Testimonials) => {
            return (
              <SwiperSlide
                className="w-2/6 py-6 px-7 bg-deepgreen rounded-lg"
                key={Testimonials.id}
              >
                <p className="text-white text-base font-medium leading-snug antialiased">
                  {Testimonials.comment}
                </p>
                <h4 className="mt-4 text-white text-base font-bold antialiased">
                  {Testimonials.name}
                </h4>
                <h5 className="text-white text-sm font-semibold antialiased">
                  {Testimonials.location}
                </h5>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
