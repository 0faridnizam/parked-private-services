export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  return { props: { host } };
}
