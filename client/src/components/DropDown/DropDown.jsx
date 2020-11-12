import React from "react";
import Form from 'react-bootstrap/Form'

const DropDown = () => {
return(
<>

  {['ADHD', 'Dyslexia', 'Dyscalculia', 'Dysgraphia', 'Processing Deficits'].map((category) => (
    <div key={`${category}`} className="mb-3">
      <Form.Check 
        type="checkbox"
        id={`${category}`}
        label={`${category}`}
      />
    </div>
  ))}

</>
)
}
export default DropDown;