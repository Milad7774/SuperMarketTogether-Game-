const MarketPrice = document.getElementById("MarketPrice");
const FinalPrice = document.getElementById("FinalPrice");


MarketPrice.addEventListener("keydown", (e) =>{
    if(e.key == " "){
        e.preventDefault();
        if(MarketPrice.value.includes(".")) return;
        MarketPrice.value = MarketPrice.value + ".";
    }
    setTimeout(() => {
        FinalPrice.value = (Number(MarketPrice.value) * 0.99) + Number(MarketPrice.value);
    }, 0);
})