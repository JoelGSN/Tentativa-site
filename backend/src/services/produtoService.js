import bd_produto from '../models/bd_produto.js'

export async function listarproduto() {
    return await bd_produto.findAll({ order: [['id', 'ASC']] })

}

export async function buscarcPorId(id) {
    return await bd_produto.findByPk(id)

}

export async function cadastrarproduto(dados) {
    const { produto, tipo, cor, quantidade, preco } = dados
    return bd_produto.create({ produto, tipo, cor, quantidade, preco})

}

export async function removerproduto(id) {
    const produtoec = await buscarcPorId(id)
    if(produtoec){
        produtoec.destroy()
        return produtoec
    }

    return null
    
}

export async function atualizarproduto(id, dados) {
    const { produto, tipo, cor, quantidade, preco} = dados

       const produtoec = await buscarcPorId(id)
if(produtoec){
    produtoec.update({ produto, tipo, cor, quantidade, preco})
    return produtoec
}

}

export async function venderproduto(id, qtdvendida) {
    const produtovar = await bd_produto.findByPk(id)
    const novaqtd = produto.quantidade - qtdvendida
    await produtovar.update({ quantidade: novaqtd })
    return produtovar
}


export async function comprarproduto(id, qtdcomprada) {
    const produtovar = await bd_produto.findByPk(id)
    const novaqtd = produto.quantidade + qtdcomprada
    await produtovar.update({ quantidade: novaqtd })

    return produtovar
}

