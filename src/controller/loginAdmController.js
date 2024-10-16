import * as service from '../service/loginAdmService.js'
import { gerarToken } from '../utils/jwt.js'
import { Router } from 'express'

import validarAdmCompleto from '../validation/loginAdm/validarAdmCompleto.js'
import validarAdmComNome from '../validation/loginAdm/validarAdmComNome.js'

const endpoints = Router()

endpoints.post('/adm', async (req, resp) => {
    try {
        validarAdmCompleto(req)

        let adm = req.body
        let linhasAfetadas = await service.inserirAdmService(adm)

        if (linhasAfetadas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({
                erro: 'Nenhum registro encontrado'
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }    
})

endpoints.put('/adm/:nome', async (req, resp) => {
    try {
        validarAdmComNome(req)

        let nome = req.params.nome
        let adm = req.body

        let linhasAfetadas = await service.alterarAdmService(adm, nome)

        if (linhasAfetadas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({
                erro: 'Nenhum registro encontrado'
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/adm/entrar', async (req, resp) => {
    try {
        validarAdmCompleto(req)

        let a = req.body
        let adm = await service.validarAdmService(a)

        let token = gerarToken(adm)
        resp.send({
            "token": token
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints