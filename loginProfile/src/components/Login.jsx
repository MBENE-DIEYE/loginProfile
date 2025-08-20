import { useNavigate } from "react-router-dom"
import { login } from "../store/slices/authSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Login = ({ user }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        const dataUser = user.find(u => u.username === username && u.password === password)
        if (dataUser) {
            dispatch(login({ user: dataUser, token: "123e67tertfgergf" }))
            navigate("/profile")
        } else {
            setError("username o password incorect")
        }

    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className=" p-20 border rounded bg-gray-200 w-80 m-10 ">
                    <form onSubmit={handleLogin}>
                        <div className="mb-2">
                            <label className="m-1 " htmlFor="userName">UserName</label>
                            <input className="p-1 m-1 border rounded" type="text" name="userName" id="userName" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <label className="m-1 " htmlFor="password">PassWord</label>
                        <input className="p-1 m-1 border rounded" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        <button type="submit" className="px-4 py-2 bg-blue-400 text-white mt-8 ml-12 border rounded" >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login