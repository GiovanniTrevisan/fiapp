export default function Material() {
  const disciplinas = [
    { nome: "Big Data Development", professor: "Thiago Nascimento Nogueira" },
    { nome: "Bootcamp", professor: "Albert da Costa Xavier" },
    { nome: "Business Agility & Management 3.0", professor: "Adriane Paulieli Colossetti" },
    { nome: "Cloud Development", professor: "Lucas Simões Maistro" },
    { nome: "Containers & Virtualization", professor: "Daniel de Andrade Lemeszenski" },
    { nome: "Design Thinking", professor: "Rose Mary Juliano Longo" },
    { nome: "DevOps", professor: "Fabiano da Silva Carneiro" },
    { nome: "Empreendedorismo e Inovação", professor: "Ricardo Francisco Esposto" },
    { nome: "Encontro com a Coordenação", professor: "Albert da Costa Xavier" },
    { nome: "Hybrid & Native Cloud", professor: "Rafael de Freitas Barbosa" },
    { nome: "Integrations & Development Tools", professor: "Rafael Thomazelli Mazzucato" },
    { nome: "IoT Development", professor: "Ricardo de Almeida" },
    { nome: "Nano Courses", professor: "" },
    { nome: "Persistence", professor: "Rafael Tsuji Matsuyama" },
    { nome: "Processamento de Aprendizagem", professor: "Albert da Costa Xavier" },
    { nome: "Quarkus", professor: "Rafael Tsuji Matsuyama" },
    { nome: "Serverless Architecture", professor: "Ricardo de Almeida" },
    { nome: "Spring", professor: "Fabio Tadashi Miyasato" },
    { nome: "Trabalho de Conclusão de Curso", professor: "Albert da Costa Xavier" },
    { nome: "UX Design", professor: "Helena Izumi Ramalho Wataya" },
    { nome: "Webservices & Restful Technologies", professor: "Ricardo de Almeida" },
    { nome: "Regimento Discente", professor: "Regimento Discente" },
    { nome: "Java Platform", professor: "Rafael Tsuji Matsuyama" },
    { nome: "Microservices Development", professor: "Daniel de Andrade Lemeszenski" },
    { nome: "Mobile Development", professor: "Marcelo Pinheiro Montanher" },
    { nome: "Modern Web", professor: "Rafael de Freitas Barbosa" },
    { nome: "Nano Courses", professor: "" },
    { nome: "Nano Courses", professor: "" },
    { nome: "Nano Courses", professor: "" },
    { nome: "Nano Courses", professor: "" },
    { nome: "Persistence", professor: "Rafael Tsuji Matsuyama" },
    { nome: "Processamento de Aprendizagem", professor: "Albert da Costa Xavier" },
    { nome: "Quarkus", professor: "Rafael Tsuji Matsuyama" },
  ];

  return (
    <div className="bg-white min-h-screen px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Disciplinas</h1>
      <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {disciplinas.map((disciplina, index) => (
            <li key={index} className="py-4">
              <p className="text-lg font-semibold text-black">{disciplina.nome}</p>
              <p className="text-sm text-gray-500">{disciplina.professor}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
