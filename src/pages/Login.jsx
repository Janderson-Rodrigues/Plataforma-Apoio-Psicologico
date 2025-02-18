import React, { useState } from 'react';
import Felizes from '../images/felizes.jpg';

const Login = () => {
  const [state, setState] = useState('Cadastrar');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleState = () => {
    setState(state === 'Cadastrar' ? 'Entrar' : 'Cadastrar');
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!email || !password || (state === 'Cadastrar' && !name)) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setError('');

    // Simulação de envio para uma API
    try {
      const response = await fetch('https://sua-api.com/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário.');
      }

      const data = await response.json();
      console.log('Resposta da API:', data);

      // Redirecionar para a página de perfil ou dashboard após o login/cadastro
      // navigate('/perfil');
    } catch (error) {
      console.error('Erro:', error);
      setError('Ocorreu um erro ao enviar o formulário.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container principal */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Formulário à esquerda */}
        <div className="w-full md:w-1/2 p-8">
          <form onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold">
                {state === 'Cadastrar' ? 'Criar Conta' : 'Entrar'}
              </p>
              <p>Por favor, {state === 'Cadastrar' ? 'cadastre-se' : 'faça login'} para agendar uma consulta</p>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              {state === 'Cadastrar' && (
                <div className="w-full">
                  <label className="block text-sm font-medium">Nome Completo</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="border border-zinc-300 rounded w-full p-2 mt-1"
                    type="text"
                    required
                    aria-label="Nome Completo"
                  />
                </div>
              )}

              <div className="w-full">
                <label className="block text-sm font-medium">E-mail</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="border border-zinc-300 rounded w-full p-2 mt-1"
                  type="email"
                  required
                  aria-label="E-mail"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium">Senha</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border border-zinc-300 rounded w-full p-2 mt-1"
                  type="password"
                  required
                  aria-label="Senha"
                />
              </div>

              <button className="bg-primary text-white w-full py-2 rounded-md text-base hover:bg-primary-dark transition">
                {state === 'Cadastrar' ? 'Criar conta' : 'Entrar'}
              </button>

              <button type="button" onClick={toggleState} className="text-primary underline">
                {state === 'Cadastrar' ? 'Já tem uma conta? Faça login aqui' : 'Criar uma nova conta? Clique aqui'}
              </button>
            </div>
          </form>
        </div>

        {/* Imagem à direita */}
        <div className="w-full md:w-1/2 bg-gray-200 hidden md:block">
          <img
            src={Felizes}
            alt="Imagem de fundo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;