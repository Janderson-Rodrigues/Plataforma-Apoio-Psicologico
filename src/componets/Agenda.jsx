import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaVideo, FaMapMarkerAlt, FaUser, FaClock } from "react-icons/fa";

const Agenda = () => {
  const [date, setDate] = useState(new Date(2025, 2, 1)); // Março 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 2, 28)); // 28 de março selecionado inicialmente

  // Dados mockados de consultas para março de 2025
  const [consultas] = useState([
    {
      id: 1,
      data: new Date(2025, 2, 28, 11, 0), // 28/03/2025 11:00
      paciente: "Ricardo Almeida",
      profissional: "Dra. Ana Silva",
      tipo: "Online",
      link: "https://meet.google.com/def-uvw-456",
      duracao: "50 minutos"
    },
    {
      id: 2,
      data: new Date(2025, 2, 17, 14, 30), // 17/03/2025 14:30
      paciente: "Mariana Oliveira",
      profissional: "Dr. Carlos Mendes",
      tipo: "Presencial",
      endereco: "Clínica Bem Estar, Sala 203",
      duracao: "50 minutos"
    },
    {
      id: 3,
      data: new Date(2025, 2, 10, 9, 0), // 10/03/2025 09:00
      paciente: "Carlos Eduardo",
      profissional: "Dra. Ana Silva",
      tipo: "Online",
      link: "https://meet.google.com/abc-xyz-123",
      duracao: "50 minutos"
    }
  ]);

  const handleDateChange = (date) => {
    setDate(date);
    setSelectedDate(date);
  };

  const getConsultasDoDia = (dia) => {
    return consultas.filter(consulta => 
      consulta.data.getDate() === dia.getDate() &&
      consulta.data.getMonth() === dia.getMonth() &&
      consulta.data.getFullYear() === dia.getFullYear()
    ).sort((a, b) => a.data - b.data);
  };

  const consultasDoDiaSelecionado = selectedDate ? getConsultasDoDia(selectedDate) : [];

  // Formata a data em português
  const formatarData = (data) => {
    return data.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
      <Calendar
        onChange={handleDateChange}
        value={date}
        locale="pt-BR"
        className="border-0"
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const temConsulta = consultas.some(c => 
              c.data.getDate() === date.getDate() && 
              c.data.getMonth() === date.getMonth() && 
              c.data.getFullYear() === date.getFullYear()
            );
            return temConsulta ? "bg-blue-50 font-bold" : "";
          }
        }}
      />

      <div className="mt-6">
        {selectedDate && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Consultas agendadas em {formatarData(selectedDate)}
            </h3>

            {consultasDoDiaSelecionado.length > 0 ? (
              <div className="space-y-4">
                {consultasDoDiaSelecionado.map(consulta => (
                  <div key={consulta.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-1">
                          <FaClock className="text-blue-500 mr-2" />
                          <span className="font-bold text-gray-800">
                            {consulta.data.getHours().toString().padStart(2, '0')}:
                            {consulta.data.getMinutes().toString().padStart(2, '0')}
                          </span>
                          <span className="text-gray-500 ml-2">({consulta.duracao})</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <FaUser className="text-blue-500 mr-2" />
                          <span className="text-gray-700">{consulta.paciente}</span>
                        </div>
                        <div className="text-sm text-gray-500 ml-6 mb-2">
                          {consulta.profissional}
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        consulta.tipo === "Online" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {consulta.tipo === "Online" ? (
                          <FaVideo className="mr-1" />
                        ) : (
                          <FaMapMarkerAlt className="mr-1" />
                        )}
                        {consulta.tipo}
                      </span>
                    </div>

                    {consulta.tipo === "Online" ? (
                      <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                        <a 
                          href={consulta.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <span className="mr-2">Link da chamada</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <div className="mt-3 bg-blue-50 p-3 rounded-lg flex items-start">
                        <FaMapMarkerAlt className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{consulta.endereco}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Nenhuma consulta agendada para este dia</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Agenda;