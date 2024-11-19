export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">SPEAK CHAT</h1>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/RodrigoNet0/speak-chat"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.17 6.84 9.47.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.79.61-3.38-1.35-3.38-1.35-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1.01.07 1.53 1.04 1.53 1.04.89 1.52 2.35 1.08 2.92.82.09-.64.35-1.08.64-1.33-2.33-.26-4.79-1.15-4.79-5.12 0-1.13.4-2.07 1.06-2.8-.11-.26-.46-1.27.1-2.65 0 0 .88-.28 2.87 1.08C9.09 6.04 10.53 6 12 6c1.47 0 2.91.04 4.27.58 2-.37 2.88-1.08 2.88-1.08.56 1.38.21 2.39.1 2.65.66.73 1.06 1.67 1.06 2.8 0 3.98-2.47 4.87-4.81 5.12.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.79 0 .27.19.58.69.49 4.44-1.3 7.72-5.05 7.72-9.47 0-5.52-4.48-10-10-10z"></path>
            </svg>
            <span className="ml-2">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
