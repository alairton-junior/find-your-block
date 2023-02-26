import { BlocksProvider } from "./hooks/useBlocks"
import Home from "./pages/Home"
import { GlobalStyle } from "./styles/global"

function App() {
  
  return (
    <BlocksProvider>
      <GlobalStyle />
      <Home />
    </BlocksProvider>
  )
}

export default App
