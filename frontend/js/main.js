document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =============================================
           ELEMENTS
        ============================================= */


        const header =
            document.getElementById(
                "site-header"
            );


        const menuToggle =
            document.getElementById(
                "menu-toggle"
            );


        const navigation =
            document.getElementById(
                "main-navigation"
            );


        const progress =
            document.getElementById(
                "scroll-progress"
            );



        /* =============================================
           HEADER SCROLL EFFECT
        ============================================= */


        function updateHeader() {

            if (
                window.scrollY > 50
            ) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }



        /* =============================================
           SCROLL PROGRESS
        ============================================= */


        function updateProgress() {

            const scrollTop =
                window.scrollY;


            const documentHeight =
                document.documentElement
                    .scrollHeight
                - window.innerHeight;


            if (
                documentHeight <= 0
            ) {

                progress.style.width =
                    "0%";

                return;

            }


            const percentage =
                (
                    scrollTop
                    / documentHeight
                ) * 100;


            progress.style.width =
                `${percentage}%`;

        }



        /* =============================================
           MOBILE MENU
        ============================================= */


        function toggleMenu() {

            const isOpen =
                navigation.classList.toggle(
                    "active"
                );


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        }


        menuToggle.addEventListener(
            "click",
            toggleMenu
        );



        /* =============================================
           CLOSE MOBILE MENU AFTER LINK CLICK
        ============================================= */


        navigation
            .querySelectorAll("a")
            .forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        () => {

                            navigation.classList.remove(
                                "active"
                            );


                            menuToggle.classList.remove(
                                "active"
                            );


                            menuToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );


                            menuToggle.setAttribute(
                                "aria-label",
                                "Open navigation menu"
                            );

                        }
                    );

                }
            );



        /* =============================================
           SCROLL EVENTS
        ============================================= */


        window.addEventListener(
            "scroll",
            () => {

                updateHeader();

                updateProgress();

            },
            {
                passive: true
            }
        );


        /* =============================================
           INITIAL STATE
        ============================================= */


        updateHeader();

        updateProgress();

    }
);