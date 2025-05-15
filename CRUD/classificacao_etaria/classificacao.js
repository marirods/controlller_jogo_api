async function postClassificacao(classificacoes){
    // console.log(contato)
      const url = 'http://localhost:3030/v1/controle-classificacoes/classificacoes'
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classificacoes)
      }
      const response = await fetch(url, options)

      //ok é verdadeiro se deu certo e falso deu errado
      return response.ok
}



const novaClassificacao = {
    "descricao": "speed-drive",
     "classificacao": "adulto"
}

// postJogo(novoJogo)

 async function getClassificacao(){
    const url = 'http://localhost:3030/v1/controle-classificacoes/classificacoes'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getClassificacaoById(id){
    const url = `http://localhost:3030/v1/controle-classificacoes/classificacoes/${id}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
    
async function putClassificacao(id, classificacoes){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-classificacoes/classificacoes/${id}`
        const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classificacoes)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

const updateClassificacao = {
    "descricao": "RPG",
     "classificacao": "Adulto"
}

async function deleteClassificacao(id){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-classificacoes/classificacoes/delete/${id}`
        const options = {
        method: 'DELETE',
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}