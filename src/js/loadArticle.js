let loadBtn = document.querySelector('#load-article');
let curr = 1;

loadBtn.onclick = () => {
    let items = [...document.querySelectorAll('.paragraphs')]
    for (let i = curr; i < curr + 4; i++) {
        items[i].style.display = 'inline-block';
    }

    curr += 5;

    if (curr >= items.length) {
        loadBtn.style.display = 'none';
    }
}