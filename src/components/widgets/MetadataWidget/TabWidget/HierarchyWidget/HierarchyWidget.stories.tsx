import React from "react";
import { HierarchyWidget } from "./HierarchyWidget";
import {HierarchyWidgetProps} from "../../../../../utils/types";

export default {
  title: "HierarchyWidget",
  component: HierarchyWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The HierarchyWidget is a component designed to visualize and interact with hierarchical data structures of ontology hierarchies, specifically tailored for the OLS4 API to retrieve and display hierarchical relationships between terms within a given ontology."
      }
    }
  },
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
        "http://ols4.qa.km.k8s.zbmed.de/ols4/api/"
      ],
    },
    ontologyId: {
      description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    entityType: {
      control: { type: "radio" },
      options: [
        "properties",
        "individuals",
        "classes",
        ""
      ]
    },
  },
  args: {

  }
};

const Template = (args: HierarchyWidgetProps) => <HierarchyWidget {...args} />;

export const HierarchyWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyWidget1.args = {
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  api: "http://ols4.qa.km.k8s.zbmed.de/ols4/api/",
  ontologyId: "efo",
  entityType: "properties"
};