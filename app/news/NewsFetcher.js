// NewsFetcher.js

import NewsList from './NewsList';
import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://api.iex.cloud/v1';
const API_KEY = 'pk_426dcba32a6848019e70d304cfadbf3f';
const NewsFetcher = ({ symbol }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }

        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news data:', error.message);
      }
    };

    fetchNewsData();
  }, [symbol]);

  return (
    <View style={styles.newsFetcherContainer}>
      {newsData.length > 0 ? (
        <NewsList articles={newsData} />
      ) : (
        <Text>Loading news in few seconds...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  newsFetcherContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});


export default NewsFetcher;
