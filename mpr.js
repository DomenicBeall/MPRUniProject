const ddButton = document.getElementById("dropdown-head");
const ddContent = document.getElementById("dropdown-content");

ddButton.addEventListener("click", (event) => {

    console.log("ass");

    if (ddContent.style.display === "flex") {
        ddContent.style.display = "none";
        ddButton.style.borderRadius = "10px";
    } else {
        ddContent.style.display = "flex";
        ddButton.style.borderRadius = "10px 10px 0px 0px";
    }
});