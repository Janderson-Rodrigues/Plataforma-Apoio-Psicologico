import { useState } from "react";
import { useNavigate } from "react-router-dom";
import anamneseService from "../services/anameseServices";

// Componente de Loading (pode ser colocado em um arquivo separado para reutilização)
const LoadingSpinner = ({ message }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
      <div className="flex justify-center mb-4">
        <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <p className="text-gray-700 font-medium">{message}</p>
    </div>
  </div>
);

export default function PatientForm() {
  const navigate = useNavigate();
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
  const [redirecting, setRedirecting] = useState(false);
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
      setLoading(false);
      setRedirecting(true);
      
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
      
      // Redirecionar após 2 segundos (para mostrar feedback)
      setTimeout(() => {
        navigate("/meu-perfil");
      }, 2000);
      
    } catch (err) {
      console.error("Erro ao salvar anamnese:", err);
      setError(err.message || "Ocorreu um erro ao salvar a anamnese");
      setLoading(false);
      setRedirecting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative">
      {/* Overlay de redirecionamento */}
      {redirecting && <LoadingSpinner message="Redirecionando para seu perfil..." />}
      
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
            <label className="block text-sm font-medium">Nome *</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              required
              disabled={loading}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Idade *</label>
              <input 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md" 
                required
                min="0"
                disabled={loading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium">Gênero *</label>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                className="w-full p-2 border rounded-md"
                required
                disabled={loading}
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium">Principais Queixas *</label>
            <textarea 
              name="complaints" 
              value={formData.complaints} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md"
              required
              rows={3}
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium">Objetivo da Terapia *</label>
            <select 
              name="therapyGoal" 
              value={formData.therapyGoal} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md"
              required
              disabled={loading}
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
            className={`w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Salvando...
              </>
            ) : (
              'Salvar e Ir para Perfil'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}