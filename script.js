document.addEventListener("DOMContentLoaded", function () {
    
    const colorForm = document.getElementById("colorForm");
    const header = document.getElementById("header");

    
    colorForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

     
        const colorInput = document.getElementById("colorInput").value;


        header.style.color = colorInput;

      
        document.getElementById("colorInput").value = '';
    });
});
