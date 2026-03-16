import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import BountyCard from '../../src/components/BountyCard';

const sampleData = [
  { id: '1', item: 'Latte', price: 4, location: 'Linnanmaa A-block', hasBuddy: false },
  { id: '2', item: 'Chicken Wrap', price: 7, location: 'Main Cafeteria', hasBuddy: true },
  { id: '3', item: 'Espresso', price: 3, location: 'Library Café', hasBuddy: false },
];

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Open Bounties</Text>

      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BountyCard
            item={item.item}
            price={item.price}
            location={item.location}
            hasBuddy={item.hasBuddy}
            onClaim={() => console.log('Claimed:', item.id)}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  list: {
    padding: 16,
  },
});