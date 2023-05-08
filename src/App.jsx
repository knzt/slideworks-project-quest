import './App.css'
import { ThemeProvider } from './themeContext'
// components
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import MovieList from './components/MovieList/MovieList'

function App() {

  return (
    <ThemeProvider>
      <>
      <Container />
      <MovieList />
      <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
