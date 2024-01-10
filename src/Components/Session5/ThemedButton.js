import React, { Component } from 'react'
const ThemeContext = React.createContext('light')
class ThemedButton extends Component {
    static contextType = ThemeContext;
  render() {
    return (
      <>
      {/* <button theme={this.props.theme} />  */}
      <button theme={this.context} />;
      </>
    )
  }
}
export default ThemedButton;
