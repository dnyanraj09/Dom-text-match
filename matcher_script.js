function matchText() {
    var text1 = document.getElementById('text1').value.toLowerCase();
    var text2 = document.getElementById('text2').value.toLowerCase();

    if (text1 === text2) {
        document.getElementById('matchResult').textContent = "Texts match!";
    } else {
        document.getElementById('matchResult').textContent = "Texts do not match.";
    }
}
