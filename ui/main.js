console.log('Loaded!');

// I changed the main text
document.querySelector(".text-big").innerHTML = "Hi."

// now it's Madi the dino
var madi = document.querySelector(".img-medium");
while (1)
{
    madi.onmouseover = function() {
        madi.style.marginLeft += "100px";
    };
}