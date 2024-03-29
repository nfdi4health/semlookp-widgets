import React from "react";
import { EntityInfoWidget } from "./EntityInfoWidget";
import {EntityInfoWidgetProps} from "../../../utils/types";
import {entityTypeNames} from "../../../model/ModelTypeCheck";

export default {
  title: "EntityInfoWidget",
  component: EntityInfoWidget,
  parameters: {
    layout: "centered",
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
        "not specified",
        undefined
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
  },
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    hasTitle: true,
    showBadges: true,
    useLegacy: true,
  }
};

const Template = (args: EntityInfoWidgetProps) => (
  <EntityInfoWidget {...args} />
);

export const TermInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TermInfoWidget.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  entityType: "term",
  ontologyId: "ncit"
};

export const PropertyInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PropertyInfoWidget.args = {
  iri: "http://www.w3.org/2004/02/skos/core#altLabel",
  entityType: "property",
  ontologyId: "mesh"
};

export const IndividualInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IndividualInfoWidget.args = {
  iri: "http://purl.obolibrary.org/obo/IAO_0000423",
  entityType: "individual",
  ontologyId: "clo"
};

export const InfoWidgetBadges = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InfoWidgetBadges.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  entityType: "class",
  iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
  ontologyId: "uberon"
};

export const OptionalEntityTypeLegacyAPI = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OptionalEntityTypeLegacyAPI.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  iri: "http://purl.obolibrary.org/obo/NCIT_C88403",
};

export const InfoWidgetDomain = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InfoWidgetDomain.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/NCIT_R89",
};

export const InfoWidgetRange = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InfoWidgetRange.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/RO_0002029",
};

export const InfoWidgetPropertyAssertion = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InfoWidgetPropertyAssertion.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
};

export const InfoWidgetPropertyCharacteristics = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InfoWidgetPropertyCharacteristics.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  iri: "http://purl.obolibrary.org/obo/MICRO_0001603",
};