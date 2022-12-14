# SemLookP Widgets



## About the project

This project includes a widget component library derived from the semantic lookup service SemLookP.
SemLookP supports metadata annotation as well as data search in the area of translational medicine. 
The service is based on software developed by EBI: the [Ontology Lookup Service (OLS)](https://www.ebi.ac.uk/ols/index) and the mapping service [Ontology Xref Service (OxO)](https://www.ebi.ac.uk/spot/oxo/). 
The widgets are built with React and TypeScript. The components can be viewed, built and tested with the included Storybook.

## Table of contents
* [About the project](#about-the-project)
* [Documentation](#documentation)
* [Requirements](#requirements)
* [Setup](#setup)
  * [Run Storybook](#run-storybook)
  * [Publish](#publish-components)
  * [Install package](#install-package)
* [Components](#components)
* [Funding](#funding)

## Documentation
[Documentation](https://nfdi4health.github.io/semlookp-widgets/)  
[Latest Release](https://github.com/nfdi4health/semlookp-widgets/releases)

## Built with

- [ReactJS 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [TypeScript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
- [Rollup](https://rollupjs.org)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Elastic UI](https://elastic.github.io/eui/#/)
- [Storybook](https://storybook.js.org/)

## Requirements
The following tool is required to run the storybook.

- [Node.js 16](https://joshtronic.com/2021/05/09/how-to-install-nodejs-16-on-ubuntu-2004-lts/)

## Setup

Before starting the storybook for the first time you must run the following command.
```
npm install
```

### Run Storybook

To start the storybook use the following command

```
npm run storybook
```
Note: The Storybook uses per default port 6006.

### Publish Components
The NPM package is published to the package registry on every push to the main branch. Please update the version number accordingly.

### Install package

Install from the command line:
```
 npm install @nfdi4health/semlookp-widgets@<version>
```
Install via package.json:
```
 "@nfdi4health/semlookp-widgets": <version>
```

Notes:

- The widgets are based on Elastic UI components. To load the correct appearance of the widgets, wrap them inside the
  `<EuiProvider>` component. Elastic UI needs following peer dependencies to work correctly:

```
npm install @elastic/eui @elastic/datemath @emotion/react moment prop-types
```
For help see [ElasticUI Provider](https://elastic.github.io/eui/#/utilities/provider)

- The HierarchyWidget uses react-query to fetch data. To make the widget work properly, you have to wrap the component inside a `QueryClientProvider`.

For help see [QueryClient](https://tanstack.com/query/v4/docs/reference/QueryClient?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/QueryClient)

## Components

- IriWidget: Displays the IRI of a given term
- DescriptionWidget: Displays the description of a widget
- MetaDataWidget: Widget that displays the name, IRI, ontology hierarchy, description, alternative names, hierarchy and cross-references of a term
- OntologyHierarchyWidget: Widget that displays badges of the current term and it's ontology
- AlternativeNameTabWidget: Widget that displays all alternative names of a term
- CrossRefTabWidget: Widget that displays all cross-references of a term
- HierarchyTabWidget: Widget that displays the term hierarchy
- TabWidget: Widget that combines the AlternativeNameTabWidget, HierarchyTabWidget, CrossRefTabWidget
- Autocomplete Widget: Widget that searches an instance of OLS for matching terms

For more information about the existing widgets and its properties run the included Storybook.

## Funding

This work was done as part of the NFDI4Health Consortium and is published on behalf of this Consortium (www.nfdi4health.de). 
It is funded by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) ??? project number 442326535.