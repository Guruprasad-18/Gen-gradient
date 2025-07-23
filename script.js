
    let btn1 = document.getElementById("myButton1");
    let btn2 = document.getElementById("myButton2");
    let copyDiv = document.querySelector('.copyCode');
    let rgb1 = "#000";
    let rgb2 = "#fff";


    const hexCode = () => {
        let myHexValues = "0123456789ABCDEF";
        let color = "#";
        for(let i=0; i<6; i++){
            color = color + myHexValues[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleButton1 = () => {
        rgb1 = hexCode();
        document.body.style.backgroundImage = 
        `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        copyDiv.innerHTML = 
        `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        btn1.innerText = rgb1;
    };

    const handleButton2 = () => {
        rgb2 = hexCode();
        document.body.style.backgroundImage = 
        `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        copyDiv.innerHTML = 
        `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        btn2.innerText = rgb2;
    };

    // btn1.addEventListener("click", handleButton1);
    // btn2.addEventListener("click", handleButton2);
    btn1.addEventListener("click", (e) => {
      e.preventDefault();
      handleButton1();
      });
    btn2.addEventListener("click", (e) => {
      e.preventDefault();
      handleButton2();
      });


    copyDiv.addEventListener("click", () => {
        navigator.clipboard.writeText(copyDiv.innerText);
        alert("Copied to Clipboard");
    });
