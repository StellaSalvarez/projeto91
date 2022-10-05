
function send(){
    n1 = document.getElementById("n1input").value;
    n2 = document.getElementById("n2input").value;
    answer = parseInt(n1) * parseInt(n2);

    questionNumber = "<h4 id='numberDisplayQuestion'></h4>"
    inputBox = "<br> resposta: <input type='text' id='inputResposta'>";
    checkBtn = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = questionNumber + inputBox + checkBtn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1input").value = "";
    document.getElementById("n2input").value = "";

    questionNumber = document.getElementById("pergunta").innerHTML = n1 + " X " + n2;

}