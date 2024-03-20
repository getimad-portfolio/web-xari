import NewsMediaCard from "./NewsMediaCard";

function NewsMediaSection() {
  const newsAndMedia: { title: string; description: string }[] = [
    {
      title: "New Product Launch",
      description:
        "We are excited to announce the launch of our new product. This product will help you achieve your goals.",
    },
    {
      title: "New Office Location",
      description:
        "We are excited to announce the launch of our new office location. This office will help you achieve your goals.",
    },
    {
      title: "New Partnership",
      description:
        "We are excited to announce the launch of our new partnership. This partnership will help you achieve your goals.",
    },
  ];

  return (
    <section className="mx-auto py-24 max-w-5xl">
      <div className="flex flex-col gap-12 bg-primary-ori/10 p-16 rounded-xl">
        <div className="text-center">
          <h2 className="mb-4 font-bold text-3xl">News & Media</h2>
          <p className="text-primary-ori text-xl">
            Discover our latest news...
          </p>
        </div>
        <div className="flex flex-row gap-16">
          {newsAndMedia.map((news, index) => (
            <NewsMediaCard
              key={index}
              title={news.title}
              description={news.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsMediaSection;
