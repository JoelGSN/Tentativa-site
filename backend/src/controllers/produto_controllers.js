import * as produtoService from '../services/produtoService.js'
export async function listar (req,res) {
    
const produto = await produtoService.listarproduto()
    
    return res.status(200).json(produto)

}

export async function buscarid (req,res) {
const produto = await produtoService.buscarcPorId(req.params.id)
   if(!produto){
    return res.status(404).json({Message: 'O Produto não foi encontrado.'} )
}
    return res.status(200).json(produto)
}

export async function cadastrar (req,res)  {
    const produto = await produtoService.cadastrarproduto(req.body)
    return res.status(201).json(produto)
}

export async function remover(req, res) {
    const produto = await produtoService.removerproduto(req.params.id)
    if(!produto){
        return res.status(404).json({ Message: 'O Produto não foi encontrado.'})
    }
    return res.status(200).json(produto)
}

export async function atualizar(req, res) {
    const produto = await produtoService.atualizarproduto(req.params.id, req.body)
    if(!produto) {
        return res.status(404).json({Message: 'O Produto não foi encontrado.'})

    }
    return res.status(200).json(produto)

    
}

export async function vender(req, res) {
    const { id } = req.params
    const { quantidade } = req.body
    const produtoAtualizado = await produtoService.venderproduto(id, quantidade)

    return res.json(produtoAtualizado)
}

export async function comprar(req, res) {
    const { id } = req.params
    const { quantidade } = req.body
    const produtoAtualizado = await produtoService.comprarproduto(id, quantidade)

    return res.json(produtoAtualizado)
}