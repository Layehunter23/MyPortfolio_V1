import { Link } from 'react-router-dom' 

const NavBar = () => {
  return (
    <div className="flex flex-row justify-end bg-amber-400 rounded-2xl gap-5 w-fit p-2 mt-5 ml-auto mr-10">
      <Link to="/"><h3 className='hover:text-red-900'>Profile</h3></Link>
      <Link to="/education"><h3 className='hover:text-red-900'>Education</h3></Link>
      <Link to="/experiences"><h3 className='hover:text-red-900'>Experiences</h3></Link>
      <Link to="/skills"><h3 className='hover:text-red-900'>Skills</h3></Link>
      <Link to="/contact"><h3 className='hover:text-red-900'>Contact</h3></Link>
    </div>
  )
}

export default NavBar