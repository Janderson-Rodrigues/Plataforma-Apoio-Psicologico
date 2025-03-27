import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImagemLogin from '../assets/Consulta_online.png';
import FormaOrganica from '../assets/formaOrganica.png';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: '' // 'profissional' ou 'paciente'
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (!formData.userType) {
      newErrors.userType = 'Selecione o tipo de usuário';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulação de autenticação bem-sucedida
      // Na prática, você faria uma chamada à API aqui
      if (formData.userType === 'profissional') {
        navigate('/Perfil-Psicologo');
      } else {
        navigate('/meu-perfil');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Coluna da Imagem (esquerda - visível apenas em desktop) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 bg-white relative overflow-hidden">
        {/* Forma orgânica de fundo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={FormaOrganica} 
            alt="Forma orgânica decorativa"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Container da imagem principal */}
        <div className="relative z-10 w-full max-w-lg">
          <div className="relative">
            <img 
              src={ImagemLogin} 
              alt="Ilustração de apoio psicológico"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Coluna do Formulário (direita) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-12 px-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Senha:
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                </div>
              </div>

              {/* Seleção de tipo de usuário */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Você é:
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({...formData, userType: 'profissional'});
                      if (errors.userType) setErrors({...errors, userType: null});
                    }}
                    className={`flex-1 py-2 px-4 border rounded-md ${formData.userType === 'profissional' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'border-gray-300'}`}
                  >
                    Profissional
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({...formData, userType: 'paciente'});
                      if (errors.userType) setErrors({...errors, userType: null});
                    }}
                    className={`flex-1 py-2 px-4 border rounded-md ${formData.userType === 'paciente' ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'border-gray-300'}`}
                  >
                    Paciente
                  </button>
                </div>
                {errors.userType && <p className="mt-1 text-sm text-red-500">{errors.userType}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Fazer Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;