const api = require('../services/api')

module.exports = {
  async getLocation(request, response) {
    const { cep } = request.query

    if (!cep) {
      response.status(400).json({ message: 'CEP é obrigatório!' })
    }

    try {
      const { data } = await api.get(`${cep}/json`)

      response.status(200).json(data)
    } catch (error) {
      response.status(400).json({
        message: 'CEP não encontrado, preencha o campo por favor.'
      })
    }
  }
}
