
class ToDo {
    Texto
    Prioridade
    Feito = false
    constructor(Texto, Prioridade){
        this.Texto = Texto
        this.Prioridade = Prioridade
    }
}
function CriarTodo(Texto, Prioridade, array) {
    let objetoTodo = new ToDo(Texto, Prioridade)
    if (!array.some(x => x.Texto == Texto))
        array.push(objetoTodo)
    return objetoTodo
}

function AtualizarToDo(textoAntigo, textoNovo, array){
    let atualizado = false
    array.forEach(todo => {
        if(todo.Texto == textoAntigo) {
            todo.Texto = textoNovo
            atualizado = true
        }
    })
    return atualizado
}

function ConcluirToDo(array, texto) {
    let concluido = false
    array.forEach(todo => {
        if(todo.texto == texto){
            if(todo.Feito)
            todo.Feito = false
        else {
            todo.Feito = false
        }
        concluido = true
        }
    })
    return concluido
}
function ExcluirToDo(array,texto){
    let index
    let removido = false
    array.forEach(todo => {
        if(todo.texto == texto) {
            index = array.indexOF(todo)
            removido = true
        }
    })
    array.splice(index,1)
    return removido
}
function PesquisarToDo(array,texto){
    let pesquisa = false
    array.forEach(todo => {
        if(todo.texto.includes(texto)){
            pesquisa = true
        }
    })

    return pesquisa
}

function OrdenarCrescente(array){
    array.sort((a,b) => a.Prioridade - b.Prioridade)
    return array
}
function OrdenarDecrescente(array) {
    array.sort((a,b) => b.Prioridade - a.Prioridade)
    return array
}
