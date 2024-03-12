import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface DescriptionWidgetProps {
    iri?: string;
    ontologyId?: string;
    api: string;
    descText?: string;
    entityType:
        | "ontology"
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property"
        | string;
    parameter?: string,
    color: string,
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'DescriptionWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div class="euiPanel euiPanel--plain euiPanel--paddingMedium euiCard euiCard--horizontal css-1yzwxdg-euiPanel-grow-m-m-plain-hasShadow" style="margin-bottom: 20px">
    <div id="description_widget_container_${num}"></div>
</div>

<script type="text/javascript">
window['SemLookPWidgets'].createDescription(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        descText:"${args.descText}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        color:"${args.color}",
    },
    document.querySelector('#description_widget_container_${num}')
)
</script>
        `
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
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        color: {
            description: "Color of the text, names, hex or rgb",
            control: {
                type: "radio",
            },
            options: [
                "default",
                "subdued",
                "success",
                "accent",
                "danger",
                "warning",
                "ghost",
                "#00FFFF",
                "rgb(255,0,255)",
            ],
            table: {
                type: {
                    summary: "union",
                },
            }
        },
        descText: {
            description: "Set your own text manually that overwrites the text fetched from the API",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        ontologyId: {
            description: "Ontology ID from where the object description should be taken.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        entityType: {
            description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
            control: {
                type: "radio",
            },
            options: [
                "ontology",
                "term",
                "class",
                "property",
                "individual",
                "INVALID STRING"
            ],
            table: {
                type: {
                    summary: "union",
                },
            }
        },
        iri: {
            description: "Object IRI whose description you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        parameter: {
            table: {
                type: {
                    summary: "string",
                },
            }
        },
    },
} satisfies Meta<DescriptionWidgetProps>;

export default meta;
type Story = StoryObj<DescriptionWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const DescriptionWidget1: Story = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit",
        entityType: "term",
        descText: "",
        parameter: "collection=nfdi4health"
    },
};