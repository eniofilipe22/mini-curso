import Content from "./components/content"
import Header from "./components/header"
import Footer from "./components/footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header title="Qual é a Palavra?"/>
      <Content />
      <Footer link="http://github.com" mensagem="Copyright © 2023 Ênio Filipe e Lorena Avelino" />
    </>
  )
}

export default App
