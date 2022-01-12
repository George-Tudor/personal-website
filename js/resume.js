$(() => {
    $('body').on('click', '.screenshot-button', function () {
        console.log('working')
        el = document.getElementById("screenshot-window");
        el.style.visibility = (el.style.visibility == "hidden") ? "visible" : "hidden";
    });


});
