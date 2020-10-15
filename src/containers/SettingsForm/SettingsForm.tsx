import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AreaType, DatePeriodType } from "../../types";
interface ISettingsFormProps {
  onSubmit: (settings: ISettingsFormState) => void;
  area: AreaType;
  period: DatePeriodType;
}

interface ISettingsFormState {
  area: AreaType;
  period: DatePeriodType;
}

export class Settings extends React.PureComponent<
  ISettingsFormProps,
  ISettingsFormState
> {
  constructor(props: ISettingsFormProps) {
    super(props);
    this.state = {
      area: { width: this.props.area.width, height: this.props.area.height },
      period: { from: this.props.period.from, to: this.props.period.to },
    };
  }
  formHandle = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.onSubmit(this.state);
  };

  changePeriod = (prop: keyof DatePeriodType) => (ev: React.ChangeEvent) => {
    this.setState({
      period: {
        ...this.state.period,
        [prop]: (ev.target as HTMLInputElement).value,
      },
    } as any);
  };

  changeArea = (prop: keyof AreaType) => (ev: React.ChangeEvent) => {
    this.setState({
      area: {
        ...this.state.area,
        [prop]: (ev.target as HTMLInputElement).value,
      },
    } as any);
  };

  render() {
    return (
      <form style={{margin: "10px 0"}} onSubmit={this.formHandle}>
        <fieldset>
          <legend>Settings</legend>
          <Input
            labelText="Date from:"
            type="text"
            placeholder="YYYY-MM-DD"
            value={this.state.period.from}
            onChange={this.changePeriod("from")}
          />
          <Input
            labelText="Date to:"
            type="text"
            placeholder="YYYY-MM-DD"
            value={this.state.period.to}
            onChange={this.changePeriod("to")}
          />
          <Input
            labelText="Width:"
            type="number"
            placeholder="px"
            value={this.state.area.width}
            onChange={this.changeArea("width")}
          />
          <Input
            labelText="Height:"
            type="number"
            placeholder="px"
            value={this.state.area.height}
            onChange={this.changeArea("height")}
          />
          <Button
            isFormButton={true}
            textButton="Apply"
            onClick={() => this.formHandle}
          />
        </fieldset>
      </form>
    );
  }
}
