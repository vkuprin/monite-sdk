import { useMoniteContext } from '@/core/context/MoniteContext';
import { useCounterpartList } from '@/core/queries/useCounterpart';
import { useCounterpartsBankAccountsList } from '@/core/queries/useCouterpartsBankAccounts';

export type UsePayableDetailsFormProps = {
  currentCounterpartId: string;
};

export function usePayableDetailsForm({
  currentCounterpartId,
}: UsePayableDetailsFormProps) {
  const { api } = useMoniteContext();
  const tagQuery = api.tags.getTags.useQuery({});

  const counterpartQuery = useCounterpartList();
  const counterpartAddressQuery =
    api.counterparts.getCounterpartsIdAddresses.useQuery({
      path: { counterpart_id: currentCounterpartId },
    });

  const counterpartBankAccountQuery =
    useCounterpartsBankAccountsList(currentCounterpartId);

  return {
    tagQuery,
    counterpartQuery,
    counterpartAddressQuery,
    counterpartBankAccountQuery,
  };
}
