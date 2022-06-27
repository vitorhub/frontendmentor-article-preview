const pega = document.getElementById("seta-cinza");
pega.addEventListener("click",
    () => {
        let value = pega.children[0].getAttribute('src');

        if (value === "images/icon-share-inverte.svg") {
            pega.children[0].setAttribute('src', 'images/icon-share.svg');
            pega.nextElementSibling.classList.toggle('mostrar-share');
            pega.classList.remove("fundo-seta");
        }
        else {
            pega.children[0].setAttribute('src', 'images/icon-share-inverte.svg');
            pega.nextElementSibling.classList.toggle('mostrar-share');
            pega.classList.add("fundo-seta");
        }
    }
)
