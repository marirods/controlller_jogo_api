async function postIdiomas(idioma){
    // console.log(contato)
        const url = 'http://localhost:3030/v1/controle-idioma/idioma'
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(idioma)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response.ok
}

const novoIdioma = 
{
    "idioma": "Polonês"
}

async function getIdiomas(){
    const url = 'http://localhost:3030/v1/controle-idioma/idioma'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getIdiomasById (id){
    const url = `http://localhost:3030/v1/controle-idioma/idioma/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function putIdiomas(id, idioma){
    // console.log(contato)
        const url = `http://localhost:3030/v1/controle-idioma/idioma/${id}`
        const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(idioma)
        }
        const response = await fetch(url, options)

        //ok é verdadeiro se deu certo e falso deu errado
        return response
}

const updateIdiomas = 
{
    "idioma": "Polonês"
}


async function deleteIdiomas(id){
    // console.log(contato)
    const url = `http://localhost:3030/v1/controle-idioma/idioma/delete/`
    const options = {
    method: 'DELETE',
    }
    const response = await fetch(url, options)

    //ok é verdadeiro se deu certo e falso deu errado
    return response.ok
}
