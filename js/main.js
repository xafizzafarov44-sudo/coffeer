

    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header__list");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
    });
        <script>
            AOS.init();
        </script>
