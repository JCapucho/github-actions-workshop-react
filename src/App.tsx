import gluaLogoUrl from "/glua-logo.svg"
import './App.css'

function App() {
  const a: number = "1";
  return (
    <div className="App">
      <div>
        <a href="https://glua.ua.pt/" target="_blank" rel="noreferrer">
          <img src={gluaLogoUrl} className="logo" alt="Glua logo" />
        </a>
      </div>
      <h1>Github actions workshop</h1>
      <p className="desc">Build and deploy a react app</p>
    </div>
  )
}

export default App
