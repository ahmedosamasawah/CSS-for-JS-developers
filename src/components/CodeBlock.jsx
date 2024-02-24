import React from "react";

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("exOneVid");
  video.playbackRate = 1.7;
});

const CodeBlock = ({ blocks = [] }) => {
  const renderBlock = (block) => {
    if (block.code) {
      return (
        <>
          {block.code.map((line, index) => (
            <div key={index}>
              <span className={line.type}>{line.content}</span>
            </div>
          ))}
        </>
      );
    }

    const properties = block.properties || [];
    return (
      <>
        {block.comment ? (
          <div>
            <span className="comment">{block.comment}</span>
          </div>
        ) : null}
        {block.emptyLine ? <br /> : null}
        <div>
          <span className="selector">{block.selector} </span>
          {"{"}
        </div>
        {properties.map((prop, index) => (
          <div key={index}>
            {"  "}
            <span className="property">{prop.name}</span>:{" "}
            <span className="value">{prop.value}</span>;
          </div>
        ))}
        <div>{" }"}</div>
      </>
    );
  };

  return (
    <pre lang="en" dir="ltr">
      <code>
        {blocks.map((block, index) => (
          <React.Fragment key={index}>{renderBlock(block)}</React.Fragment>
        ))}
      </code>
    </pre>
  );
};

export default CodeBlock;
