import { useForm } from "react-hook-form";
import PsicologoImg from "../images/psicologo.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

export default function CadastroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
    
      <div className="md:w-1/2 w-full rounded-lg shadow-md overflow-hidden" data-aos="fade-down">
        <img src={PsicologoImg} alt="Psicólogo" className="w-full h-full object-cover" />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center p-8">
        <div className="max-w-lg w-full border rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-center" data-aos="fade-down">Preencha seus dados e junte-se a nós!</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
            <div data-aos="fade-down">
              <label htmlFor="nome" className="block text-sm font-medium">Nome*</label>
              <input id="nome" {...register("nome", { required: "Nome é obrigatório" })} 
                className={`w-full p-2 border rounded-md ${errors.nome ? "border-red-500" : "border-gray-300"}`} />
              {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
            </div>

            <div data-aos="fade-down">
              <label htmlFor="telefone" className="block text-sm font-medium">Telefone*</label>
              <input id="telefone" type="tel" {...register("telefone", { required: "Telefone é obrigatório" })} 
                className={`w-full p-2 border rounded-md ${errors.telefone ? "border-red-500" : "border-gray-300"}`} />
              {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}
            </div>

            <div data-aos="fade-down">
              <label htmlFor="email" className="block text-sm font-medium">E-mail*</label>
              <input id="email" type="email" {...register("email", { 
                required: "E-mail é obrigatório", 
                pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "E-mail inválido" }
              })} 
                className={`w-full p-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div data-aos="fade-down">
              <label htmlFor="crp" className="block text-sm font-medium">CRP*</label>
              <input id="crp" {...register("crp", { required: "CRP é obrigatório" })} 
                className={`w-full p-2 border rounded-md ${errors.crp ? "border-red-500" : "border-gray-300"}`} />
              {errors.crp && <p className="text-red-500 text-sm">{errors.crp.message}</p>}
            </div>

            <div data-aos="fade-down">
              <label htmlFor="especialidades" className="block text-sm font-medium">Especialidades</label>
              <select id="especialidades" {...register("especialidades")} className="w-full p-2 border rounded-md">
                <option value="">Selecione...</option>
                <option value="ansiedade">Ansiedade</option>
                <option value="depressao">Depressão</option>
              </select>
            </div>

            <div data-aos="fade-down">
              <label htmlFor="abordagem" className="block text-sm font-medium">Abordagem</label>
              <select id="abordagem" {...register("abordagem")} className="w-full p-2 border rounded-md">
                <option value="">Selecione...</option>
                <option value="psicanalise">Psicanálise</option>
                <option value="humanista">Humanista</option>
              </select>
            </div>

            <div className="col-span-2 flex items-start" data-aos="fade-down">
              <input id="termos" type="checkbox" {...register("termos", { required: "É necessário aceitar os termos" })} className="mr-2 mt-1" />
              <label htmlFor="termos" className="text-sm">
                Li os <a href="#" className="text-primary underline">termos de uso</a> e a <a href="#" className="text-primary underline">política de privacidade</a> e estou de acordo.
              </label>
            </div>
            {errors.termos && <p className="text-red-500 text-sm col-span-2">{errors.termos.message}</p>}

            <button type="submit" className="col-span-2 bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition" data-aos="fade-down">Enviar informações</button>
          </form>
        </div>
      </div>
    </div>
  );
}
