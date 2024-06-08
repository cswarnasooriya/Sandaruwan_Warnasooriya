import { useState } from 'react';
import data from '../../data/portfolioData';

const Projects = () => {

    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);

    const loadMoreHandler = () =>{
        setNextItems(prev => prev + 3)
    }

  return (
    <section id='projects'>
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2rem] font-[700]">
                        My Recent Projects
                    </h3>
                </div>


                <div className="flex gap-3">
                    <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        All
                    </button>
                    <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        Frontend
                    </button>
                    <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                        Full Stack
                    </button>
                </div>
            </div>


            <div className="flex items-center gap-4 flex-wrap mt-12">
                {portfolios ?.slice(0, nextItems) ?.map((portfolios, index) => (
                    <>
                        <div 
                        key={index}
                        data-aos="fade-zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                            <figure>
                                <img className="rounded-[16px]" src={portfolios.imgUrl} alt="" />
                            </figure>

                            <div className="w-full h-full bg-primarycolor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[10px] font-[500] ease-in duration-200">See Project</button>
                                </div>
                            </div>
                        </div>
                    </>
                ))}

            </div>

            <div className="text-center mt-12">
                {nextItems < portfolios.length && data.length > 6  && (
                    <button 
                        onClick={loadMoreHandler}
                        className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[10px] font-[500] ease-in duration-200">
                            Load More
                    </button>
                )}
            </div>





        </div>
      
    </section>
  )
}

export default Projects
