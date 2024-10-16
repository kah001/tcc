import * as db from '../repository/novoProjetoRepository.js'

export async function inserirNovoProjetoService(projeto) {
    let id = await db.inserirNovoProjeto(projeto)

    return id
}

export async function consultarProjetosService() {
    let registros = await db.consultarProjetos()

    return registros
}

export async function consultarProjetoPorId(id) {
    let registros = await db.consultarProjetoPorId(id)

    return registros
}

export async function alterarProjetoService(projeto, id) {
    let linhasAfetadas = await db.alterarProjeto(projeto, id)

    return linhasAfetadas
}

export async function deletarProjetoService(id) {
    let linhasAfetadas = await db.deletarProjeto(id)

    return linhasAfetadas
}