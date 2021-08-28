const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  nome: String,
  profissao: String,
  identidade: String,
  cpf: String,
  email: String,
  telefone: String,
  dataDeNascimento: String,
  corDaPele: String,
  sexo: String,
  cep: String,
  logradouro: String,
  numero: String,
  bairro: String,
  cidade: String
})

module.exports = mongoose.model('User', UserSchema)
