import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Profile from "./components/Profile"
import Login from "./components/Login"
import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"

const App = () => {
  const [user, setUser] = useState([])
  const currentUser = useSelector((state) => state.auth.user)

  const fetchUser = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/users")
      setUser(res.data.users)
      console.log(user)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Login user={user} />} />
        <Route path="/profile" element={<Profile user={currentUser} />} />
      </Routes>
    </>
  )
}

export default App
