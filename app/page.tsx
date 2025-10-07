export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">My App</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Hello World!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to this Next.js application. This is your first step into building modern web experiences.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <p className="text-gray-800">Getting started with Next.js is easy and fun!</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2025 My Hello World App. Built with Next.js.
          </p>
        </div>
      </footer>
    </main>
  );
}
