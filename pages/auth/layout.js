export default function AuthLayout({ children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
        {children}
      </div>
    );
  }