import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import React from 'react';
import PartnerItem from './PartnerItem';
import PaginationButtons from './PaginationButtons';
import PartnersPerPagePicker from './PartnersPerPagePicker';

interface Props {
  partners: Partner[];
  currentPage: number;
  partnersPerPage: number;
  onPageChange: (direction: 'next' | 'previous') => void;
  onPartnersPerPageChange: (partnersPerPage: number) => void;
}

const PartnersList: React.FC<Props> = ({
  partners,
  currentPage,
  partnersPerPage,
  onPageChange,
  onPartnersPerPageChange,
}) => {
  const renderItem: ListRenderItem<Partner> = ({item}) => {
    return <PartnerItem partner={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={partners}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <PartnersPerPagePicker
            partnersPerPage={partnersPerPage}
            onChange={onPartnersPerPageChange}
          />
        )}
        ListFooterComponent={() => (
          <PaginationButtons
            onPreviousPress={onPageChange.bind(this, 'previous')}
            onNextPress={onPageChange.bind(this, 'next')}
            isNextActive={partnersPerPage === partners.length}
            isPreviousActive={currentPage > 1}
            style={styles.paginationButtons}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },

  paginationButtons: {
    marginTop: 12,
    paddingBottom: 120,
  },
});

export default PartnersList;
