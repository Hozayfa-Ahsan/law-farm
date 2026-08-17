/* =====================================================
   LAW FARM CONTACT FORM
   Formspree AJAX Submission
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById("contact-form");

    if (!form) {
        return;
    }


    /* =================================================
       FORM ELEMENTS
    ================================================= */

    const name =
        document.getElementById("name");

    const email =
        document.getElementById("email");

    const phone =
        document.getElementById("phone");

    const practice =
        document.getElementById("practice");

    const message =
        document.getElementById("message");

    const successMessage =
        document.getElementById("form-success");

    const submitButton =
        document.getElementById("contact-submit");


    /* =================================================
       VALIDATION HELPERS
    ================================================= */

    function showError(
        field,
        errorId,
        text
    ) {

        if (!field) {
            return;
        }

        const error =
            document.getElementById(errorId);


        field.classList.add(
            "input-error"
        );


        field.setAttribute(
            "aria-invalid",
            "true"
        );


        if (error) {
            error.textContent = text;
        }

    }



    function clearError(
        field,
        errorId
    ) {

        if (!field) {
            return;
        }

        const error =
            document.getElementById(errorId);


        field.classList.remove(
            "input-error"
        );


        field.removeAttribute(
            "aria-invalid"
        );


        if (error) {
            error.textContent = "";
        }

    }



    function isValidEmail(
        emailAddress
    ) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(emailAddress);

    }



    /* =================================================
       CLEAR SUCCESS MESSAGE
    ================================================= */

    function clearSuccessMessage() {

        if (successMessage) {
            successMessage.textContent = "";
        }

    }



    /* =================================================
       LIVE ERROR CLEARING
    ================================================= */

    if (name) {

        name.addEventListener(
            "input",
            function () {

                if (name.value.trim()) {

                    clearError(
                        name,
                        "name-error"
                    );

                }

                clearSuccessMessage();

            }
        );

    }



    if (email) {

        email.addEventListener(
            "input",
            function () {

                if (
                    email.value.trim() &&
                    isValidEmail(
                        email.value.trim()
                    )
                ) {

                    clearError(
                        email,
                        "email-error"
                    );

                }

                clearSuccessMessage();

            }
        );

    }



    if (phone) {

        phone.addEventListener(
            "input",
            function () {

                clearSuccessMessage();

            }
        );

    }



    if (practice) {

        practice.addEventListener(
            "change",
            function () {

                if (practice.value) {

                    clearError(
                        practice,
                        "practice-error"
                    );

                }

                clearSuccessMessage();

            }
        );

    }



    if (message) {

        message.addEventListener(
            "input",
            function () {

                if (
                    message.value.trim().length >= 20
                ) {

                    clearError(
                        message,
                        "message-error"
                    );

                }

                clearSuccessMessage();

            }
        );

    }



    /* =================================================
       FORM SUBMISSION
    ================================================= */

    form.addEventListener(
        "submit",
        async function (event) {

            /* IMPORTANT:
               Prevent normal browser submission.
               We will submit using fetch().
            */

            event.preventDefault();


            let valid = true;


            clearSuccessMessage();



            /* =========================================
               NAME
            ========================================= */

            if (
                !name ||
                !name.value.trim()
            ) {

                showError(
                    name,
                    "name-error",
                    "Please enter your full name."
                );

                valid = false;

            }
            else {

                clearError(
                    name,
                    "name-error"
                );

            }



            /* =========================================
               EMAIL
            ========================================= */

            if (
                !email ||
                !email.value.trim()
            ) {

                showError(
                    email,
                    "email-error",
                    "Please enter your email address."
                );

                valid = false;

            }

            else if (
                !isValidEmail(
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



            /* =========================================
               PRACTICE AREA
            ========================================= */

            if (
                !practice ||
                !practice.value
            ) {

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



            /* =========================================
               MESSAGE
            ========================================= */

            if (
                !message ||
                !message.value.trim()
            ) {

                showError(
                    message,
                    "message-error",
                    "Please describe your legal matter."
                );

                valid = false;

            }

            else if (
                message.value.trim().length < 20
            ) {

                showError(
                    message,
                    "message-error",
                    "Please provide at least 20 characters."
                );

                valid = false;

            }

            else {

                clearError(
                    message,
                    "message-error"
                );

            }



            /* =========================================
               STOP IF INVALID
            ========================================= */

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



            /* =========================================
               SHOW SENDING STATE
            ========================================= */

            if (submitButton) {

                submitButton.disabled =
                    true;


                submitButton.innerHTML =
                    "Sending...";

            }



            try {

                const formData =
                    new FormData(form);


                const response =
                    await fetch(
                        form.action,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );



                /* =====================================
                   CHECK FOR FORMSPREE ERROR
                ===================================== */

                if (!response.ok) {

                    let errorMessage =
                        "We could not send your message. Please try again.";

                    try {

                        const errorData =
                            await response.json();


                        if (
                            errorData &&
                            errorData.errors &&
                            errorData.errors.length
                        ) {

                            errorMessage =
                                errorData.errors
                                    .map(
                                        error =>
                                            error.message
                                    )
                                    .join(" ");

                        }

                    }
                    catch (jsonError) {

                        /* Keep default error message */

                    }


                    throw new Error(
                        errorMessage
                    );

                }



                /* =====================================
                   SUCCESS
                ===================================== */

                if (successMessage) {

                    successMessage.textContent =
                        "Thank you. Your message has been sent successfully. We will review your inquiry and contact you shortly.";

                }


                form.reset();


            }
            catch (error) {

                console.error(
                    "Form submission error:",
                    error
                );


                if (successMessage) {

                    successMessage.textContent =
                        error.message ||
                        "We couldn't send your message right now. Please try again.";

                }

            }
            finally {

                /* =====================================
                   RESTORE BUTTON
                ===================================== */

                if (submitButton) {

                    submitButton.disabled =
                        false;


                    submitButton.innerHTML =
                        'Send Message <span class="btn-arrow">→</span>';

                }

            }

        }
    );

});