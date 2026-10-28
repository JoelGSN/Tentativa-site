const nomec = document.getElementById("nomec")
const cpf = document.getElementById("cpf")
const rua = document.getElementById("rua")
const numero = document.getElementById("numero")
const uf = document.getElementById("uf")
const clientes = JSON.parse(localStorage.getItem("clientes")) || []
const dadoscl = document.getElementById("lista-cliente")
//\\
//\\
const nomep = document.getElementById("nomep")
const tipo = document.getElementById("tipo")
const cor = document.getElementById("cor")
const preco = document.getElementById("preco")
const quantidade = document.getElementById("quantidade")
const produtos = JSON.parse(localStorage.getItem("produtos")) || []
const dadospd = document.getElementById("lista-produto")

//\\
//\\
const idpd = document.getElementById("idcv")
const qtdcv = document.getElementById("quantidadecv")





function cli() {


    if (nomec.value.trim() && cpf.value.trim() && rua.value.trim() && numero.value.trim() && uf.value.trim) {
        if (/^[A-Za-zÁ-ý\s]+$/.test(nomec.value)) {
            if (/^\d{11}$/.test(cpf.value)) {
                let existe = false
                for (let cliente of clientes) {
                    if (cliente.cpf == cpf.value)
                        existe = true
                }
                if (!existe) {
                    const cliente = {
                        nome: nomec.value,
                        cpf: cpf.value,
                        rua: rua.value,
                        numero: numero.value,
                        uf: uf.value
                    }
                    clientes.push(cliente)
                    localStorage.setItem("clientes", JSON.stringify(clientes))

                } else alert("Cliente já foi cadastrado!")

            } else alert("deve conter apenas 11 digitos caso for CPF ou 14 digitos caso for CNPJ")

        } else alert("Nome so Aceita Letras , acentos e Espaço!")

    } else alert("Preencha todos os campos!")
    listar()
}

function pro() {

    console.log("testando")

    if (nomep.value.trim() && tipo.value.trim() && cor.value.trim() && preco.value.trim() && quantidade.value.trim()) {
        if (preco.value > 0) {
            if (quantidade.value >= 0) {

                let existe = false
                for (let p of produtos) {
                    if (p.nome == nomep.value)
                        existe = true
                }
                if (!existe) {
                    const produto = {
                        nome: nomep.value,
                        tipo: tipo.value,
                        cor: cor.value,
                        preco: preco.value,
                        quantidade: quantidade.value
                    }
                    produtos.push(produto)
                    localStorage.setItem("produtos", JSON.stringify(produtos))
                    alert("Produto Cadastrado com sucesso!")

                } else alert("Produto ja Cadastrado!")

            } else alert("Quantidade não pode ser negativa")

        } else alert("Valor não pode ser 0 ou negativo")

    } else alert("Preencha todos os campos do produto")
    listar()
}

function listarpd() {
    dadospd.innerHTML = '<== Cadastrados ==>'
    for (let produto of produtos) {
        dadospd.innerHTML += `<p>Produto: ${produto.nome} || Quantidade: ${produto.quantidade}</p>`
    }
}

function listarcl() {
    dadoscl.innerHTML = '<== Cadastrados ==>'
    for (let cliente of clientes) {
        dadoscl.innerHTML += `<p>Nome: ${cliente.nome} || CPF: ${cliente.cpf}</p>`
    }
}

function listar() {
    if (uf) {
        listarcl()
    } else {
        listarpd()
    }
}
listar();

function buscliente() {
  let existe = false
  let cliente 
  for (let c of clientes) {
    if (c.cpf == cpf.value){
      cliente=c
        existe = true
    }
    
  }
  if (existe) {
    nomebuscarcliente.value = cliente.nome
    ruabuscarcliente.value = cliente.rua
    bairrobuscarcliente.value = cliente.bairro
    numerobuscarcliente.value =cliente.numero
    ufbuscarcliente.value = cliente.uf

  } else alert("Cliente Não encontrado")

  console.log(cliente.cpf)

}

