const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modalLogin");
const fechar = document.getElementById("fechar");

btnLogin.onclick = () => {
  modal.style.display = "block";
};

fechar.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
