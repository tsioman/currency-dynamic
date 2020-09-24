import React, { useEffect, useReducer } from "react";

interface IAnimateState {
  frame: number;
  isRunning: false;
}
let timerId: NodeJS.Timeout;
const fps = 60;

export const withAnimate = (Component, animateData) => {
  console.log(animateData)
  return (props) => {
    const [state, dispatch] = useReducer ((
      prevState: IAnimateState,
      action: { type: string; frameInitial?: number }
    ) => {
      switch (animateData.playState) {
        case "running": {
          return {
            ...prevState,
            isRunning: true,
            frame: action.frameInitial
          }
        }
        case "NEXT": {
          return {
            ...prevState,
            frame: prevState.frame + 1
          }
        } 
        default:
          return prevState;
      }
    },
    {
      frame: 0,
      isRunning: false
    })

    useEffect(()=>{
      let timerId = -1
      if (state.isRunning) {
        timerId = setInterval(() => {
          dispatch({ type: "NEXT" });
        }, 1000 / fps);
      }
      return () => clearInterval(timerId);
    }, [state.isRunning]);
    dispatch(animateData.playState)
    console.log (state)
    return <Component {...props} frame={state.frame}/>;
  };
};
