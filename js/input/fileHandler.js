const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    const file = fileList[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        state = new State(reader.result, 2);
    });

    reader.readAsText(file);

});
