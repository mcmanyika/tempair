import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          © {new Date().getFullYear()} Temp & Air. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
