import {ScrollView, Text, View} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {addNewList} from '../../store/slice/watchListSlice';
import {newListSchema} from '../../utils/validationSchemas';
import {WATCHLIST} from '../../utils/routes';
import {height} from '../../utils/constants';
import {ThemeColors} from '../../theme/themeColor';

const AddNewList = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          title: '',
        }}
        validationSchema={newListSchema}
        onSubmit={values => dispatch(addNewList(values))}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView style={defaultScreenStyle.container}>
            <View style={{marginVertical: 'auto'}}>
              <Text
                style={{
                  color: ThemeColors.WHITE,
                  fontSize: 30,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                Ready to watch?
              </Text>
              <Text
                style={{
                  color: ThemeColors.WHITE,
                  fontSize: 15,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                Enter your email to create or watch in to your account.
              </Text>
            </View>
            <Input
              error={errors.title}
              value={values.title}
              title="Watch List Name"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
            />

            <View style={{marginTop: height * 0.09}}>
              <Button
                onPress={() => {
                  handleSubmit();
                  navigation.navigate(WATCHLIST);
                }}
                title="GET STARTED"
                status="primary"
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;
