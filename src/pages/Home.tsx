import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ChartBarIcon, DocumentTextIcon, BellIcon, IdentificationIcon } from "@heroicons/react/24/outline";

const aluno = {
  nome: "Giovanni Trevisan",
  matricula: "344444",
  turma: "43SCJ",
  curso: "MBA em Full Stack Developer – Design, Engineering & Deployment",
  fotoUrl: "/fiapp/perfil.png",
};

const aulasDoDia: { horario: string; disciplina: string; sala: string }[] = [];

function formatarDataAtual() {
  const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();
  const diaSemana = diasDaSemana[hoje.getDay()];
  return `${dia}/${mes}/${ano} - ${diaSemana}`;
}

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={aluno.fotoUrl}
          alt="Foto do aluno"
          className="w-32 h-32 rounded-md border-2 border-gray-300 object-cover"
        />
        <div>
          <h1 className="font-bold !text-2xl">{aluno.nome}</h1>
          <p className="text-sm text-gray-600">RM: <span className="font-semibold">{aluno.matricula}</span></p>
          <p className="text-sm text-gray-600">Turma: <span className="font-semibold">{aluno.turma}</span></p>
          <p className="text-sm text-gray-600">Curso: <span className="font-semibold">{aluno.curso}</span></p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">📅 Hoje – {formatarDataAtual()}</h2>
        {aulasDoDia.length > 0 ? (
          <ul className="space-y-2">
            {aulasDoDia.map((aula, index) => (
              <li key={index} className="text-sm border-b pb-1">
                <strong>{aula.horario}</strong> – {aula.disciplina} ({aula.sala})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Nenhuma aula hoje.</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card title="Notas e Faltas" to="/fiapp/notas-faltas" icon={<ChartBarIcon className="h-8 w-8 text-blue-500" />} />
        <Card title="Trabalhos" to="/fiapp/trabalhos" icon={<DocumentTextIcon className="h-8 w-8 text-green-500" />} />
        <Card title="Avisos" to="/fiapp/avisos" icon={<BellIcon className="h-8 w-8 text-yellow-500" />} />
        <Card title="ID Digital" to="/fiapp/id-digital" icon={<IdentificationIcon className="h-8 w-8 text-purple-500" />} />
      </div>
    </div>
  );
}

function Card({ title, to, icon }: { title: string; to: string; icon?: ReactNode }) {
  return (
    <Link to={to} className="bg-white rounded-xl shadow p-6 text-center hover:bg-gray-200 transition flex flex-col items-center gap-2">
      {icon && <span className="mb-1">{icon}</span>}
      <span className="text-gray-800 font-semibold">{title}</span>
    </Link>
  );
}
