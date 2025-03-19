import { FlipCard } from "../../components/FlipCard";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export const Glance = () => {
  const [animations, setAnimations] = useState({
    Budget: null,
    Need: null,
    Authority: null,
    TimeLine: null,
  });

  useEffect(() => {
    const fetchAnimations = async () => {
      try {
        const [budgetRes, needRes, authorityRes, timelineRes] = await Promise.all([
          fetch("https://assets5.lottiefiles.com/packages/lf20_8gviyzwa.json"),
          fetch("https://assets5.lottiefiles.com/private_files/lf30_9ncydozu.json"),
          fetch("https://assets2.lottiefiles.com/packages/lf20_i3EMDH.json"),
          fetch("https://assets10.lottiefiles.com/packages/lf20_asa4mlae.json"),
        ]);

        const [budgetData, needData, authorityData, timelineData] = await Promise.all([
          budgetRes.json(),
          needRes.json(),
          authorityRes.json(),
          timelineRes.json(),
        ]);

        setAnimations({
          Budget: budgetData,
          Need: needData,
          Authority: authorityData,
          TimeLine: timelineData,
        });
      } catch (error) {
        console.error("Error loading Lottie animations:", error);
      }
    };

    fetchAnimations();
  }, []);

  return (
    <div className="h-full bg-w-2 pt-16 pb-20 px-72 flex flex-col md:flex-row justify-between items-center gap-44">
      {/* Left Section */}
      <div className="md:w-1/3 text-left">
        <h6 className="text-gray-500 uppercase tracking-[3.5px] text-sm">
          Experience
        </h6>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          BANTTECH at a <br /> <span className="text-secondary">Glance</span>
        </h1>
        <p className="text-gray-600 mt-6 leading-relaxed text-lg">
          Embed Team Banttech to leverage the power of technology and innovation
          for a brighter outcome. We listen, optimize, and collaboratively work
          together to make things easy & faster than you’d believe. Yes, it’s in
          the Name.
        </p>
      </div>

      {/* Right Section - Flip Cards */}
      <div className="w-2/3 flex">
        <div>
          <FlipCard
            frontContent={{
              title: "Budget",
              text: "Digital Solutions that suit your pocket. We understand how COVID-19 has hit businesses' cash flow, and therefore we are committed to providing affordable business solutions for growing startups.",
              icon: animations.Budget && (
                <Lottie loop autoplay animationData={animations.Budget} className="w-40 p-8" />
              ),
            }}
            backContent={{
              title: "More Info",
              text: "Our budget-friendly plans are tailored to help startups grow efficiently.",
            }}
          />

          <FlipCard
            frontContent={{
              title: "Need",
              text: "Customization is always challenging - and we love it. We work specifically based on the client's needs & deliver something that fulfills its purpose. After all, 'Need is the Mother of Creativity.'",
              icon: animations.Need && (
                <Lottie loop autoplay animationData={animations.Need} className="w-40 p-8" />
              ),
            }}
            backContent={{
              title: "More Info",
              text: "Tailored solutions crafted for your unique requirements.",
            }}
          />
        </div>

        <div>
          <FlipCard
            frontContent={{
              title: "Authority",
              text: "You need a skilled team that delivers products that yield results. We have 80% of repeat customers which means we added exceptional value to their products when we developed and delivered the first time.",
              icon: animations.Authority && (
                <Lottie loop autoplay animationData={animations.Authority} className="w-40 p-8" />
              ),
            }}
            backContent={{
              title: "More Info",
              text: "Our expertise ensures your project meets the highest standards.",
            }}
          />
          <FlipCard
            frontContent={{
              title: "Timeline",
              text: "Project Completed on time = Successful Project. We work hard to maintain the deadlines. Our team works with different adjustments to avoid unexpected delays.",
              icon: animations.TimeLine && (
                <Lottie loop autoplay animationData={animations.TimeLine} className="w-40 p-8" />
              ),
            }}
            backContent={{
              title: "More Info",
              text: "We prioritize on-time delivery for successful outcomes.",
            }}
          />
        </div>
      </div>
    </div>
  );
};
