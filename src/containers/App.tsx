import React from "react";
import { Graph } from "../components/Graph/Graph";
import { Button } from "../components/Button/Button";
import { RequestLog } from "../components/RequsetLog/RequestLog";
import { Settings } from "../containers/SettingsForm/SettingsForm";
import { getCurrentDate } from "../util/date";

import {
  getCurrency,
  ratesToData,
  ICurrencyExchange,
  dataToGraphZoom,
} from "../services/Currency";

import {
  InitialConfigType,
  ColorSetType,
  GraphDataType,
  CurrencyAvaiableType,
  DatePeriodType,
  AreaType,
} from "../types";
interface IAppProps {
  initial: InitialConfigType;
}
interface IAppState {
  color: ColorSetType;
  graph: GraphDataType;
  graphData: number[];
  currency: CurrencyAvaiableType;
  timeCall: string | null;
  period: DatePeriodType;
  area: AreaType;
}
export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      color: this.props.initial.color,
      graphData: [],
      graph: this.props.initial.graph,
      area: this.props.initial.area,
      currency: "RUB",
      timeCall: null,
      period: {
        from: "2020-07-01",
        to: getCurrentDate(),
      },
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
    if (
      this.state.currency !== prevState.currency ||
      this.state.period !== prevState.period
    ) {
      this.updateCurrency();
    }
    if (this.state.area !== prevState.area) {
      this.setState({
        graph: dataToGraphZoom(this.state.graphData, this.state.area),
      });
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
    getCurrency(this.state.currency, this.state.period)
      .then((data: ICurrencyExchange) => {
        const graphData = ratesToData(data.rates, this.state.currency);
        this.setState({
          graphData,
          graph: dataToGraphZoom(graphData, this.state.area),
        });
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

  onSettingsSubmit = (settings: Partial<IAppState>) => {
    if (settings.period) {
      this.setState({ period: settings.period });
    }
    if (settings.area) {
      this.setState({ area: settings.area });
    }
  };

  render() {
    let buttonKey = 0;
    return (
      <div>
        <Graph
          data={this.state.graph}
          options={{
            area: this.state.area,
            color: this.state.color,
            multiplier: 1,
          }}
          className="graphic"
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
          <Settings
            area={this.state.area}
            period={this.state.period}
            onSubmit={this.onSettingsSubmit}
          />
        </div>
      </div>
    );
  }
}
