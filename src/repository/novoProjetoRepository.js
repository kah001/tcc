import con from "./connection.js"

export async function inserirNovoProjeto() {
    const comando = `
    
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info.affectedRows
}

export async function consultarProjetos() {
    const comando = `
    
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info 
}

export async function alterarProjeto() {
    const comando = `
    
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info.affectedRows
}

export async function deletarProjeto() {
    const comando = `
    
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info.affectedRows
}

export async function consultarProjetoPorId() {
    const comando = `
    
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info
}