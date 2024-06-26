class aluno {
   Nome
   Idade
   Nota
        constructor(Nome,Idade,Nota){
            this.Nome = Nome
            this.Idade = Idade
            this.Nota = Nota

        }
}

let arrayAlunos = []

function CadastrarAluno(Nome,Idade,Nota,array){
    let ObjetoAluno = new aluno(Nome,Idade,Nota)
    if(!array.some(x => x.nome == nome))
        array.push(ObjetoAluno)
    return ObjetoAluno  
}

function OrdenarNota(array) {
    array.sort ((a,b) => a.Nota - b.Nota)
    return array
}

function OrdenarIdade(array){
    array.sort((a,b) => b.Idade - a.Idade)
    return array
}


function OrdenarPorNome(array) {
    array.sort((a,b ) => {
        const nomeA = a.Nome.toUpperCase()
        const nomeB = b.Nome.toUpperCase()

        if(nomeA < nomeB){
            return -1;
        }
        if (nomeA > nomeB){
            return 1;
        }
        return 0;
    })
    return array
}

function CalcularMedia(array){
    if (array.length === 0){
        return 0;
    }
    let somaNotas = 0;

    array.forEach((aluno) => {
        somaNotas += Number(aluno.Nota)
    })

    const media = somaNotas / array.length;
    return media;
}