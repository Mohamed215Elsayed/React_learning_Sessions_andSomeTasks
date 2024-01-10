import React from 'react'
import ThemedButton from './ThemedButton';
const Toolbar = (props) => {
     // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <>
    <div>
      <ThemedButton theme={props.theme} />
    </div>
    </>
  )
}
export default Toolbar;