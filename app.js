let tamAd = prompt("Lütfən tam adınızı «AD SOYAD» formatında daxil edin:");

if (tamAd) {
    let hisseler = tamAd.trim().split(" ");

    if (hisseler.length >= 2) {
        let ad = hisseler[0];
        let soyad = hisseler[1];

        let yeniFormat = `${soyad} ${ad}`;

        console.log("Daxil edilən:", tamAd);
        console.log("Nəticə («SOYAD AD»):", yeniFormat);
    } else {
        console.log("Xəta: Ad və soyad arasında boşluq qoyaraq daxil edin.");
    }
} else {
    console.log("Məlumat daxil edilmədi.");
}