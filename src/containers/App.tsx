import React from "react";
import { Graph } from "../components/Graph/Graph";
import { Button } from "../components/Button/Button";

import {
  getCurrency,
  convertCurrencyToGraph,
  ICurrencyExchange,
} from "../services/Currency";
import {
  InitialConfigType,
  ColorSetType,
  GraphDataType,
  CurrencyAvaiableType,
} from "../types";
interface IAppProps {
  initial: InitialConfigType;
}
interface IAppState {
  color: ColorSetType;
  graph: GraphDataType;
  currency: CurrencyAvaiableType;
}
export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      color: this.props.initial.color,
      graph: this.props.initial.graph,
      currency: "RUB",
    };
    this.setCurrency = this.setCurrency.bind(this);
  }

  componentDidMount() {
    this.updateCurrency();
  }

  componentDidUpdate(prevProps: IAppProps, prevState: IAppState) {
    if (this.state.currency !== prevState.currency) {
      this.updateCurrency();
    }
  }

  updateCurrency() {
    getCurrency(this.state.currency)
      .then((data: ICurrencyExchange) => {
        const graph = convertCurrencyToGraph(
          data.rates,
          this.state.currency,
          this.props.initial.area
        );
        this.setState({ graph });
      })
      .catch((e) =>
        this.setState(() => {
          throw new Error(e);
        })
      );
  }

  setCurrency(currency: CurrencyAvaiableType, color: ColorSetType) {
    this.setState({ currency, color });
  }

  render() {
    let buttonKey = 1;
    const { area } = this.props.initial;
    return (
      <div>
        <Graph
          data={this.state.graph}
          options={{
            width: area.width,
            height: area.height,
            color: this.state.color,
            multiplier: 1,
          }}
        />
        <div className="controls">
          <Button
            color={"red"}
            key={buttonKey++}
            onClick={() => this.setCurrency("RUB", "red")}
            textButton="RUB"
            isActive={this.state.currency === "RUB"}
          />

          <Button
            color={"green"}
            key={buttonKey++}
            onClick={() => this.setCurrency("USD", "green")}
            textButton="USD"
            isActive={this.state.currency === "USD"}
          />
        </div>
      </div>
    );
  }
}
