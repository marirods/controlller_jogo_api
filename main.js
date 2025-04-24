
//jogo//


//cadastrar jogo
async function postJogo(jogo){
    // console.log(contato)
      const url = '/v1/controle-jogos/jogo'
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

const novoJogo = 
    {
        "nome": "Mario Bross",
        "data_lancamento": "1996-06-03",
        "versao": "1,0",
        "tamanho": "500KB",
        "descricao": "Jogo bem legal para diversão",
        "foto_capa": "http://foto.jpg",
        "link": "http://downloadJogo.zip"
        }

 async function getJogo(){
    const url = 'http://localhost:8080/v1/controle-jogos/jogo'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getJogoById (id){
    const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
    
    async function putJogo(id, jogo){
        // console.log(contato)
          const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
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
    

    async function deleteJogo(id){
        // console.log(contato)
          const url = `http://localhost:8080/v1/controle-jogos/jogo/delete/${id}`
          const options = {
            method: 'DELETE',
          }
          const response = await fetch(url, options)
    
          //ok é verdadeiro se deu certo e falso deu errado
          return response.ok
    }
    
    
    //empresas//

    async function postEmpresas(empresas){
        // console.log(contato)
          const url = '/v1/controle-jogos/jogo'
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
            const url = 'http://localhost:8080/v1/controle-jogos/jogo'
            const response = await fetch(url)
            const data = await response.json()
            return data
        }
        
        async function getEmpresasById (id){
            const url = `http://localhost:8080/v1/controle-jogos/jogo${id}`
                const response = await fetch(url)
                const data = await response.json()
                console.log(data)
                return data
            }
            
            async function putJogo(id, jogo){
                // console.log(contato)
                  const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
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
            
        
            async function deleteJogo(id){
                // console.log(contato)
                  const url = `http://localhost:8080/v1/controle-jogos/jogo/delete/${id}`
                  const options = {
                    method: 'DELETE',
                  }
                  const response = await fetch(url, options)
            
                  //ok é verdadeiro se deu certo e falso deu errado
                  return response.ok
            }
            