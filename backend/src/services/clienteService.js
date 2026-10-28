import bd_cliente from '../models/bd_cliente.js'

export async function listarcliente() {
    return await bd_cliente.findAll({ order: [['id', 'ASC']] })

}

// export async function buscarcPorId(id) {
//     return await bd_cliente.findByPk(id)

// }

export async function buscarcPorId(cpfoucnpj) {
    return await bd_cliente.findOne({
        where: {
            cpfoucnpj
        }
    })




}

export async function cadastrarcliente(dados, res) {

    const { nome, cpfoucnpj, rua, numero, cidade, uf } = dados

    // if (numero <= 10 || numero > 99) {
    //     return res.status(404).json({ Message: 'Digite número válido.' })
    // }
    // const proi = [13, 14, 16, 18, 21, 22, 27, 29, 30, 35, 55, 70, 80]
    // if (proi.includes(numero)) {
    //     return res.status(404).json({ message: 'Numero não permitido.' })
    // }

    const addcliente = await bd_cliente.create({ nome, cpfoucnpj, rua, numero, cidade, uf })
    return res.status(200).json(addcliente)


}

export async function removercliente(id) {
    const cliente = await buscarcPorId(id)
    if (cliente) {
        const cpfOuCnpj = cliente.cpfoucnpj

        cliente.destroy()
    }

    return cliente

}

export async function atualizarcliente(id, dados) {
    const { nome, cpfoucnpj, rua, numero, cidade, uf } = dados

    const cliente = await buscarcPorId(id)
    if (cliente) {
        const cpfOuCnpj = cliente.cpfoucnpj
        cliente.update({ nome, cpfoucnpj, rua, numero, cidade, uf })
    }
    return cliente

}

