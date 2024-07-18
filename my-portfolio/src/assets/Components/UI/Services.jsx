import frontendImg from '../../data/front-end.png';
import backendImg from '../../data/backend.png';
import UIImg from '../../data/design.png';
import appImg from '../../data/apps.png';

const Services = () => {
  return (
    <section id='services'>
    <div className="container lg:pt-5">

        <div 
        data-aos="fade-down"
        data-aos-duration ="1500"
        data-aos-delay='300'
        className="text-center">
            <h2 className="text-headingColor font-[600] text-[2.4rem] mb-5">
                Who Am I...(´•‿•`)
            </h2>

            <p className="lg:max-w-full lg:mx-auto text-headingColor font-[400] text-[18px] leading-8 text-justify">
                I am Undergraduate student of Sabaragamuwa University of Sri Lanka. Bsc(Hons) in Computing and Information Systems. In 2022 I graduated from IMBS Green Campus as the diplomer of Human Resourece Management (Dip. in HRM - 2022). So, Now I am begginer Full Stack Developer and currently I am following AI and Software Enginnering path as well with forwarding trends of IT sector. <br /><br />
                I am Interested in learning new trend of technologies and cybersecurity as well. Currently I am following Backend Technologies like MongoDB and Node Js as well. Now I work with some individual and group project as  well as posible with good team working expereinces. I am Knowlege seeker of any related field of industry and social wise. I have good team work and time management qualities when used as the team. Still I am improvinf my skill level of Software Field and my Work experiences.
                <br /><br />
                <p
                data-aos="fade-right"
                data-aos-duration ="2200" >
                Find me more over on <a href="https://www.linkedin.com/in/sandaruwan-warnasooriya-8b802621b/"><span className="text-[18px] font-semibold text-blue-800">LinkedIn</span></a>
                </p>

            </p>
        </div>

        <div className='flex flex-col justify-center sm:py-12'>
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">

                {/* vertical line */}

                    <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                    {/* left card */}

                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos="fade-right"
                                    data-aos-duration="1200"
                                    className="bg-white p-4 rounded shadow-md group hover:bg-primarycolor cursor-pointer ease-in duration-150">
                                        <h3 className="text-primarycolor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">Frontend Development</h3>

                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Currently I am using React JS | Next Js | Tailwind CSS | HTML | CSS for my Frontend Projects as well. <br /><br />Indiviual | Group 12+
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primarycolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={frontendImg} alt="frontend image" />
                                </figure>
                            </div>

                        </div>
                    </div>

                    {/* rigth card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div 
                                    data-aos="fade-left"
                                    data-aos-duration="1200"
                                    className="bg-white p-4 rounded shadow-md group hover:bg-primarycolor cursor-pointer ease-in duration-150">
                                        <h3 className="text-primarycolor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">Backend Development</h3>

                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Currently I am using Node Js | MongoDB | Express JS as technologies for Backend Projects to skill popup. <br /><br />Indiviual | Group 4+
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primarycolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={backendImg} alt="frontend image" />
                                </figure>
                            </div>

                        </div>
                    </div>

                       {/* left card -2*/}

                       <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-start w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pr-8">
                                    <div 
                                    data-aos="fade-right"
                                    data-aos-duration="1200"
                                    className="bg-white p-4 rounded shadow-md group hover:bg-primarycolor cursor-pointer ease-in duration-150">
                                        <h3 className="text-primarycolor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">UI / UX Design</h3>

                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                             Currently I am working with UI/UX design with Figma as the main tool for design variety of UI designs as well.<br /><br />Indiviual 8+
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primarycolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={UIImg} alt="frontend image" />
                                </figure>
                            </div>

                        </div>
                    </div>

                    {/* rigth card */}
                    <div className="mt-6 sm:mt-0 sm:mb-12">
                        <div className="flex items-center flex-col sm:flex-row">

                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                    <div 
                                    data-aos="fade-left"
                                    data-aos-duration="1200"
                                    className="bg-white p-4 rounded shadow-md group hover:bg-primarycolor cursor-pointer ease-in duration-150">
                                        <h3 className="text-primarycolor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">Projects</h3>

                                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Currently I was completed 6+ Group and Self projects for my learning and programming skill popup. <br /><br />Indiviual | Group 6+
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-full bg-primarycolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                <figure>
                                    <img src={appImg} alt="frontend image" />
                                </figure>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
      
    </section>
  )
}

export default Services
