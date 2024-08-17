function loadContent(id, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
                if (callback) {
                    callback();
                }
            } else {
                console.error(`Element with ID ${id} not found.`);
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadContent('header', 'header.html', initializeMenu);
    loadContent('footer', 'footer.html');
});