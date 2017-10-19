class Mobil {
  constructor(nama,merk,harga,kecepatan) {
    this.nama = nama;
    this.merk = merk;
    this.harga = harga;
    this.kecepatan = kecepatan;
  }

  getKeterangan() {
    return 'Nama mobil : ' + this.nama + ' Merk mobil : ' + this.merk + ' Harga mobil : ' + this.harga + ' Kecepatan : ' + this.kecepatan;
  }

  powerup(nilai) {
    this.kecepatan = this.kecepatan + nilai;
    return this;
  }
}

var livina = new Mobil('Livina', 'Nissan', 120000000,200);
var terios =  new Mobil('Terios','Daihatsu',150000000,200);
var avanza = new Mobil('Avanza','Toyota',170000000,200);

console.log(terios.getKeterangan());
console.log(livina.getKeterangan());
console.log(avanza.getKeterangan());

console.log(terios.powerup(200));
console.log(livina.powerup(300));
console.log(avanza.powerup(400));
