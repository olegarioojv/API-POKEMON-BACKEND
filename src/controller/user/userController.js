import login from "../../services/auth/auth.js"
import create from "../../services/user/createUser.js"

const createUser = async (req, res) => {

    const {name, email, password} = req.body

    if (!name || !email || !password) {
        res.status(400)
        res.json({
            message: "Os campos name, email e password é obrigatorio"
        })
        return
    }

    const user = await create(req.body)
  
    res.status(201) 
    res.json ({
        token: user.token
    })

}

const auth = async (req, res) => {
    
    const{email, password} = req.body

    if(!email || !password) {
        res.status(400)
        res.json({
            message: "Os campos email e password são obrigatorios"
        })
        return
    }

   const user =  await login(email, password)

   if(!user){
    res.status(401)
    res.json({
        message: "Email ou senha invalidos"
    })
    return
   }

   res.json({
    message: "Autenticado com sucesso",
    token: user.token
   })
}

export default {
    createUser,
    auth
}