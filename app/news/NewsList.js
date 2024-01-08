// NewsList.js

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

const NewsList = ({ articles }) => {
  return (
    <ScrollView>
    <View style={styles.newsList}>
      {articles.map((article) => (
        <View style={styles.newsCard} key={article.uuid}>
          
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Symbol: {article.symbol}</Text>
            <Text style={styles.cardSummary}>Rate: {article.rate}</Text>
            <Text style={styles.cardSummary}>Time: {new Date(article.timestamp).toLocaleString()}</Text>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsList: {
    flex: 1,
  },
  newsCard: {
    marginBottom: 12, 
    padding: 12, 
    borderRadius: 8,
    backgroundColor: '#e0e0e0', 
  },
  cardImage: {
    height: 140, 
    borderRadius: 8,
    marginBottom: 6, 
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    marginBottom: 6, 
  },
  cardSummary: {
    fontSize: 12, 
    marginBottom: 6, 
  },
  readMoreLink: {
    color: '#2980b9', 
    textDecorationLine: 'underline',
  },
});



export default NewsList;
