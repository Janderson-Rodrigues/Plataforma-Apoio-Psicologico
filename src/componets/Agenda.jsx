import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../style/Agenda.css';

const Agenda = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 text-white rounded-xl shadow-lg">
      <Calendar
        onChange={setDate}
        value={date}
        locale="pt-BR"
        className="bg-gray-800 text-white"
        tileClassName={({ date, view }) => {
          if (view === "month" && (date.getDate() === 1 || date.getDate() === 26)) {
            return "bg-blue-500 text-white rounded-full"; // Estiliza os dias marcados
          }
        }}
      />
      <p className="text-center mt-4 text-lg font-semibold">
        Data selecionada: {date.toLocaleDateString("pt-BR")}
      </p>
    </div>
  );
};

export default Agenda;
