import school from '/education.png'
const Education = () => {
    const Parcours = [{school:'EPKMA',year:2022,diplome:'Baccalaureat'},
        {school:'ESP',year:"2022-2024",diplome:'Diplome Supérieur de Technologies en Informatique'},
        {school:'ESP',year:"2024-2025",diplome:'Licence en Génie Logiciel & Systemes dInformation'},
        {school:'ESP',year:"2025-2026",diplome: 'Master 1 en GLSI'}
    ]

    return(
        <>
        <main className="mt-35">
        <div className='flex items-center text-center justify-center gap-3'>
        <h1 className="text-3xl  text-blue-100">Education</h1>
        <img src={school} alt="SCHOOL" className='h-20'></img>
        </div>
        <div className="grid grid-cols-3 gap-4"> 
        {Parcours.map(parcours => (
            <div className="bg-amber-300 flex w-100 flex-col  text-center  mt-10 p-5 rounded-4xl">
                <h3>{parcours.diplome}~~{parcours.school}</h3>
                <h4 className="flex flex-col items-end ">{parcours.year}</h4>

            </div>
        ))}
        </div>
        </main>
        </>
    )
}
export default Education