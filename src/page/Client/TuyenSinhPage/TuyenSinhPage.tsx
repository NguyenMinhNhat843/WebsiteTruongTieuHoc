import AdmissionDetails from "./AdmissionDetails";
import AdmissionForm from "./AdmissionForm";
import AdmissionSteps from "./AdmissionSteps";
import FAQ from "./FAQ";
import SchoolHero from "./HeaderSection";
import ParentFeedback from "./ParentFeedback";
import SchoolFacilities from "./SchoolFacilities";
import TuitionFees from "./TuitionFees";
import WhyChooseUs from "./WhyChooseUs";

const TuyenSinhPage = () => {
  return (
    <div>
      <SchoolHero />
      <WhyChooseUs />
      <SchoolFacilities />
      <AdmissionSteps />
      <AdmissionDetails />
      <TuitionFees />
      <ParentFeedback />
      <FAQ />
      <AdmissionForm />
    </div>
  );
};

export default TuyenSinhPage;
