import React, { useState } from 'react';

const DownloadButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadPDF = () => {
    
    toggleModal();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Aquí puedes hacer la solicitud al servidor para validar los datos y descargar el PDF.
    // Por ejemplo, en una implementación real, usarías fetch() o AJAX para enviar los datos al servidor y manejar la respuesta.

    handleCloseModal();
  };

  return (
    <div className='mb-20'>
      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownloadPDF}>
        Descargar PDF
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 !z-20 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Ingrese sus datos para descargar el PDF</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">Nombre</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" value={name} onChange={handleNameChange} required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">Correo</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" value={email} onChange={handleEmailChange} required />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="phone">Teléfono</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full" type="submit">Enviar datos</button>
            </form>
            <button className="block w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;