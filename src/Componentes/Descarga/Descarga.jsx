import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DownloadButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phone_number: "",
    email: "",
  });
  console.log(formValues);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDownloadPDF = () => {
    toggleModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const showDownloadAlert = () => {
    toast.success(`Descarga exitosa`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
})
setIsDownloadModalOpen(false)
  }


  const registrarUsuario = async (e) => {
    e.preventDefault()
    const { email, phone_number, name } = formValues;
    const clientDb = {
      name: name,
      email: email,
      phone_number: phone_number,
    }
    try {
      const cliente = await axios.post('http://localhost:3001/clients', clientDb) 
      console.log(cliente);
      if(cliente.data.name){
        setIsModalOpen(false);
        setIsDownloadModalOpen(true);
  }
 
      handleCloseModal()  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mb-20'>
      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownloadPDF}>
        Descargar PDF
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 !z-20 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Ingrese sus datos para descargar el PDF</h2>
            <form onSubmit={(e)=> registrarUsuario(e)} >
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">Nombre</label>
                <input
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    name: e.target.value,
                  })
                }
                 className="w-full p-2 border border-gray-300 rounded" type="text" id="name"  required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">Correo</label>
                <input
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    email: e.target.value,
                  })
                }
                 className="w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="phone">Teléfono</label>
                <input
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    phone_number: e.target.value,
                  })
                }
                 className="w-full p-2 border border-gray-300 rounded" type="tel" id="phone" required />
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full" type="submit">Enviar datos</button>
            </form>
            <button className="block w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
         {isDownloadModalOpen && (
        <div className='fixed inset-0 !z-20 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3'>
            <h2 className='text-2xl font-bold mb-4'>Descargue el PDF</h2>
            <p className='mb-4'>
              Hemos recibido sus datos. Para descargar el PDF, haga clic en el botón a continuación.
            </p>
            <button onClick={showDownloadAlert} className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full'>
             <a href='../../assets/Elviajedeskimo.pdf' download={true}>
             Descargar PDF
              </a> 
            </button>
            <button
              className='block w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded'
              onClick={() => setIsDownloadModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
  }


export default DownloadButton;
