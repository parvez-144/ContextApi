import userContextProvider  from "./context/userContextProvider"
import './App.css'
import './index.css'
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {
  
  return (
    <>
        <userContextProvider>
          <div>Hello world</div>
          <Login/>
          <Profile/>
        </userContextProvider>
    </>
  )
}

export default App
