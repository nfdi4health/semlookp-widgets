import 'semlookp-widgets';
import {IriWidgetStoryArgs, IriWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/IriWidget/IriWidgetStories";
import {IriWidgetProps} from "../../../../utils/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'IriWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: IriWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div class="euiPanel euiPanel--plain euiPanel--paddingMedium euiCard euiCard--horizontal css-1yzwxdg-euiPanel-grow-m-m-plain-hasShadow" style="margin-bottom: 20px">
    <div id="iri_widget_container_${num}"></div>
</div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${args.iri}",
        iriText:"${args.iriText}",
        color:"${args.color}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#iri_widget_container_${num}')
)
</script>
        `
    },
    argTypes: IriWidgetStoryArgTypes,
    args: IriWidgetStoryArgs
}

export {
    IriWidget1
} from "root/src/components/widgets/MetadataWidget/IriWidget/IriWidgetStories"
