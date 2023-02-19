import gluaLogoUrl from "/glua-logo.svg"
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://glua.ua.pt/" target="_blank" rel="noreferrer">
          <img src={gluaLogoUrl} className="logo" alt="Glua logo" />
        </a>
      </div>
      <h1>Github actions workshop</h1>
      <p className="desc">Build and deploy a react app</p>
      <p className="desc">Adding this in a PR</p>
    </div>
  )
}

export default App
