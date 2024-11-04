import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../constants/constants";
import "../index.css";
import Output from "./Output";

const CodeSandbox = () => {
  // availabel languages
  const lang = [
    "javascript",
    "python",
    "cpp",
    "csharp",
    "typescript",
    "php",
    "java",
  ];
  const [value, setValue] = useState("");

  // the only way to change the language right now
  const [language, setLanguage] = useState("javascript");

  // reference to the editor to maintain the focus after refreshing
  const editorRef = useRef();

  // reference function
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <>
      <div>
        {/* displays langauage at the top*/}
        <h3>Language : {language}</h3>
        <h3>Version : {LANGUAGE_VERSIONS[language]}</h3>
        <br />

        {/* Monaco editor component*/}
        <Editor
          height="55vh"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          value={value}
          onMount={onMount}
          onChange={(value) => setValue(value)}
        />

        <br />

        <Output language={language} editorRef={editorRef} />
      </div>
    </>
  );
};

export default CodeSandbox;
