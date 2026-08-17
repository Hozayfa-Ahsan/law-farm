/* =====================================================
   PRACTICE AREA DATA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    const practiceAreas = {


        business: {

            category:
                "BUSINESS LAW",

            title:
                "Business & Corporate Law",

            intro:
                "Strategic legal guidance for businesses, entrepreneurs and organizations navigating complex commercial matters.",

            description:
                "We help businesses address legal challenges with practical advice, careful planning and strategic representation.",

            services: [

                "Business formation and structuring",

                "Commercial contracts",

                "Corporate governance",

                "Business disputes",

                "Negotiation and legal strategy"

            ]

        },


        litigation: {

            category:
                "LITIGATION",

            title:
                "Civil Litigation",

            intro:
                "Focused representation for individuals and organizations involved in complex civil disputes.",

            description:
                "Our litigation approach combines careful preparation, strategic negotiation and strong courtroom advocacy.",

            services: [

                "Civil disputes",

                "Commercial litigation",

                "Contract disputes",

                "Negotiation and settlement",

                "Trial preparation"

            ]

        },


        family: {

            category:
                "FAMILY LAW",

            title:
                "Family Law",

            intro:
                "Thoughtful legal guidance for sensitive family matters and difficult personal circumstances.",

            description:
                "We provide practical advice and representation while keeping the personal circumstances of each client at the center of our approach.",

            services: [

                "Divorce and separation",

                "Child custody matters",

                "Property division",

                "Family agreements",

                "Mediation and negotiation"

            ]

        },


        employment: {

            category:
                "EMPLOYMENT LAW",

            title:
                "Employment Law",

            intro:
                "Legal support for employers and employees dealing with workplace issues and employment disputes.",

            description:
                "We help clients understand their rights, responsibilities and legal options in employment-related matters.",

            services: [

                "Employment agreements",

                "Workplace disputes",

                "Wrongful termination matters",

                "Employment policies",

                "Workplace negotiations"

            ]

        },


        realestate: {

            category:
                "REAL ESTATE",

            title:
                "Real Estate Law",

            intro:
                "Practical legal guidance for property transactions, development and real estate disputes.",

            description:
                "We assist clients with property matters from negotiation and documentation through dispute resolution.",

            services: [

                "Property transactions",

                "Real estate contracts",

                "Property disputes",

                "Leasing matters",

                "Due diligence"

            ]

        }

    };



    /* =================================================
       GET PRACTICE AREA FROM URL
    ================================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const practiceKey =
        params.get("area") || "business";


    const practice =
        practiceAreas[practiceKey];


    if (!practice) {
        return;
    }



    /* =================================================
       UPDATE PAGE CONTENT
    ================================================= */

    const category =
        document.getElementById("practice-category");

    const title =
        document.getElementById("practice-title");

    const intro =
        document.getElementById("practice-intro");

    const description =
        document.getElementById("practice-description");

    const services =
        document.getElementById("practice-services");



    if (category) {

        category.textContent =
            practice.category;

    }


    if (title) {

        title.textContent =
            practice.title;

    }


    if (intro) {

        intro.textContent =
            practice.intro;

    }


    if (description) {

        description.textContent =
            practice.description;

    }



    if (services) {

        services.innerHTML = "";


        practice.services.forEach(function (service) {

            const li =
                document.createElement("li");


            li.textContent =
                service;


            services.appendChild(li);

        });

    }



    /* =================================================
       PAGE TITLE
    ================================================= */

    document.title =
        practice.title +
        " | Law Farm";

});