
import { useRouter } from 'next/router';

const IdPage = () => {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <div>
      <h1>Page ID: {id}</h1>
      <p>This is the content for page ID: {id}</p>
    </div>
  );
};

export default IdPage;
