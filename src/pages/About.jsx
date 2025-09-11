import TextBlock from "@components/aboutus-components/TextBlock";
import AboutSection from "@components/aboutus-components/AboutSection";
import AboutFeatures from "@components/aboutus-components/AboutFeatures";
import Aboutsubtext from "@components/aboutus-components/Aboutsubtext";
import aboutImage from "@assets/about-us.png";

export default function About() {
  return (
    <div className="pt-24">
      {/* About Section */}
      <AboutSection
        imageSrc={aboutImage}
        title="About Us"
        description={`International Society for Healthcare & AI Innovators (ISHAI) is a registered non-profit organization established under the Trust Acts governed by the Government of Tamil Nadu, dedicated to advancing the fields of Healthcare and Artificial Intelligence (AI). Our primary focus is to serve as a catalyst for innovation, knowledge exchange, and collaboration, enabling the seamless integration of cutting-edge technologies into healthcare solutions that can improve lives and create sustainable societal impact.`}
      />

      {/* Features Row */}
      <AboutFeatures />

      {/* Additional Text Blocks */}
      <TextBlock
        title="Our Story"
        description="In an era where technology is rapidly transforming every facet of human life, healthcare and AI stand out as areas with tremendous potential to revolutionize outcomes. Recognizing this, a group of passionate professionals from diverse backgrounds in healthcare, AI research, academia, and industry came together to form International Society for Healthcare & AI Innovators (ISHAI). Our goal is to bridge the gap between theoretical research and practical applications, fostering a community that nurtures innovation, ethical development, and skills enhancement."
      />

      <TextBlock
        title="Who We Are"
        description="International Society for Healthcare & AI Innovators (ISHAI) is governed and operated by a dedicated team of professionals—academicians, healthcare experts, AI practitioners, entrepreneurs, and industry leaders—who bring a wealth of experience and a shared vision. Our collective expertise allows us to understand both the academic rigor of research and the dynamic requirements of industry, enabling us to act as an effective conduit between these two spheres.
We believe that innovation flourishes in environments where knowledge flows freely, collaboration is encouraged, and emerging talent is nurtured. Our society is built on these principles, serving as a vibrant hub for students, researchers, startups, and companies.
"
      />

      <TextBlock
        title="Our Mission"
        description="Our mission is to empower healthcare and AI innovators by providing a platform that fosters collaboration between academia and industry, disseminates the latest technological knowledge, promotes ethical innovation, and supports the development of practical solutions that address real-world challenges."
      />

      <TextBlock
        title="Our Vision"
        description="We envision a future where healthcare is enhanced by responsible and intelligent technology, where students and professionals alike are equipped with cutting-edge skills, and where innovation drives improved health outcomes and economic growth. International Society for Healthcare & AI Innovators (ISHAI) strives to be a cornerstone in building this future through continuous engagement, education, and collaboration."
      />
    </div>
  );
}
