import User from "../../model/user/User.js"
import bcypt from "bcrypt"



const login = async (email, password) => {

    const user = await User.findOne({
        where: {
            email: email
        }
    })

    if(!user) {
        return false
        // throw new Error("Email ou senha invalidos")
    }

    const match = await bcypt.compare(password, user.password)

    if (!match) {
        return false
    }

    return user

}

export default login