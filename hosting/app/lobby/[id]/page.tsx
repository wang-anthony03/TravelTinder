import UsernameField from '../../../(components)/UsernameField';
import PreferenceData from '../../../(components)/PreferenceData';

const IdPage = ({params} : {params: {id: string}}) => {
  return (
    <div>
      <UsernameField params={{
        id: ''
      }} />
      <PreferenceData pollKey={undefined} userId={undefined}></PreferenceData>
    </div>
  );
};

export default IdPage;
