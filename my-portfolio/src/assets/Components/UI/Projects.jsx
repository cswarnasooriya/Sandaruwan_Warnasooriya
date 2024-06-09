import { useEffect, useState } from 'react';
import data from '../../data/portfolioData';
import Model from './Model';
const Projects = () => {

    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all'); //default value
    const [showModel, setShowModel] = useState(false);
    const [activeId, setActiveId] = useState(null);


    const showModelHandler = id =>{
        setShowModel(true)
        setActiveId(id)
    }


    const loadMoreHandler = () =>{
        setNextItems(prev => prev + 3);
    };

   useEffect(() => {

    if(selectTab === 'all'){
        setPortfolios(data);
    }

    if(selectTab === 'frontend'){
        const filteredData = data.filter(item => item.category === 'Frontend');
        setPortfolios(filteredData);

    }

    if(selectTab === 'backend'){
        const filteredData = data.filter(item => item.category === 'Backend');
        setPortfolios(filteredData);

    }

   }, [selectTab]);


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

                    <button 
                    onClick={()=> setSelectTab('all')} 
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[10px] font-semibold hover:bg-indigo-200">
                        All
                    </button>

                    <button 
                    onClick={()=> setSelectTab('frontend')}
                    className="text-smallTextColor border border-solid border-smallTextColor font-semibold py-2 px-4 rounded-[10px] hover:bg-indigo-100">
                        Frontend
                    </button>

                    <button 
                    onClick={()=> setSelectTab('backend')}
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[10px] font-semibold hover:bg-indigo-50">
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
                                    <button 
                                    onClick={() =>showModelHandler(portfolios.id)}
                                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[10px] font-[500] ease-in duration-200">See Project</button>
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

        {showModel && <Model setShowModel = {setShowModel} activeId={activeId}/>}
      
    </section>
  )
}

export default Projects
