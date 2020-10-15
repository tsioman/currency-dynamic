import React from "react";
import { connect } from "react-redux";
import { State } from "@/rdx/reducer/thunk";
// import { fetchPeople } from "@/rdx/actions/thunk";
// import { PeopleState } from "@/rdx/store";
import { fetchPeople, clickAction } from "@/rdx/reducer/people";

const mapStateToProps = (state: State) => {
  return {
    data: state.data,
    error: state.error,
    isLoading: state.loading,
    // data: state.people.data,
    // error: state.people.error,
    // isLoading: state.people.loading,
    // isShow: state.people.show,
  };
};

const mapDispatchToProps = {
  getPeople: fetchPeople,
  clickAction: clickAction,
};

type RawReduxScreenProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class RawReduxScreen extends React.Component<RawReduxScreenProps, {}> {
  componentDidMount() {
    this.props.getPeople();
    this.props.clickAction({ show: true });
  }
  render() {
    const { isLoading, data, error } = this.props;
    // const { isLoading, data, error, isShow } = this.props;
    return (
      <div>
        {/* {isShow && <div style={{ color: "green" }}>You won!</div>} */}
        {isLoading && <span>Please wait</span>}
        {error && <span>{error}</span>}
        {data &&
          data.results.map((value, index) => (
            <div key={index}>{value.name}</div>
          ))}
      </div>
    );
  }
}

export const ReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawReduxScreen);
