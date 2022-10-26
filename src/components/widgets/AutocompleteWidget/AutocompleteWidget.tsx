import React, { useEffect, useState } from "react";
import { EuiComboBox } from "@elastic/eui";
import { fetchConceptById } from "../../../api/widget";

/**
 * A react component to provide Autosuggestion based on semlookp.
 */
function AutocompleteWidget(props: {
  /**
   * Instance of the OLS API to call.
   */
  api: string;
  /**
   * Additional parameter to pass to the API.
   *
   * This parameter could be used to filter the search results. Each parameter could be combined via
   * the special character <i><b>&</b></i>. The values of a parameter key could be combined with a comma sign
   * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
   *  <table>
   *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
   *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
   *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
   *  <tr><td>stdm</td><td>Restrict a search to an particular set of slims by name</td></tr>
   *  <tr><td>fieldtdst</td><td>Specify the fields to return, the defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
   *  <tr><td>obsoletes</td><td>Set to true to include obsoleted terms in the results</td></tr>
   *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology e.g. Only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
   *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
   *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
   *  <tr><td>rows</td><td>How many results per page</td></tr>
   *  <tr><td>start</td><td>The results page number</td></tr>
   * </table>
   */
  parameter?: string;
  /**
   * A method that is called once the set of selection changes
   * @param selectedOptions  The selected items
   */
  selectionChangedEvent: (selectedOption: {
    label: string;
    iri: string;
  }) => void;
  /**
   * Pass a pre select value.
   */
  selectOption?: { label?: string; iri: string };
  /**
   * Placeholder to show if no user input nor selection is performed.
   */
  placeholder?: string;
}) {
  const { api, parameter, ...rest } = props;
  /**
   * The set of available options.
   */
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  /**
   * Store current set of select Options. A subset of options.
   */
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; value: string }[]
  >([]);

  /**
   * If a selectOption is provided, we obtain the label via API
   */
  useEffect(() => {
    if (props.selectOption?.iri && props.selectOption?.iri.startsWith("http")) {
      fetchConceptById(props.selectOption?.iri).then((rsp) => {
        setOptions([
          {
            label: generateDisplayLabel(rsp.concept),
            value: rsp.conceptId,
          },
        ]);
        setSelectedOptions([
          {
            label: generateDisplayLabel(rsp.concept),
            value: rsp.conceptId,
          },
        ]);
      });
    }
  }, [props.selectOption]);

  /**
   * Once the set of selected options changes, pass the event by invoking the passed function.
   */
  useEffect(() => {
    if (selectedOptions.length >= 1) {
      props.selectionChangedEvent(
        selectedOptions.map((x) => {
          return { iri: x.value, label: x.label };
        })[0]
      );
    }
  }, [selectedOptions]);

  function generateDisplayLabel(item: any) {
    return (
      item.label +
      " | " +
      item.ontology_name.toUpperCase() +
      " > " +
      item.short_form
    );
  }

  const onSearchChange = (searchValue: string) => {
    if (searchValue.length > 0) {
      fetch(`${props.api}select?q=${searchValue}&${props.parameter}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => res?.response?.docs)
        .then((res) => {
          setOptions(
            res.slice(0, 9).map((item: any) => {
              return {
                label: generateDisplayLabel(item),
                value: item.iri,
              };
            })
          );
          setSelectedOptions([]);
        });
    }
  };

  function onChangeHandler(options: Array<any>): void {
    setSelectedOptions(options);
  }

  return (
    <EuiComboBox
      isClearable
      aria-label="searchBar"
      fullWidth={true}
      {...rest} // items above can be overriden by a client
      async={true}
      singleSelection={{ asPlainText: true }}
      placeholder={props.placeholder ? props.placeholder : "Search for Term"}
      options={options}
      selectedOptions={selectedOptions}
      onSearchChange={onSearchChange}
      onChange={onChangeHandler}
    />
  );
}

export { AutocompleteWidget };
