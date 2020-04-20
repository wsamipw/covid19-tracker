import React from "react";
export const questions = [
  {
    question: (
      <>
        <h4>Are you experiencing any of the following symptoms?</h4>
        <ul>
          <li>
            Difficulty breathing (e.g. unable to finish sentences because of
            your breathing, short of breath at rest, unable to lie down because
            of difficulty breathing); chest pain.
          </li>
          <li>Having a very hard time waking up.</li>
          <li>Fainted or lost consciousness.</li>
          <li>
            difficulty managing your daily life because of breathing
            difficulties.
          </li>
        </ul>
      </>
    ),
    type: "boolean",
    field: "symptom1",
    label: "Symptom 1",
  },
  {
    question: (
      <>
        <h4>Are you experiencing any of the following symptoms?</h4>
        <ul>
          <li>Fever</li>
          <li>New or worsening cough</li>
          <li>Shortness of breath</li>
          <li>Tiredness</li>
          <li>Sore throat</li>
          <li>Muscle aches</li>
          <li>Runny nose</li>
          <li>Headache</li>
          <li>Diarrhea/vomiting</li>
          <li>Loss of smell</li>
        </ul>
      </>
    ),
    type: "boolean",
    field: "symptom2",
    label: "Symptom 2",
  },
  {
    question: <h4>Have you been outside of Nepal within the last 30 days?</h4>,
    type: "boolean",
    field: "travel",
    label: "Travel",
  },
  {
    question: (
      <>
        <h4>Have you been in close contact with:</h4>
        <ul>
          <li>someone confirmed to have COVID-19</li>
          <li>someone who is being investigated for COVID-19</li>
          <li>someone who is symptomatic and has travelled OR</li>
          <li>lab exposure to biological material</li>
        </ul>

        <p>A close contact is:</p>
        <ul>
          <li>
            a person who provided care for the person with COVID-19, including
            family, or other caregivers, and healthcare workers who did not use
            protective equipment; or
          </li>
          <li>
            a person who lived with or otherwise had close contact (within 2
            metres) with the person with COVID-19 while they were sick; or
          </li>
          <li>
            a person who had direct contact with bodily fluids of someone who
            has been confirmed to have COVID-19 (e.g. was coughed or sneezed
            on).
          </li>
        </ul>
      </>
    ),
    type: "boolean",
    field: "closeContact",
    label: "Close Contact",
  },
  {
    question: (
      <>
      <h4>
        Provide your email address so that we will be able to send you useful
        information regarding COVID-19.
      </h4>
      <p className="text-muted"><small>This field is optional and we will never share your personal information.</small></p>
      </>
    ),
    type: "input",
    field: "email",
    label: "Email",
  },
];

export const LEVEL_ZERO = (
  <>
    <p>
      Based on the responses you have provided, your risk of having been exposed
      to COVID-19 is <strong>LOW</strong>.
    </p>
    <p>
      If your situation changes, please retake the COVID-19 Self-Assessment.
      To protect yourself and your community, continue to follow healthy
      respiratory practices and social distancing. Social distancing means
      leaving 2-meters (or more) between yourself and those around you.
    </p>
    <p>
      For more information on COVID-19, please visit{" "}
      <a
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        rel="noopener noreferrer"
        target="_blank"
      >
        World Health Organization
      </a>.
    </p>
  </>
);

export const LEVEL_ONE = (
  <>
    <p>
      Based on the responses you have provided, your risk of having been exposed
      to COVID-19 is <strong>BELOW RISK LEVEL</strong> and <strong>SELF QUARANTINE</strong> is strongly advised.
    </p>
    <p>
      If your situation changes, please retake the COVID-19 Self-Assessment.
      To protect yourself and your community, continue to follow healthy
      respiratory practices and social distancing. Social distancing means
      leaving 2-meters (or more) between yourself and those around you.
    </p>
    <p>
      For more information on COVID-19, please visit{" "}
      <a
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        rel="noopener noreferrer"
        target="_blank"
      >
        World Health Organization
      </a>.
    </p>
  </>
);

export const LEVEL_TWO = (
  <>
    <p>
      Based on the responses you have provided, your risk of having been exposed
      to COVID-19 is <strong>HIGH</strong>. Please consult a doctor and test for
      COVID-19 as soon as posible. In the meantime before the test is carried
      out, <strong>SELF QUARANTINE</strong> is strongly advised.
    </p>
    <p>
      To protect yourself and your community, continue to follow healthy
      respiratory practices and social distancing. Social distancing means
      leaving 2-meters (or more) between yourself and those around you.
    </p>
    <p>
      For more information on COVID-19, please visit{" "}
      <a
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        rel="noopener noreferrer"
        target="_blank"
      >
        World Health Organization
      </a>.
    </p>
  </>
);