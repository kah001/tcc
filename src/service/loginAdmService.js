import * as db from '../repository/loginAdmRepository.js'

export async function inserirAdmService(adm) {
    let registros = await db.inserirAdm(adm)

    return registros
}

export async function alterarAdmService(adm, nome) {
    let linhasAfetadas = await db.alterarAdm(adm, nome)

    return linhasAfetadas
}

export async function validarAdmService(adm) {
    let registros = await db.validarAdm(adm)

    return registros
}