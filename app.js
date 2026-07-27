
let daxilEdilen = prompt("Lütfən 4 rəqəmli ədəd daxil edin:");

if (daxilEdilen && daxilEdilen.length === 4 && !isNaN(daxilEdilen)) {
    let cem = 0;

    for (let i = 0; i < daxilEdilen.length; i++) {
        cem += parseInt(daxilEdilen[i]);
    }

    console.log("Daxil edilən ədəd:", daxilEdilen);
    console.log("Rəqəmlərin cəmi:", cem);
} else {
    console.log("Xəta: Lütfən dəqiq 4 rəqəmdən ibarət ədəd daxil edin!");
}