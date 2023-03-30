(async function() {
    const el = document.getElementById("message");

    fetch("/data")
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            el.innerText = data.message;
        });
})();
