/* =====================================================
   CASE RESULT DATA
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    const cases = {


        commercial: {

            category:
                "COMMERCIAL LITIGATION",

            title:
                "Commercial Contract Dispute",

            intro:
                "Strategic representation in a complex commercial contract dispute.",

            result:
                "Favorable Resolution",

            description:
                "Our team represented a business client involved in a complex contractual dispute. The matter required careful review of the underlying agreements, detailed negotiations and a focused legal strategy.",

            approach:
                "We analyzed the contractual obligations, identified the central legal issues and developed a strategy designed to protect the client's commercial interests.",

            outcome:
                "The matter was resolved through a favorable negotiated outcome without the need for prolonged proceedings.",

            area:
                "Commercial Litigation",

            type:
                "Contract Dispute",

            resolution:
                "Negotiated Settlement"

        },


        corporate: {

            category:
                "CORPORATE LAW",

            title:
                "Business Transaction Advisory",

            intro:
                "Strategic legal guidance during a significant commercial business transaction.",

            result:
                "Transaction Completed",

            description:
                "Our team advised a growing company through a significant commercial transaction involving contract review, negotiation and assessment of potential legal and commercial risks.",

            approach:
                "We reviewed the relevant transaction documents, identified key contractual considerations and worked with the client to address potential risks while supporting the client's commercial objectives.",

            outcome:
                "The transaction was completed following careful legal review, negotiation and resolution of the identified contractual issues.",

            area:
                "Corporate Law",

            type:
                "Business Transaction",

            resolution:
                "Transaction Completed"

        },


        employment: {

            category:
                "EMPLOYMENT LAW",

            title:
                "Workplace Dispute",

            intro:
                "Representation involving a complex employment-related dispute.",

            result:
                "Dispute Resolved",

            description:
                "The matter involved a workplace dispute requiring careful analysis of employment agreements, applicable obligations and the circumstances surrounding the disagreement.",

            approach:
                "Our approach focused on understanding the client's objectives, assessing the available legal options and pursuing a practical resolution.",

            outcome:
                "The dispute was resolved through a negotiated agreement acceptable to the client.",

            area:
                "Employment Law",

            type:
                "Workplace Dispute",

            resolution:
                "Negotiated Resolution"

        },


        property: {

            category:
                "REAL ESTATE",

            title:
                "Property Transaction",

            intro:
                "Legal guidance during a complex commercial property transaction.",

            result:
                "Transaction Completed",

            description:
                "The client required legal assistance during a property transaction involving multiple contractual and documentation issues.",

            approach:
                "We reviewed the transaction documents, identified potential legal issues and worked with the client to address the relevant concerns before completion.",

            outcome:
                "The transaction was completed following successful resolution of the identified legal issues.",

            area:
                "Real Estate Law",

            type:
                "Property Transaction",

            resolution:
                "Transaction Completed"

        },


        civil: {

            category:
                "CIVIL LITIGATION",

            title:
                "Civil Dispute",

            intro:
                "Focused representation in a contested civil matter.",

            result:
                "Favorable Resolution",

            description:
                "The client sought representation in a civil dispute involving competing claims and significant legal considerations.",

            approach:
                "Our team reviewed the relevant evidence, assessed the legal position and developed a focused strategy based on the client's objectives.",

            outcome:
                "The matter reached a favorable resolution following strategic negotiation.",

            area:
                "Civil Litigation",

            type:
                "Civil Dispute",

            resolution:
                "Negotiated Resolution"

        }

    };



    /* =================================================
       GET CASE FROM URL
    ================================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const caseKey =
        params.get("case") || "commercial";


    const caseData =
        cases[caseKey];


    if (!caseData) {
        return;
    }



    /* =================================================
       PAGE ELEMENTS
    ================================================= */

    const category =
        document.getElementById("case-category");

    const title =
        document.getElementById("case-title");

    const intro =
        document.getElementById("case-intro");

    const result =
        document.getElementById("case-result");

    const description =
        document.getElementById("case-description");

    const approach =
        document.getElementById("case-approach");

    const outcome =
        document.getElementById("case-outcome");

    const metaArea =
        document.getElementById("case-meta-area");

    const metaType =
        document.getElementById("case-meta-type");

    const metaResolution =
        document.getElementById("case-meta-resolution");



    /* =================================================
       UPDATE CONTENT
    ================================================= */

    if (category) {

        category.textContent =
            caseData.category;

    }


    if (title) {

        title.textContent =
            caseData.title;

    }


    if (intro) {

        intro.textContent =
            caseData.intro;

    }


    if (result) {

        result.textContent =
            caseData.result;

    }


    if (description) {

        description.textContent =
            caseData.description;

    }


    if (approach) {

        approach.textContent =
            caseData.approach;

    }


    if (outcome) {

        outcome.textContent =
            caseData.outcome;

    }


    if (metaArea) {

        metaArea.textContent =
            caseData.area;

    }


    if (metaType) {

        metaType.textContent =
            caseData.type;

    }


    if (metaResolution) {

        metaResolution.textContent =
            caseData.resolution;

    }



    /* =================================================
       PAGE TITLE
    ================================================= */

    document.title =
        caseData.title +
        " | Law Farm";

});