import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';

interface Props {
  partner: Partner;
}

const PartnerItem: React.FC<Props> = ({partner}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: partner.img}} />
      <Text numberOfLines={2} style={styles.title}>
        {partner.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    backgroundColor: Colors.gray200,
    borderRadius: 8,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },

  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});

export default PartnerItem;
