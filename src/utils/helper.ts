export function getErrorMessageToDisplay(error: any, messagePlaceholder = "information"): string {
    const error_msg : string = error.message;
    if(error_msg === ("Response contains 0 elements")) {
        return "No elements found";
    }
    else return `No ${messagePlaceholder} available`;
}

import {OlsApi} from "../api/OlsApi";

/**
 * returns JSON of specified ontology or, if not provided, of defining ontology or of first ontology if defining ontology is not found
 */
export async function getPreferredOntologyJSON(olsApi: OlsApi, entityType: string, ontologyId: string | undefined, iri: string, parameter: string | undefined) {
    if(entityType === "term" || entityType === "class") {
        const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
            .catch((error) => console.log(error));
        const definingOntologyArr = response["_embedded"]["terms"].filter((term: any) => {return term["is_defining_ontology"]});
        if(definingOntologyArr.length > 0) return definingOntologyArr[0];
        else return response["_embedded"]["terms"][0];
    }
    else if(entityType === "property") {
        const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
            .catch((error) => console.log(error));
        const definingOntologyArr = response["_embedded"]["properties"].filter((term: any) => {return term["is_defining_ontology"]});
        if(definingOntologyArr.length > 0) return definingOntologyArr[0];
        else return response["_embedded"]["properties"][0];
    }
    else if(entityType === "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
            .catch((error) => console.log(error));
        const definingOntologyArr = response["_embedded"]["individuals"].filter((term: any) => {return term["is_defining_ontology"]});
        if(definingOntologyArr.length > 0) return definingOntologyArr[0];
        else return response["_embedded"]["individuals"][0];
    }
    else {
        console.error(Error("Unexpected entity type. Should be one of: 'term', 'class', 'property', 'individual'"));
        return undefined;
    }
}