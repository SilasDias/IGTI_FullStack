const name = 'Teste de importação' // Expostando variavel

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports = {sum,sub, name};