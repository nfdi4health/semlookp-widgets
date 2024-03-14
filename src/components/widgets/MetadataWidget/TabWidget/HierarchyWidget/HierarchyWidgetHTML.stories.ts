import 'semlookp-widgets';
import {HierarchyWidgetStoryArgs, HierarchyWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetStories";
import {HierarchyWidgetProps} from "../../../../../utils/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'HierarchyWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: HierarchyWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="hierarchy_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchy(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        api:"${args.api}",
    },
    document.querySelector('#hierarchy_widget_container_${num}')
)
</script>
        `
    },
    argTypes: HierarchyWidgetStoryArgTypes,
    args: HierarchyWidgetStoryArgs
}

export {
    HierarchyWidget1
} from "root/src/components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidgetStories"
