const ListItem = ({ children }) => {
  return (
    <li>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
        </svg>
      </span>
      <div>{children}</div>
    </li>
  );
};

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  );
};

export default List;
