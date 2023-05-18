import React from "react";
import { marked } from "marked";

/*
Se debe tener marcadores que representen un heading element (h1), 
un h2, un link, un inline code, un code block, un ul, 
un blockquote / cinta en bloque, una imagen y un texto en negrita.
*/

function App() {
  const [text, setText] = React.useState(`
# H1
## H2
[title](https://youtube.com/)

\`code\`

\`\`\`
{
    "fistName":"Nico",
    "lastName": "Perdomo",
    "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.png)

**bold text**


`);

    marked.setOptions({
        breaks: true
    })

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
    <div class="editorWrap">
      <div class="toolbar">Editor</div>
      <textarea id="editor" type="text"  value={text} onChange={(e) => handleChange(e)}>
      </textarea></div>
      

      <div class="previewWrap">
        <div class="toolbar">
        Previewer</div>
      <div id="preview"
       dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
      >
          
    </div>
    </div>
    </>
  );
}

export default App;
