import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1 }}>
        <AppRouter />
      </main>

      <Footer />
    </div>
  )
}

export default App