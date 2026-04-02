import './globals.css';
import './elkin.css';

export const metadata = {
  title: 'Isabel Chen',
  description: 'Full stack developer · University of Michigan · Computer Science',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
