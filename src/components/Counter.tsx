import {Button, StyleSheet, Text, View} from 'react-native';

export interface CounterProps {
  count: number;
  incrementCount?: () => void;
  clearCount?: () => void;
}

export const Counter: React.FC<CounterProps> = ({
  count,
  incrementCount,
  clearCount,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.countText}>{count || 0}</Text>
        <View style={styles.buttons}>
          <Button
            title="Increment"
            onPress={() => {
              if (incrementCount) incrementCount();
            }}
          />
          <Button
            title="Clear"
            onPress={() => {
              if (clearCount) clearCount();
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  countText: {
    flex: 0.2,
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'black',
  },
  buttons: {
    flex: 0.2,
    flexDirection: 'row',
  },
});
