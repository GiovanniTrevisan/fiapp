"use client";
import { useEffect, useState } from "react";

export default function Aulas() {
  const [dataHoje, setDataHoje] = useState("");

  useEffect(() => {
    const hoje = new Date();
    const diasSemana = [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado",
    ];

    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();
    const diaSemana = diasSemana[hoje.getDay()];

    setDataHoje(`> ${dia}/${mes}/${ano} - ${diaSemana}`);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-6">Aulas</h1>

      <div className="flex flex-col items-center justify-center space-y-4 bg-white shadow-md rounded-lg p-4">
        <div className="">
          <p className="text-lg font-medium text-gray-700">{dataHoje}</p>
        </div>
        <div className="text-center text-rose-500 font-semibold">
          Não há aulas agendadas para hoje.
        </div>
      </div>
    </div>
  );
}
