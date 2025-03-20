import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const blogs = [
  {
    id: 1,
    title: "The Power of Thoughtful CTAs: Transforming Users into Loyal...",
    date: "2024-12-13",
    comments: "0 comment",
    description:
      "Craft compelling CTAs to drive engagement, boost SEO, and convert more users. Explore tips, examples, and strategies to optimize your CTAs f...",
    image: "assets/images/blog-x.webp"
  },
  {
    id: 2,
    title: "How to Ensure Successful Project Completion without...",
    date: "2024-11-18",
    comments: "1 comment",
    description:
      "How to Ensure Successful Project Completion without midway stalls? A quick-hit framework to make sure your projects stay on track, and you g...",
    image: "assets/images/blog-x.webp"
  },
  {
    id: 3,
    title: "App vs. Website: Choosing the Right Platform for Your Business",
    date: "2023-05-31",
    comments: "1 comment",
    description:
      "Today, business owners face a significant dilemma when deciding between a mobile app and a website to promote their businesses effectively....",
    image: "assets/images/blog-x.webp"
  },
];

export const BlogSec = () => {
  return (
    <section className="bg-white px-80 py-20 mb-28">
      <div className="container mx-auto text-center">
        <div className="flex justify-between items-center">
                <div className="text-start px-24">

          <h2 className="text-4xl text-b-1 font-bold">
            Blog - News, Posts & <span className="text-secondary font-s">Guide</span>
          </h2>
          <p className="text-b-1 mt-8">
            An easy way to stay tuned with the latest technology, updates and
            guides.
          </p>
                </div>
          <button className="flex justify-center items-center gap-4 mt-6 px-6 py-2 border-2 border-b-2 rounded-full hover:bg-gray-100">
            VIEW ALL BLOGS <FaArrowRight />
          </button>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-black/10"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-start">
                <h3 className="font-bold text-[22px] text-b-1 mb-4">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-10">
                  {blog.date} • {blog.comments}
                </p>
                <p className="text-gray-600 mt-2 text-md">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
