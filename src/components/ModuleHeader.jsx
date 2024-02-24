const ModuleHeader = (props) => {
  return (
    <header className="main-img-wrapper">
      <div className="main-title-bg"></div>
      <picture>
        <img
          src={`/assets/${props.imgSrc}`}
          alt="Module Hero Section Image"
          className="main-img"
        />
      </picture>
      <div className="on-img-title-wrapper">
        <h2 className="sub-title-on-img">الوحدة {props.moduleNum}</h2>
        <h2 className="main-title-on-img">{props.moduleTitle}</h2>
      </div>
    </header>
  );
};

export default ModuleHeader;
