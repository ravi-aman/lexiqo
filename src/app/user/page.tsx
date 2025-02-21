import ImagesSliderDemo from "components/Hero";
import Service from "components/Service";
import CallToAction from "components/CallToAction"
import Features from "components/Features"
import LatestBLog from "components/ui/Blogs";
import Benefits from "components/Benifits";
import ContactForm from "components/ContactForm";
import Testimonials from "components/testimonials";
import Courses from "components/Courses";
import HeroCopy from "components/HeroCopy";
import LandingPropertyResultComponent from "components/landingTopProperty";
import { AnimatedTestimonialsDemo } from "components/teamMember";
import Statistics from "components/Statistics";
export default function Home() {
  return (
    <main className="flex  flex-col justify-center items-center ">

      {/* <ImagesSliderDemo /> */}
      <HeroCopy />
      {/* <Service /> */}
      {/* <RecomendedVideo/> */}
      <Features />
      {/* <Benefits /> */}
      <LandingPropertyResultComponent/>
      {/* <Courses /> */}
      <CallToAction />
      <Statistics/>
      <AnimatedTestimonialsDemo/>
      <ContactForm />
      <LatestBLog />
    </main>
  );
}
