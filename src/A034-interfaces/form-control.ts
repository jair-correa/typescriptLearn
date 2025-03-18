import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = "show-error-message"; // Ajustando o nome para evitar conflitos

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages();
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
  if (shouldSendForm(target)) console.log("FORMULARIO ENVIADO");
};

form.addEventListener("submit", submitEventFn );

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, `campo obrigatório.`);
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, "Email inválido.");
}

function checkEqualPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password2, "As senhas não são iguais.");
  }
}
function hideErrorMessages(): void {
  form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
    item.textContent = ""; // Limpa a mensagem de erro
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    ".error-message",
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}
