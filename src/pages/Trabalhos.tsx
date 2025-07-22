"use client";
export default function Trabalhos() {
  const renderConteudo = () => {
    return (
      <div className="text-center flex flex-col items-center justify-center h-[60vh]">
        <p className="text-gray-600">Nenhum trabalho encontrado</p>
        <button>
          Recarregar
        </button>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 px-6 pt-6">Trabalhos</h1>

      <div className="flex space-evenly justify-center mb-4">
        <button
          
        >
          Pendentes
        </button>
        <button
          
        >
          Entregues
        </button>
        <button
          
        >
          Corrigidos
        </button>
      </div>

      <div className="bg-white shadow rounded-md p-4 m-2 min-h-[60vh]">
        {renderConteudo()}
      </div>
    </div>
  );
}
