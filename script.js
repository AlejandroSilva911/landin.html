document.addEventListener("DOMContentLoaded", function () {
    const cursosLinks = document.querySelectorAll("#cursos ul li");
    
    cursosLinks.forEach((curso, index) => {
      curso.addEventListener("click", () => {
        const nombreCurso = curso.textContent;
        window.location.href = `registro.html?curso=${encodeURIComponent(nombreCurso)}`;
      });
    });
  });
  