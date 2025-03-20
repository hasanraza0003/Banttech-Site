import { FaArrowRight, FaCheck } from "react-icons/fa";

const services = [
  {
    title: '"Bespoke eCommerce" That Sells Itself',
    icon: "🛒",
    bgColor: "bg-[#E2E8D8]",
    points: [
      "Fully Customize Store",
      "On-Page SEO Optimise Store",
      "Intuitive Mobile Apps",
      "Powerful Admin Dashboard",
      "Advance Vendor Panel",
      "Excellent Lead Time"
    ]
  },
  {
    title: 'Premium "Mobile Application" Development',
    icon: "📱",
    bgColor: "bg-[#C2DFEC]",
    points: [
      "Fully Customized Mobile App",
      "On-Demand App Solutions",
      "Customer’s Oriented UI/UX",
      "Robust & Scalable Solution",
      "Integrated Marketing Tools",
      "Hybrid & Native App Development"
    ]
  },
  {
    title: 'Solution Oriented "Digital Marketing"',
    icon: "📈",
    bgColor: "bg-[#FADCE4]",
    points: [
      "Unlock Massive Organic Traffic",
      "Website On-Page Optimisation",
      "ROI Focused Campaigns",
      "Get Social Media Coverage",
      "Guaranteed Keyword Ranking"
    ]
  },
  {
    title: '"Content Writing" By Humans',
    icon: "📝",
    bgColor: "bg-[#E4E4E4]",
    points: [
      "Create Epic Content that Converts",
      "Audience Oriented Content",
      "Content that Ranks Itself",
      "Regular Blog Writing",
      "100% Unique Content Copies"
    ]
  }
];

export const Features = () => {
  return (
        <section className="py-16 px-72  mx-auto text-start bg-white">
        <h2 className="text-3xl font-bold">
          Feature <span className="text-secondary font-s">Services</span>
        </h2>
        <br />
        <p className="mt-2 text-gray-700 pr-80 mx-auto text-start">
          Team Banttech transforms the way our clients launch → Run → and Grow their business digitally. Our services are planned to accelerate growth for brands with <strong>Innovation, Experience, and Technology</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-10 rounded-lg ${service.bgColor} text-left flex flex-col justify-between `}
            >
              <div>
                <span className="text-3xl">{service.icon}</span>
                <h3 className="font-bold text-3xl text-b-1 mt-2">{service.title}</h3>
                <ul className="mt-2 text-gray-600">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheck className="text-secondary" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-fit mt-4 flex items-center gap-2 px-4 py-2 border-2 border-b-1 rounded-full hover:bg-b-1 hover:text-white transition">
                READ MORE <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>
)
}


