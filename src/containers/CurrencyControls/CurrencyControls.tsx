import React from "react";
import { Button } from "@/components/Button/Button";
import { settingsSlice } from "@/rdx/reducer/settings";
import { fetchCurrency } from "@/rdx/reducer/currency";
import { CurrencyState } from "@/rdx/reducer";
import { connect } from "react-redux";
import { InitialConfig } from "@/data";
import { ColorSetType, CurrencyAvaiableType } from "@/types/";

const mapStateToProps = ({ settings }: CurrencyState) => ({
  ...settings,
});
const mapDispatchToProps = {
  setCurrency: settingsSlice.actions.setCurrency,
  setColor: settingsSlice.actions.setColor,
  fetchCurrency,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class CurrencyControlComponent extends React.PureComponent<Props> {
  changeCurrency(value: CurrencyAvaiableType, color: ColorSetType) {
    this.props.setCurrency(value);
    this.props.setColor(color);
    this.props.fetchCurrency();
  }
  render() {
    const { buttons } = InitialConfig;
    return buttons.map((button, index) => (
      <Button
        color={button.color}
        key={index}
        onClick={() => this.changeCurrency(button.value, button.color)}
        textButton={button.value}
        isActive={this.props.currency === button.value}
      />
    ));
  }
}

export const CurrencyControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyControlComponent);
