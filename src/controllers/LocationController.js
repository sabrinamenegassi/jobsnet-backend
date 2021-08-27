const api = require('../services/api')

module.exports = {
  async getLocation(request, response) {
    const { latitude, longitude } = request.query

    if (!latitude || !longitude) {
      response
        .status(400)
        .json({ message: 'Latitude e longitude são obrigatórios!' })
    }

    try {
      const { data } = await api.get('geocode/json', {
        params: {
          key: process.env.API_KEY,
          latlng: `${latitude},${longitude}`
        }
      })

      response.status(200).json({ address: data.results[0].formatted_address })
    } catch (error) {
      response.status(400).json({
        message: 'Endereço não encontrado, preencha o campo por favor.'
      })
    }
  }
}
