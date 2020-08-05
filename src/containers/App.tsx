import React from "react";
import { Graph } from "../components/Graph/Graph";
import { Button } from "../components/Button/Button";

import { InitialConfigType, ColorSetType, GraphDataType } from "../types";

import {
  getCurrency,
  convertCurrencyToGraph,
  ICurrencyExchange,
  IRates,
  currencyAvaiableType,
} from "../components/Currency/index";

interface IAppProps {
  initial: InitialConfigType;
}
interface IAppState {
  color: ColorSetType;
  graph: GraphDataType;
  currency: currencyAvaiableType;
  rates: IRates;
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      rates: {},
      currency: "RUB",
      color: this.props.initial.color,
      graph: this.props.initial.graph,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    getCurrency.then((data: ICurrencyExchange) => {
      this.setState({ rates: data.rates });
      this.loadGraph()
    });
  }

  onClick(color: ColorSetType) {
    this.setState({ color });
  }


  loadGraph() {
    this.setState({
      graph: convertCurrencyToGraph(this.state.rates, this.state.currency),
    });
  }

  render() {
    let buttonKey = 1;
    return (
      <div>
        <Graph data={this.state.graph} options={{width: 300, height: 300, color: this.state.color}}/>
        <div className="controls">
          {this.props.initial.colorSet.map((color) => (
            <Button
              color={color}
              key={buttonKey++}
              onClick={() => this.onClick(color)}
              textButton={color}
              isActive={this.state.color === color}
            />
          ))}
        </div>
      </div>
    );
  }
}
