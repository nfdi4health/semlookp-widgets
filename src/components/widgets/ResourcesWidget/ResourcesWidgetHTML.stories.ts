import 'semlookp-widgets';
import {ResourcesWidgetStoryArgs, ResourcesWidgetStoryArgTypes} from "root/src/components/widgets/ResourcesWidget/ResourcesWidgetStories";
import {ResourcesWidgetProps} from "../../../utils/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'ResourcesWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: ResourcesWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="resources_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createResources(
    {
        api:"${args.api}",
        initialEntriesPerPage:${args.initialEntriesPerPage},
        pageSizeOptions:[${args.pageSizeOptions}],
        initialSortField:"${args.initialSortField}",
        initialSortDir:"${args.initialSortDir}",
        targetLink:"${args.targetLink}",
        actions:[${args.actions}],
        parameter:"${args.parameter}",
    },
    document.querySelector('#resources_widget_container_${num}')
)
</script>
        `
    },
    argTypes: ResourcesWidgetStoryArgTypes,
    args: ResourcesWidgetStoryArgs
}

export {
    ResourcesWidget1,
    // TODO: currently don't work because actions uses Eui React components.
    //       Usage of react components inside args should be avoided
    // WithActions,
    // WithActionsAndSafety
} from "root/src/components/widgets/ResourcesWidget/ResourcesWidgetStories"
