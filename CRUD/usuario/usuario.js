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
