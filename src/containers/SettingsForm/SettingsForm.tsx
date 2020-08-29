import React from "react"
import {AreaType, DatePeriodType} from "../../types";

interface ISettingsFormProps {
  onSubmit: (settings: ISettingsFormState) => void;
  area: AreaType,
  period: DatePeriodType
}

interface ISettingsFormState {
  area: AreaType,
  period: DatePeriodType
}


export class Settings extends React.Component<ISettingsFormProps, ISettingsFormState> {
  constructor(props: ISettingsFormProps) {
    super(props)
    this.state = {
      area: {width: this.props.area.width, height: this.props.area.height},
      period: {from: this.props.period.from, to: this.props.period.to}
    }
  }
  formHandle = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.onSubmit( this.state )
  }

  changePeriod = (prop: keyof DatePeriodType) => (
    ev: React.ChangeEvent
  )=> {
    this.setState({
      period: {...this.state.period, [prop]: (ev.target as HTMLInputElement).value}
    } as any)
  }

  changeArea = (prop: keyof AreaType) => (
    ev: React.ChangeEvent
  )=> {
    this.setState({
      area: {...this.state.area, [prop]: (ev.target as HTMLInputElement).value}
    } as any)
  } 

  render(){
    return(
      <form onSubmit={this.formHandle}>
        <fieldset>
            <legend>Settings</legend>            
            <label>
              Date from:
              <input 
                type="text" 
                placeholder="YYYY-MM-DD"
                value={this.state.period.from}
                onChange={this.changePeriod("from")}
              />            
            </label>
            <label>
              Date to:
              <input 
                type="text" 
                placeholder="YYYY-MM-DD"
                value={this.state.period.to}
                onChange={this.changePeriod("to")}
              />            
            </label>
            <label>
              Width:
              <input 
                type="number" 
                placeholder="px"
                value={this.state.area.width}
                onChange={this.changeArea("width")}
              />
            </label>
            <label>
              Height:
              <input 
                type="number" 
                placeholder="px"
                value={this.state.area.height}
                onChange={this.changeArea("height")}
              />
            </label>
            <button>Apply Settings</button>
          </fieldset>          
      </form>
    )
  }
}