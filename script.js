let text = document.getElementById("text");
let man = document.getElementById("man");
let plants = document.getElementById("plants");
let tree1 = document.getElementById("tree1");
let mtn2 = document.getElementById("mtn2");
let tree2 = document.getElementById("tree2");
let mtn1 = document.getElementById("mtn1");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    text.style.marginTop = value * -1.5 + "px";
    mtn1.style.marginTop = value * 0.5 + "px";
    mtn1.style.left = value * 0.5 + "px";
    mtn2.style.left = value * 0.5 + "px";
    tree2.style.left = value * -0.5 + "px";
    tree1.style.left = value * -0.5 + "px";
    man.style.left = value * -0.5 + "px";
    plants.style.left = value * -0.5 + "px";
});
