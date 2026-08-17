/* =====================================================
   ATTORNEY PROFILE DATA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    const attorneys = {

        "alexander": {

            name: "Alexander Morgan",

            role: "MANAGING PARTNER",

            image: "images/attorneys/attorney-01.png",

            summary:
                "Experienced in strategic legal representation, commercial matters and complex disputes.",

            description:
                "Alexander focuses on providing practical and strategic legal advice to clients facing complex business and commercial matters."

        },


        "victoria": {

            name: "Victoria Bennett",

            role: "PARTNER",

            image: "images/attorneys/attorney-02.jpg",

            summary:
                "Focused on corporate law, property matters and practical legal solutions for clients.",

            description:
                "Victoria advises clients on corporate transactions, property matters and legal strategies designed to protect their long-term interests."

        },


        "daniel": {

            name: "Daniel Carter",

            role: "SENIOR ASSOCIATE",

            image: "images/attorneys/attorney-03.jpg",

            summary:
                "Advises clients on litigation, contractual matters and business disputes.",

            description:
                "Daniel focuses on dispute resolution, contractual matters and business litigation, helping clients navigate complex legal challenges."

        },


        "sophia": {

            name: "Sophia Reynolds",

            role: "ASSOCIATE",

            image: "images/attorneys/attorney-04.jpg",

            summary:
                "Handles employment matters, civil disputes and client-focused legal strategy.",

            description:
                "Sophia works with clients on employment matters, civil disputes and practical legal strategies tailored to their individual circumstances."

        }

    };



    /* =================================================
       GET ATTORNEY FROM URL
    ================================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const attorneyKey =
        params.get("attorney") || "alexander";


    const attorney =
        attorneys[attorneyKey];



    if (!attorney) {
        return;
    }



    /* =================================================
       UPDATE PAGE
    ================================================= */

    const name =
        document.getElementById("profile-name");

    const role =
        document.getElementById("profile-role");

    const image =
        document.getElementById("profile-image");

    const summary =
        document.getElementById("profile-summary");

    const description =
        document.getElementById("profile-description");



    if (name) {

        name.textContent =
            attorney.name;

    }


    if (role) {

        role.textContent =
            attorney.role;

    }


    if (image) {

        image.src =
            attorney.image;

        image.alt =
            attorney.name +
            " profile illustration";

    }


    if (summary) {

        summary.textContent =
            attorney.summary;

    }


    if (description) {

        description.textContent =
            attorney.description;

    }



    /* =================================================
       UPDATE TITLE
    ================================================= */

    document.title =
        attorney.name +
        " | Law Farm";


});