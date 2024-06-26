import {entityTypeNames} from "../../../model/ModelTypeCheck";

export const EntityInfoWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
            "https://service.tib.eu/ts4tib/api/"
        ],
    },
    hasTitle: {
        type: { required: false },
        table: {
            defaultValue: { summary: true }
        }
    },
    ontologyId: {
        table: {
            defaultValue: { summary: undefined }
        }
    },
    entityType: {
        type: { required: false },
        control: {
            type: "radio",
        },
        table: {
            type: { summary: `${entityTypeNames.join(" | ")}` },
        },
        options: [
            "term",
            "class",
            "property",
            "individual",
            "INVALID STRING",
            ""
        ],
    },
    iri: {},
    parameter: {
        type: { required: false },
        table: {
            defaultValue: { summary: undefined }
        }
    },
    showBadges: {
        type: { required: false },
        table: {
            defaultValue: { summary: true }
        }
    },
    useLegacy: {
        type: { required: false },
        table: {
            defaultValue: { summary: true }
        }
    }
}

export const EntityInfoWidgetStoryArgs = {
    api: "https://semanticlookup.zbmed.de/api/",
    hasTitle: true,
    showBadges: true,
    useLegacy: true,
    ontologyId: "",
    entityType: "",
    parameter: ""
}


export const TermInfoWidget = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        entityType: "term",
        ontologyId: "ncit",
        hasTitle: true,
    }
};

export const PropertyInfoWidget = {
    args: {
        iri: "http://www.w3.org/2004/02/skos/core#altLabel",
        entityType: "property",
        ontologyId: "mesh"
    }
};

export const IndividualInfoWidget = {
     args: {
        iri: "http://purl.obolibrary.org/obo/IAO_0000423",
        entityType: "individual",
        ontologyId: "clo"
    }
};

export const InfoWidgetBadges = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        useLegacy: false,
        entityType: "class",
        iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
        ontologyId: "uberon"
    }
};

export const OptionalEntityTypeLegacyAPI = {
    args: {
        api: "https://semanticlookup.zbmed.de/ols/api/",
        iri: "http://purl.obolibrary.org/obo/NCIT_C88403",
    }
};

export const InfoWidgetDomain = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/NCIT_R89",
    }
};

export const InfoWidgetRange = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/RO_0002029",
    }
};

export const InfoWidgetPropertyAssertion = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
    }
};

export const InfoWidgetPropertyCharacteristics = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/MICRO_0001603",
    }
};

