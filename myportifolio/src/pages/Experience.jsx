const Experience = () => {

    const Jobs = [{ent:'SONATEL',year:"Mai 2024-Juin 2024",Poste:'Shell Developer'},
        {ent:'SONATEL',year:"Mai 2025-Sept 2025",Poste:'Pilote SAV-Full Stack Dev'},
       
    ]

    return(
        <>
        <div className="mt-10"></div>
            <div className='flex items-center text-center justify-center gap-3'>
                <h1 className="text-3xl  text-blue-100">Experiences</h1>
                
            </div>
            <div className="grid grid-cols-3 gap-4"> 
                {Jobs.map(job => (
                <div className="bg-amber-300 flex w-100 flex-col  text-center  mt-10 p-5 rounded-4xl">
                    <h3>{job.Poste}~~{job.ent}</h3>
                    <h4 className="flex flex-col items-end ">{job.year}</h4>
                </div>
             ))}
           </div>
        
        </>
    )
}

export default Experience