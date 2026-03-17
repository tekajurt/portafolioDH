const checkout = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};
export default checkout;
