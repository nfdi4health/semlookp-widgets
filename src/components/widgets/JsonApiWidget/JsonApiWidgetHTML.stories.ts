import 'semlookp-widgets';
import {JsonApiWidgetProps} from "../../../app/types";
import {JsonApiWidgetStoryArgs, JsonApiWidgetStoryArgTypes} from "./JsonApiWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'JsonApiWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: JsonApiWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="json_api_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createJsonApi(
    {
        apiQuery:"${args.apiQuery}",
        buttonText:"${args.buttonText}",
        buttonSize:"${args.buttonSize}",
    },
    document.querySelector('#json_api_widget_container_${num}')
)
</script>
        `
    },
    argTypes: JsonApiWidgetStoryArgTypes,
    args: JsonApiWidgetStoryArgs
}

export {
    JsonApiWidget1
} from "./JsonApiWidgetStories"