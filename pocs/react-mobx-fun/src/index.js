import React from "react";
import { render } from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class AppState {
  timer = 0;

  constructor() {
    makeAutoObservable(this);
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  reset = () => {
    this.timer = 0;
  };
}

const TimerView = observer(({ appState }) => (
  <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));

render(
  <div>
    <TimerView appState={new AppState()} />
  </div>,
  document.getElementById("root")
);
