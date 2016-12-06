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

    // TEST ZNAMENEK DIFFERENCI
    var diffE = (n - 1) / 2;
    var diffD = (n + 1) / 12

    var diffC = 0;
    for(i = 0; i < n - 1; i++) {
        if (listNumbers[i + 1] > listNumbers[i]) {
            diffC += 1;
        }
    }

    var diffU = (diffC - diffE) / Math.sqrt(diffD);

    $("#diffBox").append("N = " + n + "<br/>");
    $("#diffBox").append("C = " + diffC + "<br/>");
    $("#diffBox").append("E(C) = " + diffE + "<br/>");
    $("#diffBox").append("D(C) = " + diffD + "<br/>");
    $("#diffBox").append("U = " + diffU + "<br/>");



    // SPEARMANUV PORADOVY KOEFICIENT KORELACE
    $("#spearmanBox").append("<table class='table table-striped table-condensed' id='spearmanTable'><tr><th>x</th><th>Ri</th><th>Qi</th><th>di</th><th>di2</th></tr></table>");

    var listRi = [];
    for(i = 1; i <= n; i++) {
        listRi[i - 1] = i;
    }

    var listQi = [];
    var listdi = [];
    var listdi2 = [];
    var sumdi2 = 0;
    for(i = 0; i < n; i++) {
        listQi[i] = 0;
        for(j = 0; j < n; j++) {
            if(listNumbers[j] <= listNumbers[i]) {
                listQi[i] += 1;
            }
        }
        listdi[i] = listRi[i] - listQi[i];
        listdi2[i] = Math.abs(listdi[i]) * Math.abs(listdi[i]);
        $("#spearmanTable").append("<tr><td>" + listNumbers[i] + "</td><td>" + listRi[i] + "</td><td>" + listQi[i] +
            "</td><td>" + listdi[i] + "</td><td>" + listdi2[i] + "</td></tr>");
    }

    var spearmanE = 0;
    var spearmanD = 1 / (n - 1);
    var spearmanR = 1 - (6/(n * (n * n - 1))) * sumdi2;
    var spearmanU = spearmanR * Math.sqrt(n - 1);

    $("#spearmanBox").append("<br/>" + "E(rs) = " + spearmanE + "<br/>");
    $("#spearmanBox").append("D(rs) = " + spearmanD + "<br/>");
    $("#spearmanBox").append("suma di2 = " + sumdi2 + "<br/>");
    $("#spearmanBox").append("r = " + spearmanR + "<br/>");
    $("#spearmanBox").append("u = " + spearmanU + "<br/>");

}