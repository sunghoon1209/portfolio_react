import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/router.jsx";
import GlobalStyle from "./styles/GlobalStyle";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>  
      <AppRouter></AppRouter>

    </BrowserRouter> 

    
  )
}

export default App
