import { oratorStd, graphik } from './ui/fonts';
import './globals.css';
import NavBar from './ui/components/navbar';

export const metadata = {
  title: 'Zaliqa Rosli',
  description: 'Portfolio of UI/Web Designer and Developer, Zaliqa Rosli',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${oratorStd.variable} ${graphik.variable} antialiased bg-primary text-black flex flex-col items-center gap-[2.5rem]`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
