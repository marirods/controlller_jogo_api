'use strict'
//jogo//


//cadastrar jogo
export async function postJogo(jogo){
    // console.log(contato)
      const url = 'http://localhost:3030/v1/controle-jogos/jogo'
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo)
      }
      const response = await fetch(url, options)

      //ok é verdadeiro se deu certo e falso deu errado
      return response.ok
}



const novoJogo = {
        "nome": "Mario Bross atualizado",
        "data_lancamento": "1996-06-03",
        "versao": "1,0",
        "tamanho": "500KB",
        "descricao": "Jogo bem legal para diversão",
        "foto_capa": "http://foto.jpg",
        "link": "http://downloadJogo.zip"
    }

postJogo(novoJogo)

 export async function getJogo(){
    const url = 'http://localhost:3030/v1/controle-jogos/jogo'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getJogoById (id){
    const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
    
export async function putJogo(id, jogo){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`
        const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

const updateJogo = {
    "nome": "Mario Bross0001",
    "data_lancamento": "1996-06-03",
    "versao": "1,0",
    "tamanho": "500KB",
    "descricao": "Jogo bem legal para diversão",
    "foto_capa": "http://foto.jpg",
    "link": "http://downloadJogo.zip"
}


export async function deleteJogo(id){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-jogos/jogo/delete/${id}`
        const options = {
        method: 'DELETE',
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}
