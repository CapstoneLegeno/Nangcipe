export default function StarsComopnent(props) {
  if (props.star) {
    return (
      <div
        style={{
          background: "yellow",
          width: "50px",
          height: "50px",
          border: "solid 1px",
        }}
      />
    );
  } else {
    return (
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "solid 1px",
        }}
      />
    );
  }
}
