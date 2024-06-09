

const Contact = () => {
  return (
    <section className="pb-16" id="contact">
        <div className="container">
            <h2 className="text-headingColor font-[700] text-[2.3rem] mb-2">
                Get In Touch
            </h2>

            <div className="md:flex items-center justify-between mb-4">
                <h2 className="text-[1.4rem] font-mono ">
                    <span className=" text-violet-700 font-bold text-[1.7rem]">Chanuka Sandaruwan Warnasooriya </span> <span className="text-[15px] flex lg:flex">
                    Full Stack Developer | Blogger | Web designer
                    </span> 
                </h2>
                <h2 className="text-[1.2rem]  font-bold text-violet-700  ">
                    Connect With Me +
                </h2>
            </div>
        
            <div className="md:flex justify-between items-center">

                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10263.569052278968!2d80.19863451653296!3d7.349554470514472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3221594acfa3b%3A0x60339b081355fa67!2sMaharachchimulla!5e1!3m2!1sen!2slk!4v1717915677991!5m2!1sen!2slk" 
                    className="w-full h-full border-0" allowFullScreen="" 
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        
                    </iframe>
                </div>

                <div className="w-full md:mt-0 mt-8 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                
                    <form className="w-full">
                        
                        <div className="mb-5">
                            <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter your Name"
                            className="w-full p-3 focus:outline-none rounded-[8px]"
                            
                         />
                        </div>
                        <div className="mb-5">
                            <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter your Email"
                            className="w-full p-3 focus:outline-none rounded-[8px]"
                            
                         />
                        </div>
                    
                        <div className="mb-5">
                            <input 
                            type="text" 
                            name="name" 
                            placeholder="Subject"
                            className="w-full p-3 focus:outline-none rounded-[8px]"
                            
                         />
                        </div> <div className="mb-5">
                            <textarea
                            type="text" 
                            rows={3}
                            placeholder="Write Your Comments"
                            className="w-full p-3 focus:outline-none rounded-[8px]"
                            
                         />
                        </div>

                        <button className="w-full p-3 focus:outline-none rounded-[8px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Contact
