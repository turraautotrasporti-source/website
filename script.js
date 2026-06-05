function openImg(img){
const modal = document.createElement("div");
modal.classList.add("modal");

modal.innerHTML = `<img src="${img.src}">`;

modal.onclick = () => modal.remove();

document.body.appendChild(modal);
}
