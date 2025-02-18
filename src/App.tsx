import './App.css'
import Button from './components/Button'

const App = () => {
  return (
    <div className="card">
      <Button label="Click Me" onClick={() => alert("test")}></Button>
    </div>
  )
}

export default App
