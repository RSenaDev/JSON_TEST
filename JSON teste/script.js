[
    {
    "nome" : "Ryan",
    "idade" : 21,
    "Esta trabalhando?" : true,
    "hobbies" : ["Cagar", "Comer", "Dormir"],
    "Detalhes-Profissão" : {
        "Cargo" :"Pladur",
        "Empresa" : "PLaco"
    }}
]

const obs = [
    {
        pessoa: {
            nome : "Ryan",
            idade: 21
        },
        arroto : 123
    }]

    console.log(obs)
//Converter objeto para JSON
const json = JSON.stringify(obs)

console.log(json)


//Converter JSON para objeto
const objData = JSON.parse(json)

console.log(objData)

objData.map((pessoa) =>{
    console.log(pessoa.idade)
})