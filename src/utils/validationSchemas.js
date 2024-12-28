import * as Yup from 'yup';

const newListSchema = Yup.object().shape({
  title: Yup.string().required('Required Field'),
});
export {newListSchema};
