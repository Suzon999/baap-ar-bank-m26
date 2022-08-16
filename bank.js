//  diposit calculations 
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const dipositTaka = depositField.value;

    const depositAmount = document.getElementById("diposit-amount");
    const dipositTotl = depositAmount.innerText;
    depositAmount.innerText = parseFloat(dipositTotl) + parseFloat(dipositTaka)

    const totaltAmountText = document.getElementById("total-amount");
    const totalAmount = totaltAmountText.innerText;
    totaltAmountText.innerText = parseFloat(totalAmount) + parseFloat(dipositTaka)
    depositField.value = "";
})
// widthdrow calculations
// step-1 
document.getElementById("witdhdrow-btn").addEventListener("click", function () {
    // step-2
    const widthdrowField = document.getElementById("widthdrow-field");
    const widthdrowFieldAmount = widthdrowField.value;
    // step-3
    const widthdrowFieldTotal = document.getElementById("widthdrow-amount");
    const widthdrowFieldTotalAmount = widthdrowFieldTotal.innerText;
    // step-4 
    const widthNewAmount = parseFloat(widthdrowFieldAmount) + parseFloat(widthdrowFieldTotalAmount);
    widthdrowFieldTotal.innerText = widthNewAmount;
    // step-5 
    const totaltAmountText = document.getElementById("total-amount");
    const totalAmount = totaltAmountText.innerText;
    const newBalanceTotal = parseFloat(totalAmount) - parseFloat(widthdrowFieldAmount)
    totaltAmountText.innerText = newBalanceTotal;


    // step-6 
    widthdrowField.value = "";
})