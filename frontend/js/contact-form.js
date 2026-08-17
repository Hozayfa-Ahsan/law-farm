/* =====================================================
   CONTACT FORM VALIDATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    const form =
        document.getElementById("contact-form");


    if (!form) {
        return;
    }


    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    const practice =
        document.getElementById("practice");

    const message =
        document.getElementById("message");

    const success =
        document.getElementById("form-success");

    const submitButton =
        document.getElementById("contact-submit");



    /* =================================================
       HELPER FUNCTIONS
    ================================================= */

    function showError(field, errorId, text) {

        const error =
            document.getElementById(errorId);


        field.classList.add("input-error");

        field.setAttribute(
            "aria-invalid",
            "true"
        );


        if (error) {

            error.textContent =
                text;

        }

    }



    function clearError(field, errorId) {

        const error =
            document.getElementById(errorId);


        field.classList.remove(
            "input-error"
        );


        field.removeAttribute(
            "aria-invalid"
        );


        if (error) {

            error.textContent =
                "";

        }

    }



    function validEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(value);

    }



    /* =================================================
       REAL-TIME ERROR CLEARING
    ================================================= */

    name.addEventListener("input", function () {

        if (name.value.trim()) {

            clearError(
                name,
                "name-error"
            );

        }

    });



    email.addEventListener("input", function () {

        if (
            email.value.trim() &&
            validEmail(email.value.trim())
        ) {

            clearError(
                email,
                "email-error"
            );

        }

    });



    practice.addEventListener("change", function () {

        if (practice.value) {

            clearError(
                practice,
                "practice-error"
            );

        }

    });



    message.addEventListener("input", function () {

        if (message.value.trim()) {

            clearError(
                message,
                "message-error"
            );

        }

    });



    /* =================================================
       FORM SUBMISSION
    ================================================= */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            let valid = true;


            success.textContent = "";


            /* NAME */

            if (!name.value.trim()) {

                showError(
                    name,
                    "name-error",
                    "Please enter your name."
                );

                valid = false;

            } else {

                clearError(
                    name,
                    "name-error"
                );

            }



            /* EMAIL */

            if (!email.value.trim()) {

                showError(
                    email,
                    "email-error",
                    "Please enter your email address."
                );

                valid = false;

            }

            else if (
                !validEmail(
                    email.value.trim()
                )
            ) {

                showError(
                    email,
                    "email-error",
                    "Please enter a valid email address."
                );

                valid = false;

            }

            else {

                clearError(
                    email,
                    "email-error"
                );

            }



            /* PRACTICE */

            if (!practice.value) {

                showError(
                    practice,
                    "practice-error",
                    "Please select a practice area."
                );

                valid = false;

            }

            else {

                clearError(
                    practice,
                    "practice-error"
                );

            }



            /* MESSAGE */

            if (!message.value.trim()) {

                showError(
                    message,
                    "message-error",
                    "Please describe your legal matter."
                );

                valid = false;

            }

            else {

                clearError(
                    message,
                    "message-error"
                );

            }



            /* STOP IF INVALID */

            if (!valid) {

                const firstError =
                    form.querySelector(
                        ".input-error"
                    );


                if (firstError) {

                    firstError.focus();

                }


                return;

            }



            /* =================================================
               TEMPORARY SUCCESS STATE
            ================================================= */

            submitButton.disabled =
                true;


            submitButton.innerHTML =
                "Message Ready";


            success.textContent =
                "Thank you. Your message has been validated successfully. The form is ready to be connected to the firm's email system.";


            form.reset();


            setTimeout(function () {

                submitButton.disabled =
                    false;


                submitButton.innerHTML =
                    'Send Message <span class="btn-arrow">→</span>';

            }, 3000);

        }
    );

});