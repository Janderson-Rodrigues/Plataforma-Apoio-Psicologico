import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../style/Agenda.css';

const Agenda = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [consultas, setConsultas] = useState([
    {
      id: 1,
      data: new Date(2023, 10, 15), // 15 de Novembro de 2023
      horario: "14:00",
      profissional: "Dra. Ana Silva",
      link: "https://meet.google.com/abc-xyz-123"
    },
    {
      id: 2,
      data: new Date(2023, 10, 20), // 20 de Novembro de 2023
      horario: "10:30",
      profissional: "Dr. Carlos Mendes",
      link: "https://meet.google.com/def-uvw-456"
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
    );
  };

  const consultasDoDiaSelecionado = selectedDate ? getConsultasDoDia(selectedDate) : [];

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded-xl shadow-lg">
      <Calendar
        onChange={handleDateChange}
        value={date}
        locale="pt-BR"
        className="bg-gray-800 text-white border-0"
        tileClassName={({ date, view }) => {
          if (view === "month") {
            const temConsulta = consultas.some(consulta => 
              consulta.data.getDate() === date.getDate() &&
              consulta.data.getMonth() === date.getMonth() &&
              consulta.data.getFullYear() === date.getFullYear()
            );
            return temConsulta ? "bg-blue-500 text-white rounded-full" : "";
          }
        }}
      />

      <div className="mt-6">
        {selectedDate ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Consultas em {selectedDate.toLocaleDateString("pt-BR", { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
              })}
            </h3>

            {consultasDoDiaSelecionado.length > 0 ? (
              <div className="space-y-4">
                {consultasDoDiaSelecionado.map(consulta => (
                  <div key={consulta.id} className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{consulta.horario}</p>
                        <p className="text-gray-300">{consulta.profissional}</p>
                      </div>
                      <a 
                        href={consulta.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Entrar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p>Nenhuma consulta agendada para este dia</p>
                <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
                  Agendar Consulta
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center mt-4 text-gray-400">
            Selecione uma data para ver suas consultas
          </p>
        )}
      </div>
    </div>
  );
};

export default Agenda;