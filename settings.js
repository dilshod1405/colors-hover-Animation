const boxes = document.getElementsByClassName('box');
        for (const box of boxes) {
            let colorit = document.createElement('p')
            colorit.innerHTML = "rgb(83, 83, 83)";
            colorit.style.color = "white";
            colorit.style.textAlign = "center";
            colorit.style.marginTop = "20%";
            colorit.style.fontSize = "12px"  
            box.appendChild(colorit)
                box.onmouseover = async() => {
                colorit.style.textAlign = "center";
                colorit.style.marginBottom = "40%";
                box.style.backgroundColor = "coral";
                colorit.innerHTML = "coral"; 
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        box.style.backgroundColor = "blue";
                        colorit.innerHTML = "blue";
                        resolve("green")
                    }, 1000);
                }).then((color) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            colorit.innerHTML = "green";
                            box.style.backgroundColor = color;
                            resolve("red")
                        }, 1000)
                    });
                }).then((color) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            colorit.innerHTML = "red";
                            box.style.backgroundColor = "red";
                            resolve("rgb(83, 83, 83)")
                        }, 1000);
                    })
                }).then((color) => {
                    setTimeout(() => {
                        box.style.backgroundColor = color;
                        box.style.transition = "2s"; 
                        colorit.innerHTML = "";
                    }, 1000)
                })
            };
            
                

            }