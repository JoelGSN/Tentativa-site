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
const nmcv = document.getElementById("nomecv")
const qtdcv = document.getElementById("quantidadecv")
//\\
//\\
const campo = document.getElementById('filtro');
const dadosrl = document.getElementById("listar")


//ABA DE RELATÓRIOS INICIO


//PARTE DOS BOTÕES INICIO

function cadcl() {
    campo.value = "cadcl";
    relatorio();
}
function cadp() {
    campo.value = "cadp";
    relatorio();
}
function comp() {
    campo.value = "compra";
    relatorio();
}
function vend() {
    campo.value = "venda";
    relatorio();
}

//PARTE DOS BOTÕES FIM

//PARTE DO INNER INICIO

function relatorio() {
    if (campo.value === "cadcl") {

        function listarcli() {
            dadosrl.innerHTML = '<== Cadastrados ==>'
            for (let cliente of clientes) {
                dadosrl.innerHTML += `<p>Nome do Cliente: ${cliente.nome}   ||   CPF: ${cliente.cpf}</p>`
            }
        }
        listarcli()
    } else {
        if (campo.value === "cadp") {
            function listarpdi() {
                dadosrl.innerHTML = '<== Cadastrados ==>'
                for (let produto of produtos) {
                    dadosrl.innerHTML += `<p>Nome do Produto: ${produto.nome}   ||   Quantidade: ${produto.quantidade}</p>`
                }
            }
            listarpdi()
        } else {
            dadosrl.innerHTML = '<p>Selecione uma opção acima</p>';
        }
    }
}

relatorio()
//PARTE DO INNER FIM



//ABA DE RELATÓRIOS FIM



//ABA DE CLIENTES INICIO

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
                    alert("Cadastro Efetuado com Sucesso!!")

                } else alert("Cliente já foi cadastrado!")

            } else alert("deve conter apenas 11 digitos caso for CPF ou 14 digitos caso for CNPJ")

        } else alert("Nome so Aceita Letras , acentos e Espaço!")

    } else alert("Preencha todos os campos!")
    listar()
}


function listarcl() {
    dadoscl.innerHTML = '<== Cadastrados ==>'
    for (let cliente of clientes) {
        dadoscl.innerHTML += `<p>Nome: ${cliente.nome} || CPF: ${cliente.cpf}</p>`
    }
}


//ABA DE CLIENTES FIM

//ABA DE PRODUTOS INICIO


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


//ABA DE PRODUTOS FIM



//FUNÇÕES GERAIS INICIO

function listar() {
    if (uf) {
        listarcl()
    } else {
        listarpd()
    }
}
listar();



//Movimentação Clientes inicio

function buscliente() {
    let existe = false
    let cliente = null
    for (let c of clientes) {
        if (c.cpf == cpf.value) {
            cliente = c
            existe = true
            break;
        }
    }
    if (existe) {
        alert("Cliente " + cliente.nome + " Localizado")
        // nomebuscarcliente.value = cliente.nome
        // ruabuscarcliente.value = cliente.rua
        // bairrobuscarcliente.value = cliente.bairro
        // numerobuscarcliente.value = cliente.numero
        // ufbuscarcliente.value = cliente.uf

        nomec.value = cliente.nome;
        cpf.value = cliente.cpf;
        rua.value = cliente.rua;
        numero.value = cliente.numero;
        uf.value = cliente.uf;

    } else alert("Cliente Não encontrado")
}

function alterarcl() {

    let existe = false;
    for (let cliente of clientes) {
        if (cliente.cpf === cpf.value) {
            existe = true;

            cliente.nome = nomec.value;
            cliente.rua = rua.value;
            cliente.numero = numero.value;
            cliente.uf = uf.value;

            break;
        }
    }
    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Alterado");
}

function clidelete() {
    // 1. Atribui o resultado direto à variável 'i' e pega o .value do input
    let ind = clientes.findIndex(cliente => cliente.cpf === cpf.value);
    console.log("primeiro " + ind)
    // 2. Verifica se encontrou (findIndex retorna -1 se não achar)
    if (ind !== -1) {
        // 3. Remove apenas 1 item na posição 'i'
        console.log("segundo " + ind)
        clientes.splice(ind, 1);

        // 4. Salva a lista atualizada e atualiza a tela
        localStorage.setItem("clientes", JSON.stringify(clientes));
        alert("Cliente excluído com sucesso!");
    } else {
        alert("Cliente não encontrado!");
    }

    listar();
}


//Movimentação Clientes fim


//Movimentação Produtos inicio


function comprapd() {

    let existe = false;
    let vlrsoma = Number(qtdcv.value)
    let qtd_novo = 0;

    for (let produto of produtos) {
        if (produto.nome === nmcv.value) {
            existe = true;
            produto.quantidade = Number(produto.quantidade) + vlrsoma
            qtd_novo = produto.quantidade;
            break;
        }
    }
    if (existe) {
        localStorage.setItem("produtos", JSON.stringify(produtos));
        // alert("Alterado de "+qtd_antiga+" para "+ idpd.value+" ou "+produto.quantidade);
        alert("Compra Executada!! Novo Estoque: " + qtd_novo);

    } else {
        alert("Produto não encontrado!");
    }

}




function venderpd() {

    let existe = false;
    let vlrsoma = qtdcv.value
    let qtd_novo = 0;

    for (let produto of produtos) {
        if (produto.nome === nmcv.value) {
            existe = true;
            produto.quantidade = produto.quantidade - vlrsoma
            qtd_novo = produto.quantidade;
            break;
        }
    }
    if (existe) {
        localStorage.setItem("produtos", JSON.stringify(produtos));
        // alert("Alterado de "+qtd_antiga+" para "+ idpd.value+" ou "+produto.quantidade);
        alert("Venda Executada!! Novo Estoque: " + qtd_novo);

    } else {
        alert("Produto não encontrado!");
    }

}


//Movimentação Produtos FIM





//FUNÇÕES GERAIS FIM

