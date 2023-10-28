(function() {
    $('.btn').click(function() {
        $(this).toggleClass('active');
        return $('.profile-social').toggleClass('open');
    });

}).call(this);

tippy(".post-icons.lide", {
    theme: "rstylr",
    content: "like",
    arrow: false,
    animation: "scale-subtle",
    followCursor: true,
    placement: "top",
    touch: 'hold',
});
tippy("[title]", {
    theme: "rstylr",
    arrow: false,
    animation: "scale-subtle",
    followCursor: true,
    placement: "top",
    touch: 'hold',
    content(reference) {
        const title = reference.getAttribute("title");
        reference.removeAttribute("title");
        return title;
    },
});

const toggle = document.getElementById("theme-toggle");

toggle.onclick = function () {
    document.documentElement.classList.add("theme-transition");

    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    window.setTimeout(function () {
        document.documentElement.classList.remove("theme-transition");
    }, 50);

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
};