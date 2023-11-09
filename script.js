document.addEventListener('readystatechange', () => {
    if(document.readyState == 'complete') {
        alert('Страница полностью загружена');
    }
});