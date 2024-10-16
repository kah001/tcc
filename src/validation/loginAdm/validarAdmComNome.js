
export default function validarAdmComNome(req) {
    if (!req.body.nome)
        throw new Error('O parâmetro nome que está sendo alterado está inválido')

    if (!req.body.senha)
        throw new Error('O parâmetro senha que está sendo alterado está inválido')

    if (!req.params.nome)
        throw new Error('O parâmetro nome está inválido')
}