function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick} />; //Tillåten syntax i JS om div:en inte har något innehåll mellan taggarna.
}

export default Backdrop;
