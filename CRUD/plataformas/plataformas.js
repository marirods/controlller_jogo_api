async function postPlataformas(plataforma){
    // console.log(contato)
      const url = 'http://localhost:3030/v1/controle-plataformas/plataformas'
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plataforma)
      }
      const response = await fetch(url, options)

      //ok é verdadeiro se deu certo e falso deu errado
      return response.ok
}



const novaPlataforma = {
    "nome": "Nexus Dreams",
    "fabricante": "DreamCircuit",
    "dispositivo": "PC, SmartTV"
  }

// postJogo(novoJogo)

 async function getPlataforma(){
    const url = 'http://localhost:3030/v1/controle-plataformas/plataformas'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getPlataformaById(id){
    const url = `http://localhost:3030/v1/controle-plataformas/plataformas/${id}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
    
async function putPlataforma(id, plataforma){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-plataformas/plataformas/${id}`
        const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(plataforma)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

const updatePlataforma = {
    "nome": "Nexus Dreams",
    "fabricante": "DreamCircuit",
    "dispositivo": "Tablet, SmartTV"
  }


async function deletePlataforma(id){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-plataformas/plataformas/delete/${id}`
        const options = {
        method: 'DELETE',
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}