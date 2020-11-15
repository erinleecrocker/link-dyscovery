import React from "react";
import Form from 'react-bootstrap/Form'

const DropDown =  React.forwardRef(
  ({ value, handleChange, isChecked }, ref) => (
<>

  {['ADHD', 'Dyslexia', 'Dyscalculia', 'Dysgraphia', 'Processing Deficits'].map((category) => (
    <div key={`${category}`} className="mb-3">
      <Form.Check 
        type="checkbox"
        id={`${category}`}
        label={`${category}`}
        value={value}
        onChange={handleChange}
        checked={isChecked}
        ref={ref}
      />
    </div>
  ))}

</>
)
)
export default DropDown;