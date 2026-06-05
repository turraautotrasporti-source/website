function openImg(img){
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `<img src="${img.src}">`;

    modal.onclick = () => modal.remove();

    document.body.appendChild(modal);
}

function changeMap(place){

    let url = "";

    if(place === "cutro"){
        url = "https://www.google.com/maps?q=Cutro+KR&output=embed";
    }

    if(place === "reggio"){
        url = "https://www.google.com/maps?q=Reggio+Emilia&output=embed";
    }

    if(place === "gualtieri"){
        url = "https://www.google.com/maps?q=Gualtieri+RE&output=embed";
    }

    document.getElementById("map").src = url;
}
