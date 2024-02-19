function Invest(){

    const SavingsMoney = document.getElementById("SavingsInput");
    const Interest = document.getElementById("InterestInput");
    const Years = document.getElementById("YearInput");

    let Save = Number(SavingsMoney.value);
    let Int = Number(Interest.value / 100);
    let Year = Number(Years.value);
    
    document.getElementById("SavingsOutput").innerHTML = Save * Math.pow((1 + Int / 1), 1 * Year);
    
}