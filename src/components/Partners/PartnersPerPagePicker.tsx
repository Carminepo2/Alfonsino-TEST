import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: '2', value: 2},
  {label: '5', value: 5},
  {label: '10', value: 10},
  {label: '25', value: 25},
];

interface Props {
  partnersPerPage: number;
  onChange: (partnersPerPage: number) => void;
}

const DropdownComponent: React.FC<Props> = ({partnersPerPage, onChange}) => {
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        value={partnersPerPage}
        onChange={item => onChange(item.value)}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 60,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
});
