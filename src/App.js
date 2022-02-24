import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home, About, Contact } from './pages'
import { Container, Box } from '@chakra-ui/react'


function App() {
  return (
    <Container maxW='container.xl'>
      <Box padding='4' bg='gray.100'>

        <Navbar />
      </Box>

      <Container maxW='container.lg'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Container>

      <Box mb={5} p={5} bg='gray.100'>

        <Footer />
      </Box>

    </Container>
  );
}

export default App;
