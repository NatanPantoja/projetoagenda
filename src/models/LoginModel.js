const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true },
  descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

// Essa parte é para validação do cadastro
class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register() {
    this.valida();
    if (this.errors.length > 0) return;
  };

  valida() {
    this.cleanUp();
    // Validação
    // O e-mail precisa validado para validar o email foi usado um 'npm i validator'
    if (!validator.isEmail(this.boby.email)) this.errors.push('E-mail inválido');
    // A sehna precisa ter 8 e 16 
    if (this.body.password.length < 3 || this.body.password.length > 16) {
      this.body.errors.push('A senha precisa ter entre 8 e 16 caracteres.');
    }

  };

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') { // se não form um string vou converte em uma string vazia
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}


module.exports = Login;
