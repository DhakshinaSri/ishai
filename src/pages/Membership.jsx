import MembershipForm from "@components/membership-component/MembershipForm";
import MembershipIntro from "@components/membership-component/MembershipIntro";
import MembershipSteps from "@components/membership-component/MembershipSteps";
import MembershipDetails from "@components/membership-component/MembershipDetails";
import Footer from "@components/home-components/Footer";

export default function Membership() {
  return (
    <div className="pt-24">
      <MembershipIntro />
      <MembershipDetails />
      <div className="flex flex-col md:flex-row justify-center items-start gap-20 px-6 py-10">
        <MembershipSteps />
        <MembershipForm />
      </div>
      <Footer />
    </div>
  );
}
