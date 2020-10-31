import { RequestLog } from "@/components/RequsetLog/RequestLog";
import React from "react";

interface IAppState {
  timeCall: string | null;
}

export class TimeLogger extends React.Component<{}, IAppState> {
  constructor({}) {
    super({});
    this.state = {
      timeCall: null,
    };
  }
  componentDidMount() {
    window.addEventListener("APICall", (event: CustomEventInit) =>
      this.setState({ timeCall: event.detail() })
    );
  }

  componentWillUnmount() {
    window.removeEventListener("APICall", (event: CustomEventInit) =>
      this.setState({ timeCall: event.detail() })
    );
  }

  render() {
    return this.state.timeCall ? (
      <RequestLog request={this.state.timeCall} />
    ) : null;
  }
}