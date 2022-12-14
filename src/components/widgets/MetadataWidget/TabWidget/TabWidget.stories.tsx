import React from "react";
import { TabWidget, TabWidgetProps } from "./TabWidget";

export default {
  title: "TabWidget",
  component: TabWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      description: "Instance of the OLS API to call.",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
    },
    iri: {
      description: "Iri of the term you want to fetch the tab information for.",
    },
    linkToSelf: {
      description: "Link to the source of the ontology terms",
    },
  },
};

const Template = (args: TabWidgetProps) => <TabWidget {...args} />;

export const TabWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidget1.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  linkToSelf: "https://semanticlookup.zbmed.de/ols/api/ontologies/ncit/terms/",
};
