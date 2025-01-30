import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Cadastrar');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleState = () => {
    setState(state === 'Cadastrar' ? 'Entrar' : 'Cadastrar');
    setName('');
    setEmail('');
    setPassword('');
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!email || !password || (state === 'Cadastrar' && !name)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    console.log('Formulário enviado:', { name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg bg-white">
        <p className="text-2xl font-semibold">
          {state === 'Cadastrar' ? 'Criar Conta' : 'Entrar'}
        </p>
        <p>Por favor, {state === 'Cadastrar' ? 'cadastre-se' : 'faça login'} para agendar uma consulta</p>

        {state === 'Cadastrar' && (
          <div className="w-full">
            <label className="block text-sm font-medium">Nome Completo</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              required
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
  );
};

export default Login;
