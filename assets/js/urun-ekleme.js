// DOM Elementi Konuları:
// doküman(sayfa) içerisinde (elementler ile) işlem yapacağız. 

// içerideki tüm elementlerin dinlenmesi - sayfanın yüklenmesini dinler
document.addEventListener("DOMContentLoaded",function(ee){
    // Sayfa yüklendiğini belirtir.
    console.log("sayfa yüklendi");

    // Malzeme - Ürün Ekle butonunu seçtik. Selector
    let btnUrunEkle = document.getElementById("btnUrunEkle");
    let urunler = [];

    //btnUrunEkle Butonu İşlemleri - malzeme ekleme için.
    btnUrunEkle.addEventListener("click",function (e) {
        let urunAdi = document.getElementById("urunAdi").value;
        urunAdi = urunAdi.trim();
        urunAdi = urunAdi.toLowerCase();
        // listede ürün - malzeme kontrolü
        let isAdded = urunler.includes(urunAdi);
        if (isAdded) {
            alert("ürün - malzeme daha önce eklenmiştir.");
        }else{
            urunler.push(urunAdi);
            // Localstorage'a aktaralım
            localStorage.setItem("urunler",JSON.stringify(urunler));
        }
    });
})

