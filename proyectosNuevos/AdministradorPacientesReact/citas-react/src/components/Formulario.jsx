


 import {useState, useEffect} from 'react'
import Error from './Error'


const Formulario = ({pacientes,paciente,  setPacientes,setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (paciente && Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre || ''); // Verificamos si es undefined y establecemos un valor predeterminado
      setPropietario(paciente.propietario || '');
      setEmail(paciente.email || '');
      setFecha(paciente.fecha || '');
      setSintomas(paciente.sintomas || '');
    }
  }, [paciente])
  

  

  const generarId = () => { //generamos un id sin sobrecargar con librerias
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);
      
      return random + fecha;
  }
  
          const handleSubmit = (e) =>{ //con esto evitamos que se envie el form sin validar
            e.preventDefault();

                            //validacion del formulario

                            if([nombre, propietario, email, fecha, sintomas].includes('')){
                              console.log('Hay al menos un campo vacio');
                              setError(true); //activamos el div que muestra que algo no esta completo
                              return;
                            }else{

                              setError(false); //si esta todo completo devuelve el false para que quite el div de alerta

                              //objeto del paciente
                              const objetoPaciente = { 
                                nombre,
                                propietario,
                                email,
                                fecha,
                                sintomas
                               
                              }

                            
                              
                              if(paciente.id){
                                  //editanod registro
                                  objetoPaciente.id = paciente.id;
                                  const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
                                  setPacientes(pacientesActualizados)
                                  setPaciente({})
                              }else{
                                  //nuevo registro
                                  objetoPaciente.id = generarId();
                                  setPacientes([...pacientes, objetoPaciente])

                              }

                            }
                            


                            
                          

                            //Reiniciar el form para que quede vacio, luego podemos simplificar con redux
                            setNombre('')
                            setPropietario('')
                            setEmail('')
                            setFecha('')
                            setSintomas('')
          }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
          Añadir Pacientes y {''}
          <span className='text-indigo-600 font-bold '> Administralos</span>
      </p>

      <form 
          
          onSubmit={handleSubmit} //para validar el form con el codigo de arriba, evitando que se recargue la pagina
          className='bg-white shadow-md rounded-md py-10 px-5 mb-10'>
              
              {error && <Error mensaje='Todos los campos son obligatorios '/>}  

              <div className='mb-5'>
                <label htmlFor='mascota' className='block text-gray-700 font-bold uppercase' >
                  Nombre Mascota 
                  
                  </label>
            <input
                  id='mascota'
                  type='text'
                  placeholder='Nombre Mascota'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div  className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 font-bold uppercase' >
              Nombre Propietario</label>
            <input
                  id='propietario'
                  type='text'
                  placeholder='Nombre Propietario'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                  value={propietario}
                  onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div  className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 font-bold uppercase' >
              E-mail</label>
            <input
                  id='email'
                  type='email'
                  placeholder='E-mail Contacto Propietario'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div  className='mb-5'>

            <label htmlFor='alta' className='block text-gray-700 font-bold uppercase' >
              Alta
            </label>

            <input
                  id='alta'
                  type='date'
              
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md '
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
            />


          </div>


          <div  className='mb-5'>

            <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase' >
              Sintomas
            </label>

            <textarea id='sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' 
            placeholder='Describe los Sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            >

            </textarea>


          <input type='submit'
                  className='bg-indigo-600 w-full p-3  mt-2 text-white uppercase font-bold  hover:bg-indigo-700 cursor-pointer transition-all'
                  value={ paciente && paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                 

          />
            
          </div>
      </form>

    </div>
  )
}

export default Formulario
 