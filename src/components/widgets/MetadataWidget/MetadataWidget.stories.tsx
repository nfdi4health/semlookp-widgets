import React from "react";
import { MetadataWidget, MetadataWidgetProps } from "./MetadataWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "MetadataWidget",
  component: MetadataWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      description: "Instance of the OLS API to call.",
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    ontologyId: {
      description: "Ontology ID from where the term metadata should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the metadata for.",
    },
    entityType: {
      description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio",
      },
      options: [
        "term",
        "class",
        "property",
        "individual",
        "INVALID STRING"
      ],
    },
    parameter: {
      type: { required: false }
    },
  }
};

const Template = (args: MetadataWidgetProps) => (
  <EuiPanel>
    <MetadataWidget {...args} />
  </EuiPanel>
);

export const MetadataWidget1 = Template.bind({});
// @ts-ignore
MetadataWidget1.storyName = "Metadata Widget"
// @ts-ignore
MetadataWidget1.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
  useLegacy: true
};

export const OLS3 = Template.bind({});
// @ts-ignore
OLS3.storyName = "OLS3"
// @ts-ignore
OLS3.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
  useLegacy: true
};

export const OLS4V1 = Template.bind({});
// @ts-ignore
OLS4V1.storyName = "OLS4 V1"
// @ts-ignore
OLS4V1.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
  useLegacy: true
};

export const OLS4V2 = Template.bind({});
// @ts-ignore
OLS4V2.storyName = "OLS4 V2"
// @ts-ignore
OLS4V2.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
  useLegacy: false
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: ""
};
