const Skills = () => {
    return(
        <>
        <div id="skills"className="flex flex-col justify-center items-center  mt-10">
        <h1 className="text-3xl text-blue-100 text-center">Skills</h1><br></br>
        <h3 className="text-2xl text-blue-100">- Languages</h3><br></br>
        <div className="flex flex-rows-4">
        <img className ="h-35 rounded-2xl"src="/JS.jpg" alt="JavaScript" />
        <img src="" alt="Python" />
        <img className="h-35"src="/java.png" alt="Java" />
        <img src="" alt="PHP" />
        <img src="" alt="C" />
        <img src="" alt="HTML" />
        <img src="" alt="CSS" />
        </div><br></br>
        <h3 className="text-2xl text-blue-100">- Frameworks</h3><br></br>
        <div className="flex flex-rows-2">
            <img src="" alt="Django" />
            <img src="" alt="ReactJS"/> 
            <img src="" alt="NodeJS" />
            <img src="" alt="TailwindCSS" />
            <img src="" alt="Laravel" />


        </div>
        </div>
        </>
    )
}
export default Skills