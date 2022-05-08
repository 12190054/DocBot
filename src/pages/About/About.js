import React from 'react'
const About = () => {
  return (
    <div className="container">
      <div style={{paddingTop:'5%'}}>
        <h1 className="text-center">
          The DocBot Service
        </h1>
        <p>
          We agree to provide you with the DocBot service. The service includes all of the DocBot features, 
          and services that we provide to advance DocBot’s mission: To provide health awareness to the users. 
          The services is made up of the following aspects:
        </p>
        <p>
          1.	Background information on the disease
          2.	Disease Recognition based on symptom
          3.	Dynamic response by Bot
        </p>
      </div>
      
      <div style={{paddingTop:'10%'}}>
        <h1 className="text-center">
          Who can use DocBot
        </h1>
        <p>
          We want our service to be as open and inclusive as possible. So there is no restriction in availing 
          our services. If you are confused about what you are suffering from, the best option could be DocBot.
        </p>
      </div>

      <div style={{paddingTop:'10%'}}>
        <h1 className="text-center">
          About Developers
        </h1>
      </div>

    </div>
  )
}
export default About;