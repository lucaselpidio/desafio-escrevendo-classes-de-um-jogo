class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        switch(true){

            case this.tipo === "Mago":
            console.log(`O ${this.tipo} atacou usando magia`);
            break;

            case this.tipo === "Guerreiro":
            console.log(`O ${this.tipo} atacou usando espada`);
            break;

            case this.tipo === "Monge":
            console.log(`O ${this.tipo} atacou usando artes marciais`);
            break;

            case this.tipo === "Ninja":
            console.log(`O ${this.tipo} atacou usando shuriken`);
            break;

            default:
            console.log('O herói atacou usando os punhos');
        }
    }
}

let novoHeroi = new Heroi('Geralt De Rivia', 96, "Guerreiro");
novoHeroi.atacar();