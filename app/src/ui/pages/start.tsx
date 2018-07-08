import * as React from 'react'

interface IStartProps {
  /**
   * Event trigger when the moused clicked.
   */
  //readonly onClick: () => void
}

interface IStartState {
  /**
   * component state
   */
  readonly updatedState: Boolean
}

class Start extends React.Component<IStartProps, IStartState> {
  public constructor(props: IStartProps) {
    super(props)
    this.state = {
      updatedState: false,
    }
    console.log('contructor', this.state.updatedState)
  }

  public DispatchButton = () => {
    this.setState({ updatedState: true })
    console.log('DispatchButton', this.state.updatedState)
  }

  public render() {
    return <button>Atualizar Estado</button>
  }
}

export default Start
