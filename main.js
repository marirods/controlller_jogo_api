'use strict'
//jogo//


//cadastrar jogo
async function postJogo(jogo){
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

 async function getJogo(){
    const url = 'http://localhost:3030/v1/controle-jogos/jogo'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getJogoById (id){
    const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
    
async function putJogo(id, jogo){
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


async function deleteJogo(id){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-jogos/jogo/delete/${id}`
        const options = {
        method: 'DELETE',
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

/****************************************************************************************************************************************************************************** */
//empresas//

async function postEmpresas(empresas){
    // console.log(contato)
        const url = 'http://localhost:3030/v1/controle-empresas/empresas'
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(empresas)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

const novaEmpresa = 
    {
        "nome": "Artemis Luxuries",
        "segmento": "Moda",
        "pais_origem": "França"
    }

async function getEmpresas(){
    const url = 'http://localhost:3030/v1/controle-empresas/empresas'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getEmpresasById (id){
    const url = `http://localhost:3030/v1/controle-empresas/empresas/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function putEmpresas(id, empresas){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-empresas/empresas/${id}`
        const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(empresas)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response
}

const updateEmpresas = 
    {
        "nome": "Luxuries",
        "segmento": "Moda",
        "pais_origem": "França"
    }



async function deleteEmpresas(id){
    // console.log(contato)
    const url = `http://localhost:3030/v1/controle-empresas/empresas/delete/${id}`
    const options = {
    method: 'DELETE',
    }
    const response = await fetch(url, options)

    //ok é verdadeiro se deu certo e falso deu errado
    return response.ok
}

/********************************************************************************************************************************************************************************* */

//usuario

async function postUsuario(usuarios){
    // console.log(contato)
        const url = 'http://localhost:3030/v1/controle-usuario/usuario'
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarios)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

const novoUsuario = 
    {
    "nome":  "Lucas Andrade" ,                    
    "email":  "lucas@email.com" ,                  
    "username":   "lucas_a"               
    }

async function getUsuario(){
    const url = 'http://localhost:3030/v1/controle-usuario/usuario'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getUsuarioById (id){
    const url = `http://localhost:3030/v1/controle-usuario/usuario/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function putUsuario(id, usuarios){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-usuario/usuario/${id}`
        const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarios)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response
}

const updateUsuario = 
{
    "nome":  "Lucas Melo" ,                    
    "email":  "lucas@email.com" ,                  
    "username":   "lucas_a"               
    }



async function deleteUsuario(id){
    // console.log(contato)
    const url = `http://localhost:3030/v1/controle-usuario/usuario/delete/${id}`
    const options = {
    method: 'DELETE',
    }
    const response = await fetch(url, options)

    //ok é verdadeiro se deu certo e falso deu errado
    return response.ok
}

/********************************************************************************************************************************************************************************* */

//plataformas

// async function postPlataformas(plataforma){
//     // console.log(contato)
//       const url = 'http://localhost:3030/v1/controle-plataformas/plataformas'
//       const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(plataforma)
//       }
//       const response = await fetch(url, options)

//       //ok é verdadeiro se deu certo e falso deu errado
//       return response.ok
// }



// const novaPlataforma = {
//         "nome": "Mario Bross atualizado",
//         "data_lancamento": "1996-06-03",
//         "versao": "1,0",
//         "tamanho": "500KB",
//         "descricao": "Jogo bem legal para diversão",
//         "foto_capa": "http://foto.jpg",
//         "link": "http://downloadJogo.zip"
//     }

// // postJogo(novoJogo)

//  async function getJogo(){
//     const url = 'http://localhost:3030/v1/controle-jogos/jogo'
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }

// async function getJogoById (id){
//     const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//         return data
//     }
    
// async function putJogo(id, jogo){
//     // console.log(contato)
//         const url = `http://localhost:3030/v1/controle-jogos/jogo/${id}`
//         const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jogo)
//         }
//         const response = await fetch(url, options)

//         //ok é verdadeiro se deu certo e falso deu errado
//         return response.ok
// }

// const updateJogo = {
//     "nome": "Mario Bross0001",
//     "data_lancamento": "1996-06-03",
//     "versao": "1,0",
//     "tamanho": "500KB",
//     "descricao": "Jogo bem legal para diversão",
//     "foto_capa": "http://foto.jpg",
//     "link": "http://downloadJogo.zip"
// }


// async function deleteJogo(id){
//     // console.log(contato)
//         const url = `http://localhost:3030/v1/controle-jogos/jogo/delete/${id}`
//         const options = {
//         method: 'DELETE',
//         }
//         const response = await fetch(url, options)

//         //ok é verdadeiro se deu certo e falso deu errado
//         return response.ok
// }

