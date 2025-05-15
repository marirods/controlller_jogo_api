async function postCategoria(categorias){
    // console.log(contato)
      const url = 'http://localhost:3030/v1/controle-categorias/categorias'
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categorias)
      }
      const response = await fetch(url, options)

      //ok é verdadeiro se deu certo e falso deu errado
      return response.ok
}



const novaCategoria = {
    "nome": "Daniela",
     "genero": "Masculino"
}

// postJogo(novoJogo)

 async function getCategoria(){
    const url = 'http://localhost:3030/v1/controle-categorias/categorias'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getCategoriaById(id){
    const url = `http://localhost:3030/v1/controle-categorias/categorias/${id}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
    
async function putCategoria(id, categoria){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-categorias/categorias/${id}`
        const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

const updateCategoria = {
    "nome": "Daniela",
     "genero": "Feminino"
}


async function deleteCategoria(id){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-categorias/categorias/delete/${id}`
        const options = {
        method: 'DELETE',
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}


