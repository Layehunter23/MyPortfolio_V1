const Skills = () => {
    return(
        <>
        <div id="skills"className="flex flex-col justify-center items-center  mt-10 mb-20">
        <h1 className="text-3xl text-blue-100 text-center">Skills</h1><br></br>
        <h3 className="text-2xl text-blue-100">- Languages</h3><br></br>
        <div className="grid grid-cols-6 gap-2 sm:justify-items-center sm:mx-10 max-sm:mx-10">
        <img className ="h-35 rounded-3xl max-sm:rounded-3xl" src="/javascript.svg" alt="JavaScript" />
        <img className ="h-35" src="/python.svg" alt="Python" />
        <img className="h-35 rounded-3xl" src="/java.svg" alt="Java" />
        <img className="h-35" src="php.svg" alt="PHP" />
        <img className="h-35" src="C.svg" alt="C" />
        <img className="h-35" src="html.svg" alt="HTML" />
        <img className="h-35 max-sm:h-15" src="css.svg" alt="CSS" />
        </div><br></br>
        <h3 className="text-2xl text-blue-100">- Frameworks</h3><br></br>
        <div className="grid grid-cols-5 gap-2 sm:mx-10 max-sm:mx-10 max-sm:object-contain">
            <img className="h-35 " src="/django.svg" alt="Django" />
            <img className="h-35" src="/react.svg" alt="ReactJS"/> 
            <img className="h-35" src="nodejs.svg" alt="NodeJS" />
            <img className="h-35" src="/tailwindcss.svg" alt="TailwindCSS" />
            <img className="h-35" src="laravel.svg" alt="Laravel" />
         </div>

         <h3 className="text-2xl text-blue-100 mt-5">- Other Tools</h3><br></br>
         <div className="grid grid-cols-5 gap-2 md:mx-10 max-sm:ml-10 max-sm:mb-0.2">
            <img className="block h-35" src="git.svg" alt="Git" />
            <img className="h-35 bg-white rounded-2xl  max-sm:object-contain max-sm:h-20" src="/github.svg" alt="Github"/> 
            <img className="h-35 bg-white rounded-2xl max-sm:object-contain max-sm:h-20" src="/mysql.svg" alt="MySQL"/> 
            <img className="h-35 max-sm:h-20" src="/mongodb.svg" alt="MongoDB"/> 
        </div>
        </div>
        </>
    )
}
export default Skills