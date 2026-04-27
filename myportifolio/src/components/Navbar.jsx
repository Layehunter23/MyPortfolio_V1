import { Link } from 'react-router-dom' 

const NavBar = () => {

  
  return (
    <>
    <img alt="MyLogo" className="text-white"></img>
    <nav className="flex flex-row justify-end bg-amber-400 rounded-2xl gap-5 w-fit p-2 mt-5 ml-auto mr-10 max-sm:hidden">
      
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#profile"><h3>Home</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#about"><h3>About me</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#edu"><h3 className='hover:text-red-900'>Education</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#exp"><h3>Experiences</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#skills"><h3>Skills</h3></a></div>
      <div className='hover:bg-white rounded-2xl px-3 py-1.5'><a href="#contact"><h3>Contact</h3></a></div>
    </nav>
    

    
    
    
    
    </>
  )
}

export default NavBar