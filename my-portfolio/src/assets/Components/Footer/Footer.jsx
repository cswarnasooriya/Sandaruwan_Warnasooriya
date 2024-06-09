

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#12141e] pt-12">

    {/* Footer top */}

      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to connect with me..?
            </h2>

            <a href="#contact">
              <button className="bg-primarycolor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-md">
              <i class="ri-links-line"></i> Connect With Me
              </button>
            </a>

          </div>


          <div className="w-full sm:w-1/2">
            <p className=" text-gray-300 leading-7 mt-4 sm:mt-0 text-justify">
              Hey, I am Chanuka Sandaruwan Warnasooriya, 3rd year undergraduate student of sabaragamuwa university of Sri Lanka. So here I am proud to share my latest and new portfolio website with you, with my developed skill level of Full Stack Development as well. So, If any Feedback with you kindly share those with you. I am proud to about that and glad to hear about that feedbacks aas well. <span>Thank you, Cheers!</span>
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-green-300 font-[600] text-[15px]">
                Follow Me:
              </span>

              <span  className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a 
                href="github"
                className="text-gray-300 font-[500] text-[18px]"
               
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a 
                href="github"
                className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a 
                href="github"
                className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-mail-send-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a 
                href="github"
                className="text-gray-300 font-[500] text-[18px]"
                >
                 <i class="ri-facebook-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a 
                href="github"
                className="text-gray-300 font-[500] text-[18px]"
                >
                 <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a 
                href="github"
                className="text-gray-300 font-[500] text-[18px]"
                >
                 <i class="ri-instagram-line"></i>
                </a>
              </span>
              
            </div>
          </div>
        </div>

        <div >
              <ul className="flex items-center justify-center gap-10 mt-10">
                <li className="text-gray-400 font-[600] hover:scale-[1.1]"><a href="#about">About</a></li>
                <li className="text-gray-400 font-[600] hover:scale-[1.1]"><a href="#services">Services</a></li>
                <li className="text-gray-400 font-[600] hover:scale-[1.1]"><a href="#projects">Projects</a></li>
                <li className="text-gray-400 font-[600] hover:scale-[1.1]"><a href="#contact">Contact</a></li>
              </ul>
            </div>
      </div>

      {/* footer bottom */}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">

            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">

                  <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center ">CS
                  </span>

                  <div className="leading-[20px]">
                    <h2 className="text-gray-200 font-[500] text-[18px]">
                        Chanuka
                    </h2>
                    <p className="text-gray-400 text-[14px] font-[500]">
                      Sandaruwan
                    </p>
                  </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} Developed by Chanuka Sandaruwan Warnasooriya - All right reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer
