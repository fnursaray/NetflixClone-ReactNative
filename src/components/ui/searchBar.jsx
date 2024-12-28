import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Microphone2, SearchNormal1} from 'iconsax-react-native';
import {useDispatch} from 'react-redux';
import {ThemeColors} from '../../theme/themeColor';
import {getSearchQuery} from '../../store/actions/movieActions';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchQuery());
  }, [dispatch]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      dispatch(getSearchQuery(searchQuery));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <SearchNormal1 color={ThemeColors.WHITE} size={18} />
        <TextInput
          placeholder="Search movies"
          style={styles.input}
          value={searchQuery}
          placeholderTextColor={ThemeColors.WHITE}
          onChangeText={text => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </View>
      <Microphone2 color={ThemeColors.WHITE} size={22} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 18,
    padding: 10,
    backgroundColor: ThemeColors.GRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    color: ThemeColors.WHITE,
    padding: 8,
    fontSize: 16,
  },
  left: {flexDirection: 'row', gap: 8, alignItems: 'center'},
});
