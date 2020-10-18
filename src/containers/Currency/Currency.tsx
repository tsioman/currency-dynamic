import React from "react";
import { Graph } from "components/Graph/Graph";
import { GraphBody } from "@/components/GraphBody/GraphBody";

import "@/../css/main.css";
import { connect } from "react-redux";
import { fetchCurrency } from "@/rdx/reducer/currency";
import { CurrencyState } from "@/rdx/reducer";
import { animationSlice } from "@/rdx/reducer/animation";

const mapStateToProps = ({ currency, settings, animation }: CurrencyState) => ({
  ...currency,
  ...settings,
  ...animation
});
const mapDispatchToProps = {
  fetchCurrency,
  playControl: animationSlice.actions.setPlayingState
};
export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class CurrencyComponent extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchCurrency();
  }

  render() {
    const { loading, data, error, area } = this.props;
    return (
      <div>
        <h1>Dynamic graph view for selected currency and period </h1>
        {loading && <span>Please wait</span>}
        {error && <span>{error}</span>}
        {data && (
          <svg width={area.width} height={area.height}>
            <GraphBody area={area} />
            <Graph 
              area={area}
              data={data.graph}
              color={this.props.color}
              speed={this.props.speed}
              playState={this.props.playing}
              onAnimationStateChange={this.props.playControl}
              className="graphic"
            />
          </svg>
        )}
      </div>
    );
  }
}

export const Currency = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyComponent);
