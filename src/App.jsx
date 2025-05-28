import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/Router";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/common/Header";
import StyledInner from "./components/common/Inner";
function App() {

  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <main>      
        <StyledInner>
          <AppRouter>
            
          </AppRouter>
        </StyledInner>  
      </main>
    </BrowserRouter> 

    
  )
}

export default App
