if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

toggleBtn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
};

function btnClick(name) {
    alert(name + " button clicked!");
}
