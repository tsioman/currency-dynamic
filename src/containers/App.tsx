import React from "react";
import { Graph } from "../components/Graph/Graph";
import { Button } from "../components/Button/Button";
import {
  getCurrency,
  convertCurrencyToGraph,
  ICurrencyExchange,
  IRates,
  currencyAvaiableType,
} from "../components/Currency/index";
import { InitialConfigType, ColorSetType, GraphDataType } from "../types";
interface IAppProps {
  initial: InitialConfigType;
}
interface IAppState {
  color: ColorSetType;
  graph: GraphDataType;
  currency: currencyAvaiableType;
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      color: this.props.initial.color,
      graph: this.props.initial.graph,
      currency: "RUB",
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    getCurrency.then((data: ICurrencyExchange) => {
      this.setState({
        graph: convertCurrencyToGraph(data.rates, this.state.currency, {
          width: this.props.initial.area.width,
          height: this.props.initial.area.height,
        }),
      });
    });
  }
  onClick(color: ColorSetType) {
    this.setState({ color });
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
            multiplier: 10
          }}
        />
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
