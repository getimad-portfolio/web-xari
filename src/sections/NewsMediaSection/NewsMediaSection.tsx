import NewsMediaCard from "./NewsMediaCard";
import ImgLocation from "../../assets/images/posts/img-location.webp";
import ImgPartnership from "../../assets/images/posts/img-partnership.webp";
import imgProduct from "../../assets/images/posts/img-product.webp";

function NewsMediaSection() {
  const newsAndMedia: { title: string; description: string; img: string }[] = [
    {
      title: "New Product Launch",
      description:
        "We are excited to announce the launch of our new product. This product will help you achieve your goals.",
      img: imgProduct,
    },
    {
      title: "New Office Location",
      description:
        "We are excited to announce the launch of our new office location. This office will help you achieve your goals.",
      img: ImgLocation,
    },
    {
      title: "New Partnership",
      description:
        "We are excited to announce the launch of our new partnership. This partnership will help you achieve your goals.",
      img: ImgPartnership,
    },
  ];

  return (
    <section
      className="mx-auto py-24 w-10/12 md:w-10/12 2xl:w-4/5 max-w-7xl"
      id="news"
    >
      <div className="flex flex-col gap-12 bg-primary-ori/10 dark:bg-dark-primary-ori/10 p-16 rounded-xl">
        <div className="text-center">
          <h2 className="mb-4 font-bold text-3xl">News & Media</h2>
          <p className="text-primary-ori dark:text-dark-primary-ori text-xl">
            Discover our latest news...
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-16">
          {newsAndMedia.map((news, index) => (
            <NewsMediaCard
              key={index}
              title={news.title}
              description={news.description}
              img={news.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsMediaSection;
