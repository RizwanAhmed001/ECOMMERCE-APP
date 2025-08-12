import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

function About() {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            rerum deserunt porro ipsum repellendus sequi architecto qui? Ullam
            ut velit cumque deserunt sint. Unde similique, delectus possimus
            reprehenderit voluptatibus dolor.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            deserunt sed, sint, quae quaerat soluta illum explicabo adipisci
            cupiditate laboriosam molestias commodi iusto nisi libero minima
            consequatur tempora minus saepe.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam minima animi impedit ab expedita sunt accusamus at quod obcaecati hic dolore laudantium quis alias fuga eaque est tempora, explicabo quasi!</p>
        </div>
      </div>
        <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet consequatur necessitatibus, laboriosam.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet consequatur necessitatibus, laboriosam.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet consequatur necessitatibus, laboriosam .</p>
          </div>
        </div>
        <NewsLetterBox />
    </div>
  );
}
export default About;
