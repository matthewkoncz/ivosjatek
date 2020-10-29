// Import ReactJS module.
import React, { Component } from "react";

// Import components.
import CardGroupList from './../../components/cards-page/CardGroupList';

// Import translate function.
import { t } from "./../../i18n";

/**
 * The cards of the selected category listed.
 */
export default class SelectedCardGroup extends Component {

  render() {

    if (!this.mounted) {
      return <div></div>;
    }

    let group = "inner_quality";
    let title = t("cards.inner_quality");

    return (
      <CardGroupList
        group={group}
        title={title}
      />
    );
  }
}