import { useState } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../store/slices/authSlice"
import { useNavigate } from "react-router-dom"

const Profile = ({ user }) => {
    const [formData, setFormData] = useState({ ...user })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <div className="flex justify-center items-center  ">
            <div className=" flex justify-center items-centerborder bg-gray-300 rounded p-20 mt-20 mb-40 h-[800px] w-[940px]">
                <form className=" flex flex-col  gap-4 p-8 bg-gray-200 border rounded h-[600px] w-[500px]" >
                    <div>
                        <img className="w-[100px]" src={formData.image} alt={formData.image} />
                    </div>
                    <label>nome
                        <input type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border p-2 rounded w-full " />
                    </label>
                    <label >cognome
                        <input type="text"
                            name="cognome"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border p-2 rounded w-full " />
                    </label>
                    <label >età
                        <input type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="border p-2 rounded w-full " />
                    </label>
                    <label >email
                        <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-2 rounded w-full " />
                    </label>
                    <label >phone
                        <input type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border p-2 rounded w-full " />
                    </label>

                    <button onClick={handleLogout}>logout</button>
                </form>
            </div>
        </div>
    )
}

export default Profile