function Hello(props) {
  const { name, message } = props;
  return (
    <>
      <h1>
        {message} {name}
      </h1>
    </>
  );
}
export default Hello;
