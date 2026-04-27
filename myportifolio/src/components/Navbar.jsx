import { Link } from 'react-router-dom' 

const NavBar = () => {

  function Menu(){
    document.getElementById("MenuHamburger").classList.toggle("hidden")

  }
  return (
    <>
    
    <nav className="flex flex-row justify-end bg-amber-400 rounded-2xl gap-5 w-fit p-2 mt-5 ml-auto mr-10 max-sm:hidden">
      
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#profile"><h3>Home</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#about"><h3>About me</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#edu"><h3 className='hover:text-red-900'>Education</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#exp"><h3>Experiences</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#skills"><h3>Skills</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#contact"><h3>Contact</h3></a></div>
    </nav>
    <button className='text-4xl relative left-70 top-3 md:hidden lg:hidden' onClick={Menu}  >
     ☰
   </button>
    <div id="MenuHamburger"  className='bg-amber-300 text-center hidden w-25 absolute right-12 top-2 mt-10 rounded-2xl md:hidden lg:hidden'>
        <a href="#profile"><button >Home</button><hr></hr></a>
        <a href="#about"><button>A propos</button><hr></hr></a>
        <a href="#edu"><button>Formation</button><hr></hr></a>  
        <a href="#exp"><button>Experiences</button><hr></hr></a>
        <a href="#skills"><button>Competences</button><hr></hr></a>
        <a href="#contact"><button>Contact</button></a>
    </div>
    
    
    
    
    </>
  )
}

export default NavBar