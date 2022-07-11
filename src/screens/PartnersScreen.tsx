import {View, StyleSheet} from 'react-native';
import React from 'react';
import {
  useAddPartnerMutation,
  usePartnersQuery,
} from '../services/partners.service';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import PartnersList from '../components/Partners/PartnersList';
import ErrorOverlay from '../components/ui/ErrorOverlay';
import AddPartnersButton from '../components/Partners/AddPartnersButton';
import PartnerModalForm from '../components/Partners/PartnerModalForm';

const PartnersScreen: React.FC = () => {
  const [pagination, setPagination] = React.useState<Pagination>({
    page: 1,
    partnersPerPage: 2,
  });

  const {
    data: partnersList,
    isLoading,
    error,
    refetch,
  } = usePartnersQuery(pagination);

  const [
    addPartner,
    {isLoading: isUpdating, error: updatingError, reset: resetUpdate},
  ] = useAddPartnerMutation();

  const [isFormVisible, setIsFormVisible] = React.useState(false);

  function handleOpenAddPartnerModal() {
    setIsFormVisible(true);
  }

  function handleCancelAddPartnerModal() {
    setIsFormVisible(false);
  }

  function handleChangePage(direction: 'next' | 'previous') {
    setPagination(prev => {
      let newPage = prev.page;

      if (direction === 'next') {
        newPage = prev.page + 1;
      } else if (direction === 'previous' && prev.page > 1) {
        newPage = prev.page - 1;
      }
      return {
        ...prev,
        page: newPage,
      };
    });
  }

  function handlePartnersPerPageChange(partnersPerPage: number) {
    setPagination(prev => ({
      ...prev,
      partnersPerPage,
    }));
  }

  async function handleAddPartner(title: string) {
    const response = await addPartner({title}).unwrap();
    console.log(response);
    setIsFormVisible(false);
  }

  if (isLoading || isUpdating) {
    return <LoadingOverlay />;
  }

  if (!isLoading && !isUpdating && (error || updatingError)) {
    return (
      <ErrorOverlay
        message={((updatingError || updatingError) as {error: string}).error}
        onConfirm={() => {
          error && refetch();
          updatingError && resetUpdate();
        }}
      />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <PartnersList
          partners={partnersList!}
          onPageChange={handleChangePage}
          onPartnersPerPageChange={handlePartnersPerPageChange}
          currentPage={pagination.page}
          partnersPerPage={pagination.partnersPerPage}
        />
        <AddPartnersButton onPress={handleOpenAddPartnerModal} />
      </View>
      <PartnerModalForm
        isVisible={isFormVisible}
        onConfirm={handleAddPartner}
        onCancel={handleCancelAddPartnerModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default PartnersScreen;
