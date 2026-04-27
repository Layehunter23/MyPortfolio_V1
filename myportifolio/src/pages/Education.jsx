
const Education = () => {
    const Parcours = [{Inst:'EPKMA',Annee:2022,diplome:'Baccalaureat'},
        {Inst: 'Ecole Superieure Polytechnique de Dakar(ESP)',Annee:"2022-2024",diplome:'Diplome Supérieur de Technologies en Informatique'},
        {Inst:'Ecole Superieure Polytechnique de Dakar(ESP)',Annee:"2024-2025",diplome:'Licence en Génie Logiciel & Systemes d\'Information'},
        {Inst:'Ecole Superieure Polytechnique de Dakar(ESP)',Annee:"2025-2026",diplome: 'Master 1 en Génie Logiciel et Systemes d\'Information'}
    ]

    return(
        <> 
        <main className="mt-35 max-sm:mt-40" id="edu">
        <div className='flex items-center text-center justify-center  max-sm:text-center'>
        <h1 className="text-3xl  text-blue-100">Formation</h1>
        
        </div>
        <div className="grid grid-cols-3  max-sm:grid-cols-1 max-sm:justify-items-center md:grid-cols-2 md:justify-items-center lg:grid-cols-3"> 
        {Parcours.map(parcours => (
            <div className="bg-amber-300 flex w-100 flex-col  text-center  mt-10 p-5 rounded-4xl max-sm:w-80 max-lg:w-80 md:mx-5">
                <h3 className='p-0'>{parcours.diplome}</h3>
                <h3 className='flex flex-row items-end bottom-7  m-0 '>Inst: {parcours.Inst} </h3>
                <h4 className="flex flex-col items-end justify-start bottom-0 right-5">Annee: {parcours.Annee} </h4>

            </div>
        ))}
        </div>
        </main>
        </>
    )
}
export default Education