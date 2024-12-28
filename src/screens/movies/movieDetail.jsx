import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import {ThemeColors} from '../../theme/themeColor';
import {height, width} from '../../utils/constants';
import {IMAGE_BASE_URL} from '../../service/url';

const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const {pendingDetailData, movieDetailData} = useSelector(
    state => state.movies,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieData({movieId}));
  }, [movieId]);

  return (
    <View style={defaultScreenStyle.detailScreen}>
      {pendingDetailData ? (
        <View style={styles.container}>
          <ActivityIndicator color={ThemeColors.WHITE} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            source={{uri: IMAGE_BASE_URL + movieDetailData?.poster_path}}
            style={{
              width: width,
              height: height * 0.6,
              resizeMode: 'cover',
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{movieDetailData.original_title}</Text>
            <Text style={styles.tagline}>{movieDetailData.tagline}</Text>
            <Text style={styles.overview}>{movieDetailData.overview}</Text>
            <Text style={styles.section}>Language</Text>
            {movieDetailData?.spoken_languages?.map((item, index) => (
              <Text key={index} style={styles.lang}>
                {item.name}
              </Text>
            ))}
            <Text style={styles.section}>Production Countries</Text>
            {movieDetailData?.production_countries?.map((item, index) => (
              <Text key={index} style={styles.lang}>
                {item.name}
              </Text>
            ))}
            <Text style={styles.section}>Genres</Text>
            {movieDetailData?.genres?.map((item, index) => (
              <Text key={index} style={styles.lang}>
                {item.name}
              </Text>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeColors.WHITE,
  },
  infoContainer: {
    padding: 10,
    marginTop: 15,
    marginBottom: 50,
  },
  overview: {
    fontSize: 16,
    color: ThemeColors.WHITE,
    marginTop: 10,
  },
  tagline: {
    fontSize: 16,
    color: ThemeColors.WHITE,
    marginTop: 10,
  },
  section: {
    color: ThemeColors.RED,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 10,
  },
  lang: {
    color: ThemeColors.WHITE,
    fontSize: 17,
    fontWeight: '500',
  },
});
