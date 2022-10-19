import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner } from "@elastic/eui";
import {useQuery} from "react-query";
import { apiCallFn, OlsApi } from "../../../api/OlsApi";

export interface OntologyInfoWidgetProps {
  onto: string;
  api: string;
}

interface OntoInfo {
  iri: string,
  id: string,
  version: string,
  termNum: number,
  lastLoad: string,
  annotations: object; //list of key&value string pairs
}

async function getOntoData(apiCall: apiCallFn, ontoId: string): Promise<OntoInfo> {
  const response = await apiCall(undefined, undefined, {ontologyId: ontoId});

  return {
    iri: response.config.id,
    id: response.ontologyId,
    version: response.config.version,
    termNum: response.numberOfTerms,
    lastLoad: response.loaded,
    annotations: response.config.annotations ? response.config.annotations : [],
  };
}

function OntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const { onto, api } = props;
  const olsApi = new OlsApi(api);

  const infoItemStyle = {
    marginLeft: "9px"
  };

  const isAvailable = (item: any) => {
    return item != undefined && item != "" && item != []
  }

  const {
    data: ontoInfo,
    isLoading,
  } = useQuery([api, "getOntology", onto], () => { return getOntoData(olsApi.getOntology, onto); });

  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
            <b>Ontology IRI:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo && isAvailable(ontoInfo.iri) ? ontoInfo.iri.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Ontology ID:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo && isAvailable(ontoInfo.id) ? ontoInfo.id.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Version:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo && isAvailable(ontoInfo.version) ? ontoInfo.version.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Number of terms:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo && isAvailable(ontoInfo.termNum) ? ontoInfo.termNum.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Last loaded:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo && isAvailable(ontoInfo.lastLoad) ? new Date(ontoInfo.lastLoad).toLocaleString() : "-")}</p>
          </EuiFlexItem>
          {ontoInfo ? (
            Object.entries(ontoInfo.annotations).map(([annoKey,annoVal]) => (/*TODO clickable annoKey*/
              <EuiFlexItem grow={false} key={annoKey}>
                <b>{annoKey}:</b>
                <p style={infoItemStyle}>{isAvailable(annoVal) ? annoVal.toLocaleString() : "-"}</p>
              </EuiFlexItem>
              ))
          ) : ''}
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export { OntologyInfoWidget };