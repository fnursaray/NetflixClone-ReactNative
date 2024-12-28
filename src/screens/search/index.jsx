import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import SearchBar from '../../components/ui/searchBar';
import ResultCard from '../../components/movies/resultCard';
import {ThemeColors} from '../../theme/themeColor';
import {useSelector} from 'react-redux';

const Search = () => {
  const {results} = useSelector(state => state.searchQuery);

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <SearchBar />

      <FlatList
        data={results}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item}) =>
          item?.media_type === 'movie' ? (
            <ResultCard
              movieID={item?.id}
              posterPath={item?.poster_path}
              title={item?.title}
              info
            />
          ) : null
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  flatlistContainer: {
    justifyContent: 'center',
    marginTop: 10,
  },
  separator: {
    marginBottom: 5,
  },
});
