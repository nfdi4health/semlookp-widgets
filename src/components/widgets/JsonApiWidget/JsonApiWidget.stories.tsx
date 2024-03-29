import React from "react";
import { JsonApiWidget } from "./JsonApiWidget";
import {JsonApiWidgetProps} from "../../../utils/types";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "JsonApiWidget",
  component: JsonApiWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    apiQuery: {},
    buttonText: {},
    buttonSize: {
      table: {
        type: { summary: `s | m` },
      },
      control: {
        type: "radio",
      },
      options: [
        "s",
        "m",
      ],
    },
  },
};

const Template = (args: JsonApiWidgetProps) => (
  <EuiPanel>
    <JsonApiWidget {...args} />
  </EuiPanel>
);

export const JsonApiWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
JsonApiWidget1.args = {
  apiQuery: "https://semanticlookup.zbmed.de/ols/api/ontologies/atc",
  buttonText: "show JSON",
  buttonSize: "m",
};
