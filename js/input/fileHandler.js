const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    const file = fileList[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        // LOAD THE GAME!!!!
        init(reader.result);
    });

    reader.readAsText(file);
});
