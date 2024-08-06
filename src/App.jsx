import { useContext } from 'react'
import {Context} from "./context/Context"
import Login  from './routes/Login'
import './App.css'
import DashboardPage from './routes/Dashboard'

function App() {
const {token} = useContext(Context)
return token ? <DashboardPage/> : <Login/>
}  

export default App 
