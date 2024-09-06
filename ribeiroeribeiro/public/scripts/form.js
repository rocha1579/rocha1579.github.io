window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const button = document.querySelector('input[type="submit"]');
    const status = document.querySelector('.status');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(form);
        
        const ajax = new XMLHttpRequest();
        ajax.open("POST", "https://formspree.io/mgenavnv");
        ajax.setRequestHeader("Accept", "application/json");
        ajax.onreadystatechange = () => {
            if (ajax.readyState !== XMLHttpRequest.DONE) return;
            if (ajax.status === 200) {
                form.reset();
                status.innerHTML = "Mensagem enviada com sucesso!";
                status.style.display = "block";
            } else {
                status.innerHTML = "Não conseguimos enviar sua mensagem!";
                status.style.display = "block";
            }
            setTimeout(() => status.style.display = "none", 3000);
        };

        ajax.send(data);
    });
});