import {
  HomeIcon,
  BookOpenIcon,
  BellIcon,
  DocumentTextIcon,
  ClipboardIcon,
  BriefcaseIcon,
  IdentificationIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 bg-black/30 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <nav
        className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-black shadow-2xl transform transition-all duration-200 ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 flex justify-between items-center mx-7 my-4">
          <span className="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="32" viewBox="0 0 1311 356" fill="none">
              <path stroke="#F23064" strokeWidth="8" d="M399.664 4.733h-26.043V353.75h26.043V4.733ZM225.414 171.716H98.871v23.983h126.543v-23.983Z"/>
              <path stroke="#F23064" strokeWidth="8" d="M2 4.733V353.75h26.043V28.483h268.614V4.733H2ZM1179.27 3.386H972.773v349.017h26.043V27.369h178.634c62.81 0 105.76 29.017 105.76 84.29v.914c0 51.853-43.86 85.65-108.72 85.65h-81.8v23.983h80.27c72.86 0 136.04-37.918 136.04-111.247v-.894c0-67.4-52.76-106.68-129.73-106.68ZM821.967 198.295 701.002 2h-24.896L460.473 353.543h26.956L687.981 30.336 792.6 198.218l29.367.078ZM861.794 262.856h-29.017l56.362 90.685h28.55l-55.895-90.685Z"/>
            </svg>
          </span>
          <button onClick={onClose} aria-label="Fechar" className="absolute right-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke="currentColor" className="w-7 h-7">
              <line x1="12" y1="12" x2="36" y2="36" strokeWidth="4" strokeLinecap="round" />
              <line x1="36" y1="12" x2="12" y2="36" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="p-6">
          <li className="my-5">
            <Link to="/" className="flex items-center gap-5 text-xl font-semibold text-gray-700 dark:text-gray-200" onClick={onClose}>
              <HomeIcon className="w-8 h-8" /> Home
            </Link>
          </li>
          <li className="my-5">
            <Link to="/fiapp/aulas" className="flex items-center gap-5 text-xl font-semibold text-gray-700 dark:text-gray-200" onClick={onClose}>
              <BookOpenIcon className="w-8 h-8" /> Aulas
            </Link>
          </li>
          <li className="my-5">
            <Link to="/fiapp/avisos" className="flex items-center gap-5 text-xl font-semibold text-gray-700 dark:text-gray-200" onClick={onClose}>
              <BellIcon className="w-8 h-8" /> Avisos
            </Link>
          </li>
          <li className="my-5">
            <Link to="/fiapp/material" className="flex items-center gap-5 text-xl font-semibold text-gray-700 dark:text-gray-200" onClick={onClose}>
              <DocumentTextIcon className="w-8 h-8" /> Material de Apoio
            </Link>
          </li>
          <li className="my-5">
            <Link to="/fiapp/notas-faltas" className="flex items-center gap-5 text-xl font-semibold text-gray-700 dark:text-gray-200" onClick={onClose}>
              <ClipboardIcon className="w-8 h-8" /> Notas e Faltas
            </Link>
          </li>
          <li className="my-5">
            <Link to="/fiapp/trabalhos" className="flex items-center gap-5 text-xl font-semibold text-gray-700 dark:text-gray-200" onClick={onClose}>
              <BriefcaseIcon className="w-8 h-8" /> Trabalhos
            </Link>
          </li>
          <li className="my-5">
            <Link to="/fiapp/id-digital" className="flex items-center gap-5 text-xl font-semibold text-gray-700 dark:text-gray-200" onClick={onClose}>
              <IdentificationIcon className="w-8 h-8" /> Id Digital
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <button
            className="w-full flex items-center justify-center gap-3 text-lg font-semibold !text-red-700"
            onClick={() => {
              if (window.confirm('Deseja fazer logout?')) {
                
              }
            }}
          >
            <ArrowRightOnRectangleIcon className="w-7 h-7" />
            Desconectar
          </button>
        </div>
      </nav>
    </div>
  );
}
