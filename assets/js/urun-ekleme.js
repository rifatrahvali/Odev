// DOM Elementi Konuları:
// doküman(sayfa) içerisinde (elementler ile) işlem yapacağız. 

// içerideki tüm elementlerin dinlenmesi - sayfanın yüklenmesini dinler
document.addEventListener("DOMContentLoaded",function(ee){ //Sayfa yüklendiğinde


    // Malzeme - Ürün Ekle butonunu seçtik. Selector
    let btnUrunEkle = document.getElementById("btnUrunEkle");

    // LOCAL STORAGE'DA MALEZEME ELEMANLARI VARSA URUN LİSTESİNDE GÖRÜNTÜLEYELİM.
    let urunler = JSON.parse(localStorage.getItem("urunler"));
    if (urunler == null) {
        urunler = [];
    }

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

