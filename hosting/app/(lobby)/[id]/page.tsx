
const IdPage = ({params} : {params: {id: string}}) => {
  return (
    <div>
      <h1>Page ID: {params.id}</h1>
      <p>This is the content for page ID: </p>
    </div>
  );
};

export default IdPage;
