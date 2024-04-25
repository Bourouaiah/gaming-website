import Image from "next/image";

function Join() {
  return (
    <section id="join" className="my-[100px] mx-[10px] sm:mx-[50px] join-bg rounded-xl overflow-hidden">
      <div className="join-gradient flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center p-[40px] lg:gap-0 gap-[20px]">
        <div className="flex items-center flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-[20px] w-[70%]">
          <span className="min-w-[90px] min-h-[90px] rounded-full logo-bg flex items-center justify-center">
            <Image loading='lazy' src="/logo.png" width={55} height={55} alt="logo" />
          </span>
          <p className="text-center lg:text-left">
            Level Up Your Gaming Experience: Join Our Exclusive YouTube Channel
            Membership Today!
          </p>
        </div>
        <button className="w-[30%] join-button rounded-md">Join Tournament</button>
      </div>
    </section>
  );
}

export default Join;
