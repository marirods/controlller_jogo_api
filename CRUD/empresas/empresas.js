async function postEmpresas(empresas){
    console.log(contato)
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