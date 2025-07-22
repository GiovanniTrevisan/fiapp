import { useState } from 'react';
import { ArrowsPointingOutIcon, QrCodeIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

export default function IdDigital() {
  const [showQR, setShowQR] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Dados fictícios do estudante
  const estudante = {
    nome: 'Giovanni Ribeiro Bendinelli Trevisan',
    matricula: '344444',
    curso: 'MBA em Fullstack Developer - Design, Engineering & Deployment',
    validade: '03/2027',
    cpf: '521.503.528-85',
    nascimento: '02/04/2000',
    rg: '50.521.329-6',
    foto: '/perfil.png',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-transparent">
        <button className="absolute top-[22px] right-10" title="Fullscreen" onClick={() => setIsFullscreen(f => !f)}>
          <ArrowsPointingOutIcon className="w-6 h-6 text-rose-500" />
        </button>
        <button className="absolute top-[22px] right-1" title="QR Code" onClick={() => setShowQR(true)}>
          <QrCodeIcon className="w-6 h-6 text-rose-500" />
        </button>

      <div
        className="relative w-[450px] h-[250px] bg-[#262626] rounded-xl shadow-lg p-4 flex gap-4"
        style={{
          transform: `rotateZ(90deg) scale(${isFullscreen ? 1.2 : 1})`,
          perspective: '1000px',
          transition: 'transform 0.3s',
        }}
      >
        <div
          className="w-full h-full relative"
          style={{ perspective: '1000px' }}
        >
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-700"
            style={{
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Frente do card */}
            <div
              className="absolute inset-0 w-full h-full flex gap-4 items-center justify-center"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img src={estudante.foto} alt="Foto do estudante" className="w-40 h-45 mt-4 ml-5 rounded-md mb-2 scale-[0.9]" />
              <div className='flex flex-col py-10'>
                <svg xmlns="http://www.w3.org/2000/svg" className='my-2.5' width="100" height="27" viewBox="0 0 1311 356" fill="none">
                    <path stroke="currentColor" strokeWidth="10" d="M399.664 4.733h-26.043V353.75h26.043V4.733ZM225.414 171.716H98.871v23.983h126.543v-23.983Z"/>
                    <path stroke="currentColor" strokeWidth="10" d="M2 4.733V353.75h26.043V28.483h268.614V4.733H2ZM1179.27 3.386H972.773v349.017h26.043V27.369h178.634c62.81 0 105.76 29.017 105.76 84.29v.914c0 51.853-43.86 85.65-108.72 85.65h-81.8v23.983h80.27c72.86 0 136.04-37.918 136.04-111.247v-.894c0-67.4-52.76-106.68-129.73-106.68ZM821.967 198.295 701.002 2h-24.896L460.473 353.543h26.956L687.981 30.336 792.6 198.218l29.367.078ZM861.794 262.856h-29.017l56.362 90.685h28.55l-55.895-90.685Z"/>
                  </svg>
                <h2 className="text-xl font-bold text-rose-500 mb-1 leading-tight">{estudante.nome}</h2>
                <div className="text-gray-400 dark:text-gray-300 text-sm mb-2"><span className="font-semibold">{estudante.curso}</span></div>
                <div className="text-gray-400 dark:text-gray-300 text-sm mb-2">Validade: <span className="font-semibold">{estudante.validade}</span></div>
              </div>
            </div>
            {/* Verso do card */}
            <div
              className="absolute inset-0 w-full h-full flex gap-10 items-center justify-center bg-[#262626] rounded-xl"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
                <div className="flex justify-center items-center mb-2 text-rose-500 ml-8">
                  {/* Logo da FIAP SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 1311 356" fill="none">
                    <path stroke="currentColor" strokeWidth="10" d="M399.664 4.733h-26.043V353.75h26.043V4.733ZM225.414 171.716H98.871v23.983h126.543v-23.983Z"/>
                    <path stroke="currentColor" strokeWidth="10" d="M2 4.733V353.75h26.043V28.483h268.614V4.733H2ZM1179.27 3.386H972.773v349.017h26.043V27.369h178.634c62.81 0 105.76 29.017 105.76 84.29v.914c0 51.853-43.86 85.65-108.72 85.65h-81.8v23.983h80.27c72.86 0 136.04-37.918 136.04-111.247v-.894c0-67.4-52.76-106.68-129.73-106.68ZM821.967 198.295 701.002 2h-24.896L460.473 353.543h26.956L687.981 30.336 792.6 198.218l29.367.078ZM861.794 262.856h-29.017l56.362 90.685h28.55l-55.895-90.685Z"/>
                  </svg>
                </div>
                <div className="border-l-2 pl-6">

              <div className="text-gray-400 dark:text-gray-300 text-sm mb-2">CPF: <span className="font-semibold">{estudante.cpf}</span></div>
              <div className="text-gray-400 dark:text-gray-300 text-sm mb-2">RG: <span className="font-semibold">{estudante.rg}</span></div>
              <div className="text-gray-400 dark:text-gray-300 text-sm mb-2">Data de Nasc.: <span className="font-semibold">{estudante.nascimento}</span></div>
              <div className="text-gray-400 dark:text-gray-300 text-sm mb-2">RM: <span className="font-semibold">{estudante.matricula}</span></div>
              <div className="text-gray-400 dark:text-gray-300 text-sm mb-2">Validade: <span className="font-semibold">{estudante.validade}</span></div>
                </div>
            </div>
          </div>
          <button className="absolute top-0 right-[-10px] z-10" title="Virar carteirinha" onClick={() => setFlipped(f => !f)}>
            <ArrowPathRoundedSquareIcon className="w-7 h-7 text-rose-500" />
          </button>
        </div>
      </div>

      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#262626] rounded-lg p-6 flex flex-col items-center relative">
            <button className="absolute top-2 right-2 text-rose-500 text-2xl" onClick={() => setShowQR(false)}>&times;</button>
            <div className="mb-2 text-lg font-bold text-rose-500">QR Code</div>
            {/* Substitua a src abaixo pela imagem do QR code quando tiver */}
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=IDDigital" alt="QR Code" className="w-40 h-40" />
          </div>
        </div>
      )}
    </div>
  );
}
