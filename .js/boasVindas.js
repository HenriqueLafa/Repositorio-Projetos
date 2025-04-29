// boasVindas.js
window.addEventListener("load", () => {
    if (!sessionStorage.getItem("bemVindo")) {
        alert("Bem-vindo ao site do Palmeiras! Confira nossos planos!");
        sessionStorage.setItem("bemVindo", "true");
    }
});