const Experience = () => {

    const Jobs = [{ent:'SONATEL',year:"Mai 2024-Juin 2024",Poste:'Shell Developer'},
        {ent:'SONATEL',year:"Mai 2025-Sept 2025",Poste:'Pilote SAV-Full Stack Dev'},
       
    ]

    return(
        <>
        <div id="exp" className="mt-10">
            <div className='flex items-center text-center justify-center gap-3'>
                <h1 className="text-3xl  text-blue-100">Experiences</h1>
                
            </div>
            <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:justify-items-center md:justify-items-center md:grid-cols-2 lg:grid-cols-3 "> 
                {Jobs.map(job => (
                <div className="bg-amber-300 flex w-100 flex-col  text-center  mt-10 p-5 rounded-4xl max-sm:w-80 max-lg:w-80 md:mx-5">
                    <h3>{job.Poste}</h3>
                    <h3 className='flex flex-col items-start justify-end'>Ent: {job.ent}</h3>
                    <h4 className="flex flex-col items-end ">{job.year}</h4>
                </div>
             ))}
           </div>
        </div>
        
        </>
    )
}

export default Experience