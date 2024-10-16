import loginAdmController from './controller/loginAdmController.js'

export default function adicionarRotas(servidor) {
    servidor.use(loginAdmController)
}