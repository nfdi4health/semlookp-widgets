import React from "react";
import { DataContentWidget, DataContentWidgetProps } from "./DataContentWidget";

export default {
  title: "DataContentWidget",
  component: DataContentWidget,
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
          "https://semanticlookup.zbmed.de/api/",
        ],
      },
    },
    frontend: {
      defaultValue: "nfdi4health",
    },
  },
};

const Template = (args: DataContentWidgetProps) => (
  <>
    <DataContentWidget {...args} />
  </>
);

export const NFDI4HealthDataContentWidget = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
NFDI4HealthDataContentWidget.args = {  api: "https://semanticlookup.zbmed.de/api/",
};

export const SafetyDataContentWidget = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SafetyDataContentWidget.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  frontend: "safety",
};
