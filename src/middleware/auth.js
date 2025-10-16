import User from "../model/user/User.js"

const auth = async (req, res, next) => {
    const headers = req.headers
    const xApiKey = headers['x-api-key']

    if(!xApiKey) {
        res.status(401)
        res.json({
            message: "você não esta autorizado"
        })
        return
    }

    const user = await User.findOne({
        where: {
            token: xApiKey
        }
    })

    if(!user) {
        res.status(401)
        res.json({
            message: "você não esta autorizado"
        })
        return
    }

    next()
}

export default auth