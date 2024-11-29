import { Logo } from './components/Logo';
import { EnrollmentForm } from './components/EnrollmentForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Logo />
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Formulario de Inscripción
        </h1>
        <EnrollmentForm />
      </main>
    </div>
  );
}

export default App;