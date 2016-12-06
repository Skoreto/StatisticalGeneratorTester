/**
 * Created by Tomas.
 */
function calculate() {
//        $("#ownNumbersArea").append("0.152" + "\n");
//        $("#ownNumbersArea").append("0.369" + "\n");
//        $("#ownNumbersArea").append("0.495" + "\n");
//        $("#ownNumbersArea").append("0.792" + "\n");
//        $("#ownNumbersArea").append("0.306" + "\n");
//        $("#ownNumbersArea").append("0.853" + "\n");
//        $("#ownNumbersArea").append("0.882" + "\n");
//        $("#ownNumbersArea").append("0.095" + "\n");
//        $("#ownNumbersArea").append("0.968" + "\n");
//        $("#ownNumbersArea").append("0.698");

    $("#ownNumbersArea").append("7" + "\n");
    $("#ownNumbersArea").append("4" + "\n");
    $("#ownNumbersArea").append("2" + "\n");
    $("#ownNumbersArea").append("8" + "\n");
    $("#ownNumbersArea").append("6" + "\n");
    $("#ownNumbersArea").append("4" + "\n");
    $("#ownNumbersArea").append("7" + "\n");
    $("#ownNumbersArea").append("2" + "\n");
    $("#ownNumbersArea").append("8" + "\n");
    $("#ownNumbersArea").append("9" + "\n");
    $("#ownNumbersArea").append("2" + "\n");
    $("#ownNumbersArea").append("4" + "\n");
    $("#ownNumbersArea").append("7" + "\n");
    $("#ownNumbersArea").append("1" + "\n");
    $("#ownNumbersArea").append("0" + "\n");
    $("#ownNumbersArea").append("4");

    var listNumbers = [];
    if (document.getElementById("calculateOwnNumbers").checked) {
        var textArea = document.getElementById("ownNumbersArea");
        var arrayOfLines = textArea.value.split("\n");
        for(var i = 0; i < arrayOfLines.length; i++){
            if (parseFloat(arrayOfLines[i]) != 'NaN') {
                listNumbers[i] = parseFloat(arrayOfLines[i]);
            }
        }
    } else {
        for(i = 0; i < 100; i++) {
            listNumbers[i] = Math.floor(Math.random() * 10);
            $("#numberBox").append(listNumbers[i]);
            $("#numberBox").append("<br/>");
        }
    }

    // Obecne
    var n = listNumbers.length;

    // TEST BODU ZVRATU
    var extremalE = (2 * (n - 2)) / 3;
    var extremalD = (16 * n - 29) / 90;

    var extremalP = 0;
    for(i = 0; i < n - 2; i++) {
        if ((listNumbers[i] < listNumbers[i + 1] && listNumbers[i + 1] > listNumbers[i + 2]) ||
            (listNumbers[i] > listNumbers[i + 1] && listNumbers[i + 1] < listNumbers[i + 2] )) {
            extremalP += 1;
        }
    }

    var extremalU = (extremalP - extremalE) / Math.sqrt(extremalD);

    $("#extremalBox").append("N = " + n + "<br/>");
    $("#extremalBox").append("P = " + extremalP + "<br/>");
    $("#extremalBox").append("E(P) = " + extremalE + "<br/>");
    $("#extremalBox").append("D(P) = " + extremalD + "<br/>");
    $("#extremalBox").append("U = " + extremalU + "<br/>");


}