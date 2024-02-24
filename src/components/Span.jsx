const Span = ({ children, ...props }) => {
  return <span {...props}>&nbsp;{children}&nbsp;</span>;
};

export default Span;
