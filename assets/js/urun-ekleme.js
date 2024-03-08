// DOM Elementi Konuları:
// doküman(sayfa) içerisinde (elementler ile) işlem yapacağız. 

// içerideki tüm elementlerin dinlenmesi - sayfanın yüklenmesini dinler
document.addEventListener("DOMContentLoaded",function(sayfaYuklendi){
    // Sayfa yüklendiğini belirtir.
    console.log("sayfa yüklendi");

    // Malzeme - Ürün Ekle butonunu seçtik. Selector
    let btnUrunEkle = document.getElementById("btnUrunEkle");
    let urunler = [];

    
    btnUrunEkle.addEventListener("click",function (btnUrunEkleTiklandi) {
        // alert("id : btnUrunEkle - tıklandı")

        // urunAdi : text inputu seçtik
        let urunAdi = document.getElementById("urunAdi").value;
        console.log(urunAdi);

        urunler.push[urunAdi];
    });
})

