import { useForm } from "react-hook-form";

export default function CadastroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Preencha seus dados e junte-se a nós!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Nome*</label>
          <input {...register("nome", { required: "Nome é obrigatório" })} className="w-full p-2 border rounded-md" />
          {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Telefone*</label>
          <input {...register("telefone", { required: "Telefone é obrigatório" })} className="w-full p-2 border rounded-md" />
          {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">E-mail*</label>
          <input {...register("email", { required: "E-mail é obrigatório", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "E-mail inválido" } })} className="w-full p-2 border rounded-md" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">CRP*</label>
          <input {...register("crp", { required: "CRP é obrigatório" })} className="w-full p-2 border rounded-md" />
          {errors.crp && <p className="text-red-500 text-sm">{errors.crp.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Especialidades</label>
          <select {...register("especialidades")} className="w-full p-2 border rounded-md">
            <option value="">Selecione...</option>
            <option value="ansiedade">Ansiedade</option>
            <option value="depressao">Depressão</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Abordagem</label>
          <select {...register("abordagem")} className="w-full p-2 border rounded-md">
            <option value="">Selecione...</option>
            <option value="psicanalise">Psicanálise</option>
            <option value="humanista">Humanista</option>
          </select>
        </div>
        <div className="col-span-2 flex items-center">
          <input type="checkbox" {...register("termos", { required: "É necessário aceitar os termos" })} className="mr-2" />
          <span>Li os <a href="#" className="bg-primary">termos de uso</a> e a <a href="#" className="bg-primary">política de privacidade</a> e estou de acordo.</span>
        </div>
        {errors.termos && <p className="text-red-500 text-sm col-span-2">{errors.termos.message}</p>}
        <button type="submit" className="col-span-2 bg-gray-600 text-white p-2 rounded-md hover:bg-primary transition">Enviar informações</button>
      </form>
    </div>
  );
}
