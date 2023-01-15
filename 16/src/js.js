
document.forms[0].addEventListener('submit', async (e) => {
    e.preventDefault();
    var file = document.forms[0].elements.fi.files[0];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./uploads", true);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(file);
    xhr.onload = () => {
        document.querySelector('.IMG').setAttribute('src', xhr.response);
    };
});