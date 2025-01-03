import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-movil-Photoroom.png'
import background from '../../assets/sex-shop-neon-sign-sex-shop-neon-sign-conceptual-d-rendering-illustration-133408232.webp'
const IntroScreen = () => {
  const cities = ['Caracas', 'Margarita', 'Valencia', 'Lecheria'];
  const navigate = useNavigate();
  return (
    <div className="relative h-screen w-screen"> {/* Contenedor principal para ocupar toda la pantalla */}
      <img
        src={background}
        alt="Background"
        className="absolute  h-full w-full object-cover" // Imagen de fondo que cubre todo
      />
      <div className="absolute backdrop-blur-xl inset-0 flex flex-col items-center justify-center"> {/* Centra los botones */}
        <div className="p-8 rounded-lg"> {/* Contenedor con fondo semi-transparente */}
        <img src={logo} alt="Logo" className="w-60 h-60 mx-auto mb-4 object-cover" /> {/* Logo */}
          <h1 className="text-3xl font-bold mb-6 -mt-8 text-gray-300">Selecciona una Ciudad</h1> {/* Título */}
          <div className="flex flex-col space-y-4"> {/* Contenedor de botones verticales */}
            {cities.map((city) => (
              <button
                key={city}
                onClick={()=> navigate('/inicio')}
                className="w-64 py-3  mx-auto bg-pink-600 hover:bg-gray-200 hover:text-pink-500 text-white font-bold rounded-full transition duration-300"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;