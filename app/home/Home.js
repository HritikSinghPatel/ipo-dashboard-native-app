import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon from the library
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Home component to display the main content of the application
function Home() {
  return (
    <View style={styles.mainContainer}>
      {/* Section for the main title */}
      <View style={styles.mainTitle}>
        <Text style={styles.titleText}>HOME</Text>
      </View>

      {/* Section for displaying cards with information */}
      <View style={styles.mainCards}>
        {/* Card 1: Stock */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Upcoming IPOs</Text>
            <Icon name="chart-bar" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>6</Text>
        </View>

        {/* Card 2: News */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>News</Text>
            <Icon name="email" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>10</Text>
        </View>

        {/* Card 3: Charts */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Currency Exchange</Text>
            <Icon name="chart-bar" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>5</Text>
        </View>

        {/* Card 4: Settings */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Settings</Text>
            <Icon name="cog" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>2</Text>
        </View>
      </View>
    </View>
  );
}

// Styles for the Home component
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    marginLeft: 200,
    marginTop: 80,
  },
  mainTitle: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainCards: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: "center",
  },
  cardInner: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
