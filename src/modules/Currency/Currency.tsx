import React from "react";
import { Graph } from "./components/Graph/Graph";
import { GraphBody } from "./components/GraphBody/GraphBody";
import { connect } from "react-redux";
import { fetchCurrency } from "./reducer";
import { animationSlice } from "@/modules/AnimationControls/";
import { selectCurrecnyToGraph } from "./selectors";
import { CurrencyState } from "@/store";

const mapStateToProps = (state: CurrencyState) => {
  const { currency, settings, animation } = state;
  return {
    ...currency,
    ...settings,
    ...animation,
    graph: selectCurrecnyToGraph(state),
  };
};
const mapDispatchToProps = {
  fetchCurrency,
  playControl: animationSlice.actions.setPlayingState,
};
export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class CurrencyComponent extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchCurrency();
  }

  render() {
    const { loading, error, area, graph } = this.props;
    return (
      <div>
        <h1>Dynamic graph view for selected currency and period </h1>
        {loading && <span>Please wait</span>}
        {error && <span>{error}</span>}
        {this.props.data && graph.length > 0 && (
          <GraphBody area={area}>
            <Graph
              area={area}
              data={graph}
              color={this.props.color}
              speed={this.props.speed}
              playState={this.props.playing}
              onAnimationStateChange={this.props.playControl}
              className="graphic"
            />
          </GraphBody>
        )}
      </div>
    );
  }
}

export const Currency = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyComponent);
