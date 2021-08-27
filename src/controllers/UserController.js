const User = require('../models/User')

module.exports = {
  async postUser(request, response) {
    const data = request.body

    const user = await User.findOne({ cpf: data.cpf })

    if (!user) {
      try {
        const userCreate = await User.create(data)

        if (userCreate) {
          response.status(200).json({ message: 'Usuário criado com sucesso.' })
        }
      } catch (error) {
        response.status(400).json({
          message: `Não foi possível criar o usuário: ${error}`
        })
      }
    } else {
      response.status(400).json({ message: 'Usuário já cadastrado.' })
    }
  }
}
