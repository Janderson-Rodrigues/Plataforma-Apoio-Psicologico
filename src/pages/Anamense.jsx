import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Anamnese Básica</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Idade</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Gênero</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Principais Queixas</label>
            <textarea name="complaints" value={formData.complaints} onChange={handleChange} className="w-full p-2 border rounded-md"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Histórico Familiar</label>
            <textarea name="familyHistory" value={formData.familyHistory} onChange={handleChange} className="w-full p-2 border rounded-md"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Uso de Medicamentos</label>
            <input type="text" name="medication" value={formData.medication} onChange={handleChange} className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Objetivo da Terapia</label>
            <select name="therapyGoal" value={formData.therapyGoal} onChange={handleChange} className="w-full p-2 border rounded-md">
              <option value="">Selecione</option>
              <option value="Ansiedade">Ansiedade</option>
              <option value="Luto">Luto</option>
              <option value="Autoconhecimento">Autoconhecimento</option>
              <option value="Neuroatípico">Neuroatípico</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Salvar</button>
        </form>
      </div>
    </div>
  );
}

