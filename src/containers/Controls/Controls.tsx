import React from "react";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import styled from "@emotion/styled";

interface ISettingsFormProps {
  onSubmit?: (settings: ISettingsFormState) => void;
}

interface ISettingsFormState {}

const ControlsView = styled.div`
  margin: 20px 0;
`;

export class Controls extends React.PureComponent<
  ISettingsFormProps,
  ISettingsFormState
> {
  constructor(props: ISettingsFormProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ControlsView >
        <ButtonIcon icon="play"/>
        <ButtonIcon icon="pause"/>
        <ButtonIcon icon="stop"/>
      </ControlsView>
    );
  }
}
