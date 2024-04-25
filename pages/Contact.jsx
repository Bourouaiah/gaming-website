import HeadTitle from "@/components/HeadTitle";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <section id="contact" className="my-[100px] px-[10px] sm:px-[100px]">
      <HeadTitle>Contact Us</HeadTitle>

      <div className="flex justify-between flex-wrap lg:flex-nowrap gap-[80px]">
        <div className="lg:w-[35%] w-full contact-info-box p-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-center items-center rounded-lg">
          <div className="flex items-start gap-[10px] ml-[10px]">
            <FaMapMarkerAlt className="translate-y-[3px]" />
            <div>
              <h3>Office Location</h3>
              <p>Larbaa, Blida, Algeria</p>
            </div>
          </div>
          <div className="flex items-start gap-[10px] ml-[10px]">
            <FaPhoneAlt className="translate-y-[3px]" />
            <div>
              <h3>Contact No:</h3>
              <p>+213 553 32 91 64</p>
            </div>
          </div>

          <div className="flex items-start gap-[10px] ml-[10px]">
            <HiOutlineMail className="translate-y-[3px]" />
            <div>
              <h3>Email</h3>
              <p>abdoubrh26@gmail.com</p>
            </div>
          </div>
        </div>

        <form
          className="lg:w-[75%] w-full grid grid-cols-1 sm:grid-cols-2 gap-[30px]"
          action=""
        >
          <div className="flex flex-col gap-[10px]">
            <label>First Name*</label>
            <input
              className="bg-transparent border-[#173352] border-[1px] py-1 px-3 rounded-sm outline-none placeholder:text-slate-600"
              type="text"
              name="first-name"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label>Second Name*</label>
            <input
              className="bg-transparent border-[#173352] border-[1px] py-1 px-3 rounded-sm outline-none placeholder:text-slate-600"
              type="text"
              name="second-name"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label>Email*</label>
            <input
              className="bg-transparent border-[#173352] border-[1px] py-1 px-3 rounded-sm outline-none placeholder:text-slate-600"
              type="email"
              name="mail"
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label>How did you hear about us ?</label>
            <input
              className="bg-transparent border-[#173352] border-[1px] py-1 px-3 rounded-sm outline-none placeholder:text-slate-600"
              type="text"
              name="how-you-hear"
              placeholder="Social Media"
            />
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-[10px] sm:w-[210%]">
              <label>Message</label>
              <textarea
                className="bg-transparent border-[#173352] border-[1px] py-1 px-3 rounded-sm outline-none w-full resize-none placeholder:text-slate-600"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write a message ..."
              ></textarea>
            </div>
            <button className="bg-[#0A1F35] mt-[20px] py-1 p-3 rounded-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
