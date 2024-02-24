const CustomTitle = (props) => {
  if (props.type === "main") {
    return (
      <h1 lang="en" dir="ltr" className="main-title">
        <span>{props.enTitle}</span>
        <span>{props.arTitle}</span>
      </h1>
    );
  } else {
    return (
      <h2 lang="en" dir="ltr" className="sec-title">
        <span>{props.enTitle}</span>
        <span>{props.arTitle}</span>
      </h2>
    );
  }
};

export default CustomTitle;
