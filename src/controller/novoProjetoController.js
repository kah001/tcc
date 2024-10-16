import { Router } from "express";
import { autenticar } from "../utils/jwt";

const endpoints = Router()

endpoints.post('/projeto', autenticar, async (req, resp) => {
    try {
        let projeto = req.body
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/projeto', autenticar, async (req, resp) => {
    try {

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/projeto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/projeto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
        let projeto = req.body
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/projeto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})