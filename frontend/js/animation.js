/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


    const elements =
        document.querySelectorAll(".reveal, .reveal-right");


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        (element) => {

            observer.observe(element);

        }
    );



    /* =================================================
       COUNTER ANIMATION
    ================================================= */


    const counters =
        document.querySelectorAll(".counter");


    const counterObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const counter =
                                entry.target;

                            const target =
                                Number(
                                    counter.dataset.target
                                );

                            let current = 0;

                            const duration = 1500;

                            const start =
                                performance.now();


                            function update(
                                timestamp
                            ) {

                                const progress =
                                    Math.min(
                                        (
                                            timestamp
                                            - start
                                        )
                                        / duration,
                                        1
                                    );


                                current =
                                    Math.floor(
                                        progress * target
                                    );


                                counter.textContent =
                                    current + "+";


                                if (
                                    progress < 1
                                ) {

                                    requestAnimationFrame(
                                        update
                                    );

                                }

                            }


                            requestAnimationFrame(
                                update
                            );


                            counterObserver.unobserve(
                                counter
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(
        (counter) => {

            counterObserver.observe(
                counter
            );

        }
    );

});