// document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("textInput");
  const button = document.getElementById("submitBtn");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    const inputValue = input.value;
    output.textContent = "You entered: " + inputValue;

    const lexer = new Lexer();
    const tokens = lexer.lex(inputValue);

    const recogniser = new Recogniser();
    try {
      recogniser.recognise(tokens);
      output.innerText = "Valid";
    } catch (error) {
      output.innerText = "Syntax Error";
    }

  });
// });



