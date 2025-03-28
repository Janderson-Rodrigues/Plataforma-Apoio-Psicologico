import { useState } from "react";
import anamneseService from "../services/anameseServices";

export default function PatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    complaints: "",
    familyHistory: "",
    medication: "",
    therapyGoal: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Transformar os dados do formulário para o formato esperado pela API
      const anamneseData = {
        id_paciente: 1, // Você pode precisar ajustar isso ou obter de outra forma
        sintomas: `${formData.complaints}\nHistórico Familiar: ${formData.familyHistory}`,
        uso_medicamentos: formData.medication,
        objetivo_terapia: formData.therapyGoal,
        // Adicionando informações extras que podem ser úteis
        paciente_info: {
          nome: formData.name,
          idade: formData.age,
          genero: formData.gender
        }
      };

      // Chamar o serviço para criar a anamnese
      await anamneseService.create(anamneseData);
      
      setSuccess(true);
      // Limpar o formulário após o sucesso
      setFormData({
        name: "",
        age: "",
        gender: "",
        complaints: "",
        familyHistory: "",
        medication: "",
        therapyGoal: "",
      });
      
      // Opcional: redirecionar ou mostrar mensagem de sucesso
    } catch (err) {
      console.error("Erro ao salvar anamnese:", err);
      setError(err.message || "Ocorreu um erro ao salvar a anamnese");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Anamnese Básica</h2>
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            Anamnese cadastrada com sucesso!
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Idade</label>
              <input 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md" 
                required
                min="0"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium">Gênero</label>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Principais Queixas</label>
            <textarea 
              name="complaints" 
              value={formData.complaints} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md"
              required
              rows={3}
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Histórico Familiar</label>
            <textarea 
              name="familyHistory" 
              value={formData.familyHistory} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md"
              rows={3}
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Uso de Medicamentos</label>
            <input 
              type="text" 
              name="medication" 
              value={formData.medication} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium">Objetivo da Terapia</label>
            <select 
              name="therapyGoal" 
              value={formData.therapyGoal} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Selecione</option>
              <option value="Ansiedade">Ansiedade</option>
              <option value="Luto">Luto</option>
              <option value="Autoconhecimento">Autoconhecimento</option>
              <option value="Neuroatípico">Neuroatípico</option>
            </select>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </form>
      </div>
    </div>
  );
}