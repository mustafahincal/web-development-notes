/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/

let aracBilgileri;

aracBilgileri = [{
        id: "bmw116d_123",
        model: "bmw 116d",
        yil: 2015,
        renk: "white",
        servisKayitlari: [{
                id: "bmw116d_123_1",
                tarih: "20.01.2016",
                km: 13000,
                toplam_ucret: 800,
                detay: [{
                        id: "bmw116d_123_1_1",
                        aciklama: "yağ değişimi",
                        ucret: 300
                    },
                    {
                        id: "bmw116d_123_1_2",
                        aciklama: "filtre değişimi",
                        ucret: 500
                    }
                ]
            },
            {
                id: "bmw116d_123_2",
                tarih: "20.01.2017",
                km: 28000,
                toplam_ucret: 1300,
                detay: [{
                        id: "bmw116d_123_2_1",
                        aciklama: "yağ değişimi",
                        ucret: 300
                    },
                    {
                        id: "bmw116d_123_2_2",
                        aciklama: "fren hidroliği",
                        ucret: 100
                    }
                ]
            }
        ]
    }, {
        id: "bmw118i_123",
        model: "bmw 118i",
        yil: 2002,
        renk: "black",
        servisKayitlari: [{
                id: "bmw116d_123_1",
                tarih: "20.01.2016",
                km: 13000,
                toplam_ucret: 800,
                detay: [{
                        id: "bmw116d_123_1_1",
                        aciklama: "yağ değişimi",
                        ucret: 300
                    },
                    {
                        id: "bmw116d_123_1_2",
                        aciklama: "filtre değişimi",
                        ucret: 500
                    }
                ]
            },
            {
                id: "bmw116d_123_2",
                tarih: "20.01.2017",
                km: 28000,
                toplam_ucret: 1300,
                detay: [{
                        id: "bmw116d_123_2_1",
                        aciklama: "yağ değişimi",
                        ucret: 300
                    },
                    {
                        id: "bmw116d_123_2_2",
                        aciklama: "fren hidroliği",
                        ucret: 100
                    }
                ]
            }
        ]
    },
    {
        id: "bmw320d_123",
        model: "bmw 320d",
        yil: 2006,
        renk: "red",
        servisKayitlari: [{
                id: "bmw116d_123_1",
                tarih: "20.01.2016",
                km: 13000,
                toplam_ucret: 800,
                detay: [{
                        id: "bmw116d_123_1_1",
                        aciklama: "yağ değişimi",
                        ucret: 300
                    },
                    {
                        id: "bmw116d_123_1_2",
                        aciklama: "filtre değişimi",
                        ucret: 500
                    }
                ]
            },
            {
                id: "bmw116d_123_2",
                tarih: "20.01.2017",
                km: 28000,
                toplam_ucret: 1300,
                detay: [{
                        id: "bmw116d_123_2_1",
                        aciklama: "yağ değişimi",
                        ucret: 300
                    },
                    {
                        id: "bmw116d_123_2_2",
                        aciklama: "fren hidroliği",
                        ucret: 100
                    }
                ]
            }
        ]
    }

]

console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].yil);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayitlari);
console.log(aracBilgileri[0].servisKayitlari[1]);
console.log(aracBilgileri[0].servisKayitlari[1].km);
console.log(aracBilgileri[0].servisKayitlari[0].toplam_ucret);
console.log(aracBilgileri[0].servisKayitlari[0].detay[1].aciklama);


//  console.log(aracBilgileri[1]);
//  console.log(aracBilgileri[2]);