
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import BooksPage from './pages/BooksPage';
import BookDetails from './pages/BookDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
