import React from "react";
import { Graph } from "../components/Graph/Graph";
import { Button } from "../components/Button/Button";
import { RequestLog } from "../components/RequsetLog/RequestLog";
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
  timeCall: string | null;
}
export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      color: this.props.initial.color,
      graph: this.props.initial.graph,
      currency: "RUB",
      timeCall: null,
    };
    this.setCurrency = this.setCurrency.bind(this);
    this.updateTimeLog = this.updateTimeLog.bind(this);
  }

  componentDidMount() {
    window.addEventListener("APICall", (event: CustomEventInit) =>
      this.updateTimeLog(event.detail())
    );
    this.updateCurrency();
  }

  componentDidUpdate(prevProps: IAppProps, prevState: IAppState) {
    if (this.state.currency !== prevState.currency) {
      this.updateCurrency();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("APICall", (event: CustomEventInit) =>
      this.updateTimeLog(event.detail())
    );
  }

  updateTimeLog(timeCall: string) {
    this.setState({ timeCall });
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
          {this.props.initial.buttons.map((button) => (
            <Button
              color={button.color}
              key={buttonKey++}
              onClick={() => this.setCurrency(button.value, button.color)}
              textButton={button.value}
              isActive={this.state.currency === button.value}
            />
          ))}
          {this.state.timeCall && <RequestLog request={this.state.timeCall} />}
        </div>
      </div>
    );
  }
}
