import portfolios from "../../data/portfolioData"

const Model = ({activeId, setShowModel}) => {
    const portfolio = portfolios.find(portfolio => portfolio.id === activeId);


  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
        <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[10px] transform -translate-x-1/2 -translate-y-1/2 p-5">
            <div>
                <figure>
                    <img className="rounded-[10px]" src={portfolio.imgUrl} alt="images according to selected id" />
                </figure>
            </div>

            <div>
                <h2 className="text-2xl text-headingColor font-[700] my-5">
                    {portfolio.title}
                </h2>

                <p className="text-[16px] leading-7 text-smallTextColor">
                    {portfolio.description}
                </p>

                <div className="mt-5 flex items-center gap-3 flex-wrap">
                    <h4 className="text-headingColor text-[18px] font-[700]">
                        Technologies:
                    </h4>

                    {
                        portfolio.technologies.map((item, index) => (
                            <span
                            key={index}
                            className="bg-gray-200 py-1 px-2 rounded-[8px] text-[15px] leading-0 cursor-pointer"
                            >
                                {item}
                            </span>

                        ))
                    }
                </div>

                <a href={portfolio.siteUrl}>
                    <button className="bg-primarycolor text-white py-2 px-4 my-8 rounded-[12px] font-[500] hover:bg-headingColor ease-in duration-300">
                        View Project
                    </button>
                </a>
            </div>

            <button onClick={() => setShowModel(false)} className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[4px] leading-0 cursor-pointer ">
                &times; 
            </button>


        </div>
      
    </div>
  )
}

export default Model
