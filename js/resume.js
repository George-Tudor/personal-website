$(() => {
    $('body').on('click', '.screenshot-button', function () {

        $("screenshot-window").toggle()
        el = document.getElementById("screenshot-window");
        el.style.visibility = (el.style.visibility == "hidden") ? "visible" : "hidden";
    });
    $('body').on('click', '#screenshot-window', function () {
        console.log('working')
        el = document.getElementById("screenshot-window");
        el.style.visibility = (el.style.visibility == "hidden") ? "visible" : "hidden";
    });


});
