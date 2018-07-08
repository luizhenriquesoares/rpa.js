import * as React from 'react'
import Start from './start'

interface IAppProps {}
interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  public constructor(props: IAppProps) {
    super(props)
  }

  public render() {
    return (
      <div id="desktop-app-chrome">
        <Start />
      </div>
    )
  }
}
