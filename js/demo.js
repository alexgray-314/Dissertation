document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("textInput");
  const button = document.getElementById("submitBtn");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    const inputValue = input.value;

    const lexer = new Lexer();
    const recogniser = new Recogniser();

    try {
      const tokens = lexer.lex(inputValue);
      recogniser.recognise(tokens);
      output.innerText = "Valid syntax";
    } catch (error) {
      output.innerText = error;
    }

  });
});



