// alert("ola")

class Carro{
    constructor(nome , tPneu , motor , kmPer , marca , foto){
    this.nome = nome ;
    this.tPneu = tPneu ;
    this.motor = motor ;
    this.kmPer = kmPer ;
    this.marca = marca ;
    this.foto = foto ;
    // this = alguma coisa
    }
}

var carros = [];

carros.push(new Carro("Toyota Supra", "Esportivo", "232", 0, "Toyota", "https://media.toyota.com.br/ac6fefc0-c419-457e-bba7-0d1b7938e3ca.jpeg"))
carros.push(new Carro("BMW M4", "Esportivo", "280", 2, "BMW", "https://www.bmw.com.br/content/dam/bmw/common/all-models/m-series/x2-m35i-xdrive/navigation/bmw-x-series-x2-m35i-modelfinder.png/jcr:content/renditions/cq5dam.resized.img.890.medium.time1696863142188.png"))
carros.push(new Carro("Audi R8", "Esportivo", "320", 3, "Audi", "https://s2-autoesporte.glbimg.com/EWGcFdcTuSsYeouAfsvtFsWB6UA=/0x0:1300x792/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/w/h/ksAU8xQ7Kj5cqys4YSDw/audi-r8gt-03.jpg"))
console.log(carros)

// lenght = imprime tudo 

for(var i = 0; i < carros.length ; i++){
    document.getElementById("resultados").innerHTML += `
    <div>
        <h1 class= text-center>${carros[i].nome}</h1>
        <p>Marca: ${carros[i].marca}</p>
        <p>Tipo do pneu: ${carros[i].tPneu}</p>
        <p>Motor: ${carros[i].motor}</p>
        <p>Taxa por quilometro: ${carros[i].kmPer}</p>
        <img src="${carros[i].foto}" class="img-thumbnail" ></img>
    </div>
    `
}