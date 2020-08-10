import React from "react";
import { Graph } from "../components/Graph/Graph";
import { Button } from "../components/Button/Button";
import {
  getCurrency,
  convertCurrencyToGraph,
  ICurrencyExchange,
  IRates,
  currencyAvaiableType,
} from "../services/Currency";
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
    const { area } = this.props.initial;
    getCurrency(this.state.currency).then((data: ICurrencyExchange) => {
      this.setState({
        graph: convertCurrencyToGraph(data.rates, this.state.currency, area),
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
            multiplier: 1,
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
