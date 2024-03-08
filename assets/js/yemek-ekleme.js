document.addEventListener("DOMContentLoaded",function(yuklendi){

    // Elementlerimizi seçelim
    let yemekAdi = document.getElementById("yemekAdi");
    let yemekTarif = document.getElementById("yemekTarif");
    let search = document.getElementById("search");
    let yemekBaslik = document.getElementById("yemekBaslik");
    let tarifDetay = document.getElementById("tarifDetay");

    yemekAdi.addEventListener("input",function(yemekAdiTiklandi){
        let yemekAdiName = this.value;

        if (yemekAdiName.length > 1) {
            yemekBaslik.textContent = yemekAdiName;
        }else{
            yemekAdiName.textContent = "Yemek Başlığıdır."
        }
    });

    yemekTarif.addEventListener("input",function(yemekTarifTiklandi){

    });


});