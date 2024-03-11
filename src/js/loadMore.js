// in catalog.html
let loadMoreBtn = document.querySelector('#load-more');
let currItems = 4;

loadMoreBtn.onclick = () => {
    let items = [...document.querySelectorAll('.item')]
    for (let i = currItems; i < currItems + 3; i++) {
        items[i].style.display = 'inline-block';
    }

    currItems += 3;

    if (currItems >= items.length) {
        loadMoreBtn.style.display = 'none';
    }
}