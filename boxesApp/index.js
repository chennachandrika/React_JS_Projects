function Box(props) {
  const { boxStyling, boxName } = props;
  return (
    <div className={`box ${boxStyling}`}>
      <p className="description">{boxName}</p>
    </div>
  );
}

const element = (
  <>
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxName="Small" boxStyling="small-box" />
      <Box boxName="Medium" boxStyling="medium-box" />
      <Box boxName="Large" boxStyling="large-box" />
    </div>
  </>
);

ReactDOM.render(element, document.getElementById("root"));
