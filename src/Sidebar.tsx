import {
  HomeIcon,
  BookOpenIcon,
  BellIcon,
  DocumentTextIcon,
  ClipboardIcon,
  BriefcaseIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline'

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ${open ? 'bg-black bg-opacity-40' : 'pointer-events-none bg-transparent'}`}
      style={{ display: open ? 'block' : 'none' }}
      onClick={onClose}
    >
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center mx-5 my-2">
          <span className="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="24" viewBox="0 0 1311 356" fill="none">
              <path stroke="#F23064" strokeWidth="8" d="M399.664 4.733h-26.043V353.75h26.043V4.733ZM225.414 171.716H98.871v23.983h126.543v-23.983Z"/>
              <path stroke="#F23064" strokeWidth="8" d="M2 4.733V353.75h26.043V28.483h268.614V4.733H2ZM1179.27 3.386H972.773v349.017h26.043V27.369h178.634c62.81 0 105.76 29.017 105.76 84.29v.914c0 51.853-43.86 85.65-108.72 85.65h-81.8v23.983h80.27c72.86 0 136.04-37.918 136.04-111.247v-.894c0-67.4-52.76-106.68-129.73-106.68ZM821.967 198.295 701.002 2h-24.896L460.473 353.543h26.956L687.981 30.336 792.6 198.218l29.367.078ZM861.794 262.856h-29.017l56.362 90.685h28.55l-55.895-90.685Z"/>
            </svg>
          </span>
          <button onClick={onClose} aria-label="Fechar" className="text-2xl">×</button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <a href="/" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <HomeIcon className="w-6 h-6" /> Home
            </a>
          </li>
          <li>
            <a href="/aulas" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <BookOpenIcon className="w-6 h-6" /> Aulas
            </a>
          </li>
          <li>
            <a href="/avisos" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <BellIcon className="w-6 h-6" /> Avisos
            </a>
          </li>
          <li>
            <a href="/material" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <DocumentTextIcon className="w-6 h-6" /> Material de Apoio
            </a>
          </li>
          <li>
            <a href="/notas-faltas" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <ClipboardIcon className="w-6 h-6" /> Notas e Faltas
            </a>
          </li>
          <li>
            <a href="/trabalhos" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <BriefcaseIcon className="w-6 h-6" /> Trabalhos
            </a>
          </li>
          <li>
            <a href="/id-digital" className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <IdentificationIcon className="w-6 h-6" /> Id Digital
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
