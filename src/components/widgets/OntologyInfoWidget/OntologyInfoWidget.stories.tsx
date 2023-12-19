import React from "react";
import { OntologyInfoWidget, OntologyInfoWidgetProps } from "./OntologyInfoWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "OntologyInfoWidget",
  component: OntologyInfoWidget,
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
      description: "ID of the ontology whose info should be displayed.",
    },
    parameter: {
      type: { required: false }
    },
  },
  args: {
    parameter: "collection=nfdi4health",
  }
};

const Template = (args: OntologyInfoWidgetProps) => (
  <EuiPanel>
    <OntologyInfoWidget {...args} />
  </EuiPanel>
);

export const OntologyInfoWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OntologyInfoWidget1.args = {  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "atc",
};
