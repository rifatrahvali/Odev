document.addEventListener("DOMContentLoaded", function (yuklendi) {
    // Elementlerimizi seçelim
    let yemekAdi = document.getElementById("yemekAdi");
    let yemekTarif = document.getElementById("yemekTarif");
    let searchInput = document.getElementById("search");
    let yemekBaslik = document.getElementById("yemekBaslik");
    let tarifDetay = document.getElementById("tarifDetay");
    let icerikListesi = document.getElementById("icerikListesi");
    let urunListesi = document.getElementById("urunListesi");

    // kullanıcı yemek eklemek istiyecek
    let yemek = {
        yemekAdi: "",
        yemekTarif: "",
        icindekiler: [],
    };
    let icindekiler = [];


    // localstorage'dan urunleri getirelim
    let urunler = JSON.parse(localStorage.getItem("urunler"));
    if (urunler == null) {
        urunler = [];
    }
    urunListele(urunler); // getirdik.

    yemekAdi.addEventListener("input", function (yemekAdiTiklandi) {
        let yemekAdiName = this.value;

        if (yemekAdiName.length > 1) {
            yemekBaslik.textContent = yemekAdiName;
        } else {
            yemekAdiName.textContent = "Yemek Başlığıdır."
        }

        //
        yemek.yemekAdi = yemekAdiName;
    });

    yemekTarif.addEventListener("input", function (yemekTarifTiklandi) {
        let detay = this.value;
        if (detay.length > 1) {
            tarifDetay.textContent = detay;
        } else {
            tarifDetay.textContent = "Yemek Başlığıdır."
        }
        yemek.yemekTarif = detay;
    });

    // malzeme - ürün listesi bölümündeki arama çubuğunu kullanacağız.
    searchInput.addEventListener("input", function (aramaFiltresi) {
        // this = searchInput değişkenini işaret ediyor.
        let searchValue = this.value;

        let filtrelenmisUrunler = urunler.filter(function (urun, index, array) {
            // urun parametresinde searchValueden gelen değerleri küçük harfe dönüştürerek 
            // geri döndür.
            return urun.toLowerCase().includes(searchValue.toLowerCase());
        });

        // Arama yaptığımız ürünleri listeleyelim.
        urunListele(filtrelenmisUrunler);
    });

    // malzemelerimizi / ürünlerimizi localstorage'dan listeleyelim.


    document.body.addEventListener("click", function (documentBClick) {
        // hangi elemente tıklandıysa html tag'ine ulaştık.
        let element = documentBClick.target;

        let elementIsProductAdd = element.className.includes("add-product");
        if (elementIsProductAdd) {
            // + element'ine tıklandığında
            let product = {
                id: element.id,
                miktar: "",
                name: urunler[element.id],
            };
            icindekiler.unshift(product);
            urunIcerigiListele(icindekiler);
        } else {

        }

    });

    // yemek içeriğini miktarını listeleyen bir fonksiyon
    // ikinci bölümdeki + butonuna tıkladığımızda 3. bölüme miktarıyla ekleyeceğiz


    function urunListele(urunler) {
        if (urunler == null || Array.isArray(urunler) && urunler.length < 1) {
            // Listede ürün olmadığına dair bilgi verelim.

            // DOM ile li element oluşturup müdahale edelim.
            let liElement = document.createElement("li");
            liElement.className = "list-group-item bg-warning text-white"
            liElement.textContent = "Henüz listede bir malzeme - ürün yok."

            // malzeme ekleme sayfasındaki sağ taraftaki ul li elemanları
            // let icerikListesi = document.getElementById("icerikListesi");
            urunListesi.innerHTML = "";
            urunListesi.appendChild(liElement); // ul içerisine varsa li'leri ekleyelim
        } else {
            // malzeme - ürün listesinin içerisinde elemanlarımız var ise
            urunListesi.innerHTML = "";
            // foreach ile elaman sayısı kadar li oluşturacak
            urunler.forEach(function (urun, index, array) {

                // li elementini oluşturduk
                let liElement = document.createElement("li");
                liElement.className = "list-group-item";
                liElement.textContent = urun;

                // i elementini oluşturduk
                let iElement = document.createElement("i");
                iElement.className = "bi bi-plus-lg add-product float-end";
                iElement.id = index;

                urunListesi.appendChild(liElement);
                liElement.appendChild(iElement);
            });
        }
    }

    function urunIcerigiListele(urunler) {
        if (urunler == null || Array.isArray(urunler) && urunler.length < 1) {
            let liElement = document.createElement("li");
            liElement.className = "list-group-item bg-warning text-white"
            liElement.textContent = "Henüz listede bir malzeme - ürün yok."

            // malzeme ekleme sayfasındaki sağ taraftaki ul li elemanları
            // let icerikListesi = document.getElementById("icerikListesi");
            icerikListesi.innerHTML = "";
            icerikListesi.appendChild(liElement); // ul içerisine varsa li'leri ekleyelim
        } else {
            icerikListesi.innerHTML = "";
            urunler.forEach(function (urun, index, array) {
                let liElement = document.createElement("li");
                liElement.className = "d-flex justify-content-between";

                let spanElement = document.createElement("span");

                let iElement = document.createElement("i");
                iElement.className = "bi bi-trash delete-product-content";

                let labelElement = document.createElement("label");
                labelElement.setAttribute("for", "miktar-" + urun.id);
                labelElement.textContent = urun.name;

                spanElement.appendChild(iElement);
                spanElement.appendChild(labelElement);

                let inputElement = document.createElement("input");
                inputElement.placeholder = "miktar";
                inputElement.className = "float-end border-0 border-bottom border-black";
                inputElement.id = "miktar" + urun.id;

                liElement.appendChild(spanElement);
                liElement.appendChild(inputElement);
                icerikListesi.appendChild(liElement);

            });



        }
    }
});