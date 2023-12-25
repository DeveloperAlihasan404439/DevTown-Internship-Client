import ShareTitle from "../Share/ShareTitle";
import welton from '../assets/images/download.png'
import nokia from '../assets/images/nokia.png'
import apple from '../assets/images/iphone.png'
import lg from '../assets/images/Lg.png'
import amazon from '../assets/images/amazon.png'
import oppo from '../assets/images/oppo.png'
const Testimonial = () => {
  return (
    <section className="my-8  ">
        <ShareTitle heading="Company feedback" title="specializes in comprehensive, "/>
      <div className="w-11/12 lg:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg text-white bg-gradient-to-t  from-[#07163d] to-[#3D8AD0]">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Where vision meets innovation, crafting solutions that redefine industry standards with forward-thinking expertise.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-white text-black rounded-b-lg  ">
            <img
              src={welton}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
            />
            <p className="text-xl font-semibold leadi">Welton Innovations Ltd.</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg text-white bg-gradient-to-t  from-[#07163d] to-[#3D8AD0]">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Nokia Technologies Inc. leads the frontier of technological evolution, harnessing innovation to create groundbreaking  create
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-black justify-center p-8 rounded-b-lg  ">
            <img
              src={nokia}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
            />
            <p className="text-xl font-semibold leadi">Nokia Technologies Inc</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg text-white bg-gradient-to-t  from-[#07163d] to-[#3D8AD0]">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              The iPhone, an iconic creation by Apple, epitomizes innovation, elegance, and seamless integration by  then brand Apple, 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center bg-white text-black justify-center p-8 rounded-b-lg  ">
            <img
              src={apple}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
            />
            <p className="text-xl font-semibold leadi">Apple iPhone</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg text-white bg-gradient-to-t  from-[#07163d] to-[#3D8AD0]">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              LG Electronics, a global leader in consumer electronics, consistently pioneers cutting-edge technology,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center  bg-white text-black justify-center p-8 rounded-b-lg  ">
            <img
              src={lg}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
            />
            <p className="text-xl font-semibold leadi">LG Electronics</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg text-white bg-gradient-to-t  from-[#07163d] to-[#3D8AD0]">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Amazon, the world is largest online marketplace and cloud services provider, offers products and services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center  bg-white text-black justify-center p-8 rounded-b-lg  ">
            <img
              src={amazon}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
            />
            <p className="text-xl font-semibold leadi">Amazon</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg text-white bg-gradient-to-t  from-[#07163d] to-[#3D8AD0]">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
            <p className="relative px-6 py-1 text-lg italic text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 "
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              OPPO, a trailblazer in smartphone innovation, combines sleek design with advanced technology, 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 "
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center  bg-white text-black justify-center p-8 rounded-b-lg  ">
            <img
              src={oppo}
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  "
            />
            <p className="text-xl font-semibold leadi">OPPO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
