document.getElementById("lbsInput").addEventListener("input", function(){
    document.getElementById("output").style.visibility = "visible";
    var lbs = this.value;
    document.getElementById("gmOutput").innerText = (lbs / 0.00220462).toFixed(2);
    document.getElementById("kgOutput").innerText = (lbs / 2.20462).toFixed(2);
    document.getElementById("ozOutput").innerText = (lbs *16).toFixed(2);
});
