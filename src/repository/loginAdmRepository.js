import con from "./connection.js"

export async function inserirAdm(adm) {
    const comando = `
        INSERT INTO tb_adm (nm_adm, ds_senha)
            VALUES (?, ?)
    `

    let registro = await con.query(comando, [adm.nome, adm.senha])
    let info = registro[0]

    return info.affectedRows
}

export async function alterarAdm(adm, nome) {
    const comando = `
        UPDATE tb_adm
            SET nm_adm = ?, 
                ds_senha = ?
            WHERE nm_adm = ?
    `

    let registros = await con.query(comando, [adm.nome, adm.senha, nome])
    let info = registros[0]

    return info.affectedRows
}


export async function validarAdm(adm) {
    const comando = `
        SELECT nm_adm
            FROM tb_adm
            WHERE nm_adm = ? AND ds_senha = ?
    `

    let registros = await con.query(comando, [adm.nome, adm.senha])
    let info = registros[0]

    return info[0]
}