import Spline from "@splinetool/react-spline";

export async function getServerSideProps({ context }) {
  // Fetch data from external API
  const data = await fetch(
    "https://prod.spline.design/YmxbfcKsi75hhTxW/scene.splinecode"
  );

  // Returning the fetched data
  return { props: { data } };
}

function SplineAnim({ data }) {
  // Displaying the data to the client
  return (
    <Spline
      scene={data}
      style={{
        position: "absolute",
        width: "auto",
        height: "auto",
      }}
    />
  );
}

export default SplineAnim;
