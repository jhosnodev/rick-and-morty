const errors = (inputs) => {
  const messages = [];
  const regexPassword = /^(?=.*\d).{6,}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(inputs.email)) {
    messages.email = "Debe ser un email valido";
  }
  if (!regexPassword.test(inputs.password)) {
    messages.password =
      "Debe tener una mayuscula, al menos 6 carracteres y al menos un numero";
  }
  return messages;
};
export default errors;
