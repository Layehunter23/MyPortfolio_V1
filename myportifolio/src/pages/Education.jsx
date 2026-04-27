
const Education = () => {
    const Parcours = [{school:'EPKMA',year:2022,diplome:'Baccalaureat'},
        {school: 'Polytechnic School of Dakar(ESP)',year:"2022-2024",diplome:'Diplome Supérieur de Technologies en Informatique'},
        {school:'Polytechnic School of Dakar(ESP)',year:"2024-2025",diplome:'Licence en Génie Logiciel & Systemes d\'Information'},
        {school:'Polytechnic School of Dakar(ESP)',year:"2025-2026",diplome: 'Master 1 en Génie Logiciel et Systemes d\'Information'}
    ]

    return(
        <> 
        <main className="mt-35 max-sm:mt-40" id="edu">
        <div className='flex items-center text-center justify-center  max-sm:text-center'>
        <h1 className="text-3xl  text-blue-100">Education</h1>
        
        </div>
        <div className="grid grid-cols-3 m-0   max-sm:grid-cols-1 max-sm:justify-items-center md:grid-cols-2"> 
        {Parcours.map(parcours => (
            <div className="bg-amber-300 h-30 flex w-100 flex-col  text-center  mt-10 p-5 rounded-4xl relative  max-sm:w-80 max-sm:h-fit md:w-80 md:h-fit md:mx-5">
                <h3 className='p-0'>{parcours.diplome}</h3>
                <h3 className='flex flex-row items-end bottom-7  m-0 '>School: {parcours.school} </h3>
                <h4 className="flex flex-col items-end justify-start bottom-0 right-5">Year: {parcours.year} </h4>

            </div>
        ))}
        </div>
        </main>
        </>
    )
}
export default Education