
document.addEventListener("keydown", (e) => {
    console.log(e.altKey)
    if (e.ctrlKey && String.fromCharCode(e.code) == "K") {
        alert("alt+k pressed!");
    }
});
