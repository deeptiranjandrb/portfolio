import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
     {['home','about','work','skills','testimonials','contact'].map((item,index) => (

        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a 
        key={item + index} 
        className="app__navigation-dot" 
        href={`#${item}`}
        style={active=== item ? {backgroundColor: '#313BAC'}:{ }}
        />

    ))}   
    </div>
  )
}

export default NavigationDots;