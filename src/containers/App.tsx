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
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    getCurrency(this.state.currency).then((data: ICurrencyExchange) => {
      this.setState({
        graph: convertCurrencyToGraph(
          data.rates,
          this.state.currency,
          this.props.initial.area
        ),
      });
    });
  }

  shouldComponentUpdate(nextProps: IAppProps, nextState: IAppState) {
    return (
      nextState.currency !== this.state.currency
    );
  }

  componentDidUpdate() {
    getCurrency(this.state.currency).then((data: ICurrencyExchange) => {
      this.setState({
        graph: convertCurrencyToGraph(
          data.rates,
          this.state.currency,
          this.props.initial.area
        ),
      });
    });
  }

  onClick(currency: CurrencyAvaiableType) {
    this.setState({ currency });
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
            onClick={() => this.onClick("RUB")}
            textButton="RUB"
            isActive={this.state.currency === "RUB"}
          />

          <Button
            color={"green"}
            key={buttonKey++}
            onClick={() => this.onClick("USD")}
            textButton="USD"
            isActive={this.state.currency === "USD"}
          />
        </div>
      </div>
    );
  }
}
