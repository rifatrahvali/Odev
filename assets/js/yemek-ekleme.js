document.addEventListener("DOMContentLoaded",function(yuklendi){

    // Elementlerimizi seçelim
    let yemekAdi = document.getElementById("yemekAdi");
    let yemekTarif = document.getElementById("yemekTarif");
    let search = document.getElementById("search");
    let yemekBaslik = document.getElementById("yemekBaslik");
    let tarifDetay = document.getElementById("tarifDetay");
    let icerikListesi = document.getElementById("icerikListesi");
    let urunListesi = document.getElementById("urunListesi");

    // localstorage'dan urunleri getirelim
    let urunler = JSON.parse(localStorage.getItem("urunler"));
    if (urunler == null) {
        urunler =[];
    }
    urunListele(urunler); // getirdik.

    yemekAdi.addEventListener("input",function(yemekAdiTiklandi){
        let yemekAdiName = this.value;

        if (yemekAdiName.length > 1) {
            yemekBaslik.textContent = yemekAdiName;
        }else{
            yemekAdiName.textContent = "Yemek Başlığıdır."
        }
    });

    yemekTarif.addEventListener("input",function(yemekTarifTiklandi){
        let detay = this.value;
        if (detay.length > 1) {
            tarifDetay.textContent = detay;
        }else{
            tarifDetay.textContent = "Yemek Başlığıdır."
        }
    });

    // malzemelerimizi / ürünlerimizi localstorage'dan listeleyelim.
    function urunListele(urunler) {
        if (urunler == null || Array.isArray(urunler) && urunler.length<1) {
            // Listede ürün olmadığına dair bilgi verelim.
    
            // DOM ile li element oluşturup müdahale edelim.
            let liElement = document.createElement("li");
            liElement.className = "list-group-item bg-warning text-white"
            liElement.textContent = "Henüz listede bir malzeme - ürün yok."
    
            // malzeme ekleme sayfasındaki sağ taraftaki ul li elemanları
            // let icerikListesi = document.getElementById("icerikListesi");
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
                iElement.className = "bi bi-plus-lg delete-product float-end";
                iElement.id = index;
    
                urunListesi.appendChild(liElement);
                liElement.appendChild(iElement);
            });
        }
    }

});