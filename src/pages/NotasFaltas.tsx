export default function NotasFaltas() {
  const notas = [
    {
      modulo: "1",
      disciplina: "Encontro com a Coordenação",
      cargaHoraria: "4h",
      fa: "-",
      md: "8.5",
      sub: "-",
      mf: "8.5",
      status: "Aprovado",
    },
    {
      modulo: "1",
      disciplina: "UX Design",
      cargaHoraria: "16h",
      fa: "-",
      md: "9.5",
      sub: "-",
      mf: "9.5",
      status: "Aprovado",
    },
    {
      modulo: "1",
      disciplina: "Modern Web",
      cargaHoraria: "24h",
      fa: "-",
      md: "10.0",
      sub: "-",
      mf: "10.0",
      status: "Aprovado",
    },
    {
      modulo: "1",
      disciplina: "Mobile Development",
      cargaHoraria: "24h",
      fa: "-",
      md: "5.0",
      sub: "10.0",
      mf: "10.0",
      status: "Aprovado",
    },
    {
      modulo: "1",
      disciplina: "Bootcamp",
      cargaHoraria: "4h",
      fa: "-",
      md: "8.0",
      sub: "-",
      mf: "8.0",
      status: "Aprovado",
    },
    {
      modulo: "1",
      disciplina: "Empreendedorismo e Inovação",
      cargaHoraria: "20h",
      fa: "-",
      md: "8.5",
      sub: "-",
      mf: "8.5",
      status: "Aprovado",
    },
    {
      modulo: "1",
      disciplina: "Processamento de Aprendizagem",
      cargaHoraria: "4h",
      fa: "-",
      md: "8.5",
      sub: "-",
      mf: "8.5",
      status: "Aprovado",
    },
    {
      modulo: "1",
      disciplina: "Trabalho de Conclusão de Curso",
      cargaHoraria: "-",
      fa: "-",
      md: "8.5",
      sub: "-",
      mf: "8.5",
      status: "Aprovado",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Notas e Faltas</h1>
      <div className="max-h-[calc(100vh-13rem)] overflow-y-auto space-y-4">
        {notas.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-md overflow-hidden">
            <div className="bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-800">
              Mód.: {item.modulo} {item.disciplina} - {item.cargaHoraria}
            </div>
            <div className="grid grid-cols-4 text-center text-sm border-t">
              <div className="p-2 font-semibold border-r">FA</div>
              <div className="p-2 font-semibold border-r">MD</div>
              <div className="p-2 font-semibold border-r">SUB</div>
              <div className="p-2 font-semibold">MF</div>
              <div className="p-2 border-t">{item.fa || "-"}</div>
              <div className={`p-2 border-t ${parseFloat(item.md) < 6 ? "text-red-600" : "text-blue-600"}`}> 
                {item.md}
              </div>
              <div className="p-2 border-t text-blue-600">{item.sub}</div>
              <div className="p-2 border-t text-blue-600">{item.mf}</div>
            </div>
            <div className="px-4 py-2 text-sm">
              <span className="font-semibold">STATUS: </span>
              <span className="text-green-600">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
