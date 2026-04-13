const Profile = () => {
    return(
    <>
    <div className="flex flex-row justify-center items-center mt-25 text-center gap-10 max-sm:flex-col max-sm:justify-center max-sm:items-center" id="profile">
    <img className='h-100 w-100 rounded-3xl max-sm:justify-center max-sm:items-center' src='mytof2.jpg' alt="Ma photo"></img>
    <div className="flex flex-col">
    <h2 className="text-blue-100">Hello, I'm  <span className="typing text-amber-400 text-2xl" >Papa Abdoulaye BARRY</span></h2>
    <h2 className="text-blue-100">I'm a Software Developer</h2>
    <div className='flex flex-row gap-4 justify-center'>
     <a className="mt-4 flex flex-col justify-center items-center" href="https://github.com/Layehunter23"><img className="h-15 rounded-full w-fit flex justify-center bg-white" src="/github.svg"></img></a>
    <a className="mt-4 flex flex-col justify-center items-center" href="https://www.instagram.com/laye_hunter23/"><img className="h-15 rounded-full w-fit flex justify-center" src="/instagram.svg" alt="instagram"></img></a>
     </div>
    </div>
    </div>
    
   
   
    </>    
    )
}

export default Profile