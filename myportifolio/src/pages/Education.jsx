
const Education = () => {
    const Parcours = [{school:'EPKMA',year:2022,diplome:'Baccalaureat'},
        {school: 'Polytechnic School of Dakar(ESP)',year:"2022-2024",diplome:'Diplome Supérieur de Technologies en Informatique'},
        {school:'Polytechnic School of Dakar(ESP)',year:"2024-2025",diplome:'Licence en Génie Logiciel & Systemes d\'Information'},
        {school:'Polytechnic School of Dakar(ESP)',year:"2025-2026",diplome: 'Master 1 en Génie Logiciel et Systemes d\'Information'}
    ]

    return(
        <> 
        <main className="mt-35" id="edu">
        <div className='flex items-center text-center justify-center gap-3 max-sm:text-center'>
        <h1 className="text-3xl  text-blue-100">Education</h1>
        
        </div>
        <div className="grid grid-cols-3 gap-4"> 
        {Parcours.map(parcours => (
            <div className="bg-amber-300 flex w-100 flex-col  text-center  mt-10 p-5 rounded-4xl relative">
                <h3 className='p-5'>{parcours.diplome}</h3>
                <h3 className='absolute flex flex-row items-end bottom-3  m-0'>School: {parcours.school} </h3>
                <h4 className="absolute flex flex-col items-end justify-start bottom-0 right-5">Year: {parcours.year} </h4>

            </div>
        ))}
        </div>
        </main>
        </>
    )
}
export default Education