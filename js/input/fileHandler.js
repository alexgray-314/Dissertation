const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    const file = fileList[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        // LOAD THE GAME!!!!
        const state = new State(reader.result, 2);
        const handler = new Handler(state);
        const canvas = new Canvas(state);
    });

    reader.readAsText(file);

});
