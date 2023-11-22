document.addEventListener("DOMContentLoaded", () => {
    const blocs = document.querySelectorAll(".bloc[data-moveable='true']");
    
    blocs.forEach(bloc => {
        bloc.style.position = "absolute";
        bloc.style.left = `${Math.random() * 80 + 10}%`;
        bloc.style.top = `${Math.random() * 80 + 10}%`;
    });
});
