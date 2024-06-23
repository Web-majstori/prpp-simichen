function toggleFaq(id) {
    const content = document.getElementById(`content-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);
    
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("up");
    } else {
        content.style.display = "block";
        arrow.classList.add("up");
    }
}
