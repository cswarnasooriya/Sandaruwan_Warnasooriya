import { useEffect, useRef } from "react"


const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() =>{
    stickyHeaderFunc();

        return window.removeEventListener("scroll", stickyHeaderFunc);

  },[]); 

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      top:location - 80,
      left:0

    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');


  return (
    <header 
    ref={headerRef}
    className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[35px] h-[35px] bg-primarycolor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                CS
              </span>

              <div className="leading-[20px]">
                <h2 className="text-xl text-smallTextColor font-[700]">Chanuka</h2>
                <p className="text-smallTextColor text-[16px] font-[500]">Sandaruwan</p>
              </div>

            </div>

            {/* starting nav items */}
            <div className="menu" ref={menuRef} onClick={toggleMenu}>
              <ul className="flex items-center gap-10">
                <li onClick={handleClick} className="text-smallTextColor font-[600] hover:scale-[1.1]"><a href="#about">About</a></li>
                <li onClick={handleClick} className="text-smallTextColor font-[600] hover:scale-[1.1]"><a href="#services">Services</a></li>
                <li onClick={handleClick} className="text-smallTextColor font-[600] hover:scale-[1.1]"><a href="#projects">Projects</a></li>
                <li onClick={handleClick} className="text-smallTextColor font-[600] hover:scale-[1.1]"><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[700] ease-in duration-300 ">
              <i class="ri-send-plane-line"> Support Me!</i>
              </button>

              <span onClick={toggleMenu} className="text-2xl text-smallTextColor cursor-pointer md:hidden">
                <i class="ri-menu-line"></i>
              </span>
            </div>


        </div>
      </div>
    </header>
  )
}

export default Header
