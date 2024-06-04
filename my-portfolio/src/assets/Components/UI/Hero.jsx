import CountUp from 'react-countup';
import hero from '../../../assets/data/hero-1.jpg';

const Hero = () => {
  return (
    <section className="pt-0" id='about'>
      <div className="container pt-14">
        <div className="md:flex md:flex-row sm:flex-col items-center justify-between">
            {/* left side content of the section */}

            <div className="w-full md:basis-1/2 ">
                <h5
                data-aos="fade-right"
                data-aos-duration ="1500"
                className="text-headingColor font-[600] text-[16px]"
                >
                    Hello, Everyone...
                </h5>
                <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                >I'm Chanuka Sandaruwanヅ <br />Full Stack Developer
                </h1>

                <div
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex items-center gap-6 mt-7"
                >

                    <a href="#contact">
                    <button className="px-4 py-2 rounded-[8px] bg-primarycolor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300">
                        <i class="ri-mail-send-line"></i>Contact Me
                    </button></a>

                    <a href="#portfolio" className="text-smallTextColor font-[600] text-[16px] border-b border-smallTextColor border-solid">See Portfolio</a>
                
                </div>

                <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex text-headingColor gap-3 mt-12 text-[16px] font-[500] leading-7 sm:pl-14 sm:pr-10 text-justify"
                >

                <span>
                    <i class="ri-message-3-line text-3xl"></i>
                </span>

                I am a motivated individual with a strong passion for continuous learning and growth. I possess good organizational and communication skills, understandable with thrive under pressure, and enjoy taking an leadership roles. My enthusiasm and ability to work independent make me a valuable team member. I am dedicated to pursuing opportunities in the IT industry to further develop my skills and knowledge as improve my carrier path also. I always ready to find and move with new trends.
                </p>

                <div className="flex items-center gap-9 mt-14">
                    <span className='text-smallTextColor font-[600] text-[15px]'>
                        Follow Me:
                    </span>

                    <span>
                        <a href="#github" className="text-smallTextColor font-[600] text-[18px]">
                            <i class="ri-github-line text-xl"></i>
                        </a>
                    </span>

                    <span>
                        <a href="#linkedin" className="text-smallTextColor font-[600] text-[18px]">
                            <i class="ri-linkedin-fill text-xl"></i>
                        </a>
                    </span>

                    <span>
                        <a href="#mysite" className="text-smallTextColor font-[600] text-[18px]">
                            <i class="ri-link text-xl"></i>
                        </a>
                    </span>

                    <span>
                        <a href="#whatsapp" className="text-smallTextColor font-[600] text-[18px]">
                             <i class="ri-whatsapp-line text-xl"></i>
                        </a>
                    </span>

                    <span>
                        <a href="#instagram" className="text-smallTextColor font-[600] text-[18px]">
                            <i class="ri-instagram-line text-xl"></i>
                        </a>
                    </span>
                </div>
            </div>

            {/* hero image */}

            <div className="basis-1/3 sm:mt-0 mt-10 ">
                <figure className="items-center justify-center flex">
                    <img src={hero} 
                    data-aos="fade-left"
                    data-aos-duration="1800"
                    data-aos-delay="300"
                    
                    alt="hero image" 
                    className="rounded-full md:w-[500px] justify-center md:h-[370px] w-[400px] h-[400px]  "/>
                </figure>
            </div>

            {/* right side section create */}
            <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                <div className="mb-10">
                    <h2 className="text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={3} duration={2} suffix="rd"/>
                    </h2>
                    <h4>
                        Year Undergarduate 
                    </h4>
                </div>

                <div className="mb-10">
                    <h2 className="text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={100} duration={2} suffix="%"/>
                    </h2>
                    <h4>
                        Motivated And Learning
                    </h4>
                </div>

                <div className="mb-10">
                    <h2 className="text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={100} duration={2} suffix="%"/>
                    </h2>
                    <h4>
                        Team Collaboration
                    </h4>
                </div>

                <div className="mb-10">
                    <h2 className="text-headingColor font-[700] text-[32px]">
                        <CountUp start={0} end={5} duration={2} suffix="+"/>
                    </h2>
                    <h4>
                        Individual Projects
                    </h4>
                </div>
            </div>




        </div>
      </div>
    </section>
  )
}

export default Hero
