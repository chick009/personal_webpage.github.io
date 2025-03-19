import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'Resume Website' }: LayoutProps) => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-gray-800 text-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">
              <span className="cursor-pointer">Johnny</span>
            </Link>
          </h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <span className={`cursor-pointer ${router.pathname === '/' ? 'text-blue-400' : ''}`}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <span className={`cursor-pointer ${router.pathname === '/projects' ? 'text-blue-400' : ''}`}>
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <span className={`cursor-pointer ${router.pathname === '/experience' ? 'text-blue-400' : ''}`}>
                  Experience
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://www.linkedin.com/in/chyik0919/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:johnnyyik0919@gmail.com" 
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} - Johnny's Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 