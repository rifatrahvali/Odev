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

    // Malzemeleri - Ürünleri Sağ taraftaki card body içerisinde listeleyelim.
    // eğer urunler listem boş veya daha önce eklenmediyse çalışacaktır.
    if (urunler == null || Array.isArray(urunler) && urunler.length<1) {
        // Listede ürün olmadığına dair bilgi verelim.

        // DOM ile li element oluşturup müdahale edelim.
        let liElement = document.createElement("li");
        liElement.className = "list-group-item bg-warning text-white"
        liElement.textContent = "Henüz listede bir malzeme - ürün yok."

        // malzeme ekleme sayfasındaki sağ taraftaki ul li elemanları
        let urunListesi = document.getElementById("urunListesi");
        urunListesi.innerHTML = "";
        urunListesi.appendChild(liElement); // ul içerisine varsa li'leri ekleyelim
    }else{
        // malzeme - ürün listesinin içerisinde elemanlarımız var ise
        urunListesi.innerHTML = "";
        // foreach ile elaman sayısı kadar li oluşturacak
        urunler.forEach(function (urun,index,array) {

            // li elementini oluşturduk
            let liElement = document.createElement("li");
            liElement.className = "list-group-item";
            liElement.textContent = urun;

            // i elementini oluşturduk
            let iElement = document.createElement("i");
            iElement.className = "bi bi-trash delete-product float-end";
            iElement.id = index;
            
            urunListesi.appendChild(liElement);
            liElement.appendChild(iElement);
        });
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

