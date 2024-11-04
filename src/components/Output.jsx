import React, { useState } from "react";
import { sentCode } from "../constants/api";
import "../index.css";

const Output = ({ language, editorRef }) => {
  const [intialOutput, setInitialOutput] = useState(
    `click the run button to execute ${language} source code`
  );

  const runCode = async () => {
    const source = editorRef.current.getValue();
    try {
      const data = await sentCode(language, source);
      setInitialOutput(data.run.output);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <h3>Output</h3>
        <button onClick={runCode}>Run {language} code</button>
        <br />
        <br />
        <div>{intialOutput}</div>
      </div>
    </>
  );
};

export default Output;
