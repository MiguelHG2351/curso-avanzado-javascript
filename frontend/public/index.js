document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLocaleLowerCase() == "k") {
        e.preventDefault()
        console.log("alt+k pressed!");
    }
});
