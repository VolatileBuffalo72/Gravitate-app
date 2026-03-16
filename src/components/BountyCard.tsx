import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Coffee, MapPin, UserCircle2 } from 'lucide-react-native';

type Props = {
  item: string;
  price: number;
  location: string;
  hasBuddy?: boolean;
  onClaim?: () => void;
};

export default function BountyCard({
  item,
  price,
  location,
  hasBuddy = false,
  onClaim,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Coffee color="#eb5e28" size={24} />
        <View style={styles.details}>
          <Text style={styles.itemText}>{item}</Text>
          <View style={styles.locationRow}>
            <MapPin size={14} color="#666" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
        <Text style={styles.priceText}>€{price}</Text>
      </View>

      {hasBuddy && (
        <View style={styles.buddyBadge}>
          <UserCircle2 size={16} color="#fff" />
          <Text style={styles.buddyText}>Lunch Buddy Wanted</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={onClaim}>
        <Text style={styles.buttonText}>Claim Bounty</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    color: '#666',
    marginLeft: 4,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#252422',
  },
  button: {
    backgroundColor: '#eb5e28',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buddyBadge: {
    backgroundColor: '#403d39',
    flexDirection: 'row',
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  buddyText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
  },
});