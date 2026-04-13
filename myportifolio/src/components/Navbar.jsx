import { Link } from 'react-router-dom' 

const NavBar = () => {

  
  return (
    <>
    <img alt="MyLogo" className="text-white"></img>
    <nav className="flex flex-row justify-end bg-amber-400 rounded-2xl gap-5 w-fit p-2 mt-5 ml-auto mr-10 max-sm:hidden">
      
      <a href="#profile"><h3 className='hover:text-red-900'>Home</h3></a>
      <a href="">
        <h3>About me</h3>
      </a>
      <div className='hover:bg-white rounded-2xl px-3'><a href="#edu"><h3 className='hover:text-red-900'>Education</h3></a></div>
      <a href="#exp"><h3 className='hover:text-red-900'>Experiences</h3></a>
      <a href="#skills"><h3 className='hover:text-red-900'>Skills</h3></a>
      <a href="#contact"><h3 className='hover:text-red-900'>Contact</h3></a>
    </nav>
    
    
    
    
    </>
  )
}

export default NavBar