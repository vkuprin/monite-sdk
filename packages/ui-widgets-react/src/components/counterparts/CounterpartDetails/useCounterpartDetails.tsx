import { useCallback, useEffect, useState } from 'react';
import { CounterpartType } from '@monite/sdk-api';

export type CounterpartsDetailsProps = {
  id?: string;
  type?: CounterpartType;
  onClose?: () => void;
  onCreate?: (id: string) => void;
  onUpdate?: () => void;
  onEdit?: (type: CounterpartType) => void;
  onContactCreate?: (id: string) => void;
  onContactUpdate?: (id: string) => void;
  onContactEdit?: (id: string) => void;
};

export enum COUNTERPART_VIEW {
  view = 'view',
  organizationForm = 'organizationForm',
  individualForm = 'individualForm',
  contactForm = 'contactForm',
  bankAccountForm = 'bankAccountForm',
}

export default function useCounterpartDetails(props: CounterpartsDetailsProps) {
  const [counterpartView, setCounterpartView] =
    useState<COUNTERPART_VIEW | null>(null);

  const [counterpartId, setCounterpartId] = useState<string | undefined>(
    props.id
  );

  const [contactId, setContactId] = useState<string | undefined>();

  const actions = {
    showView: () => setCounterpartView(COUNTERPART_VIEW.view),
    showOrganizationForm: () =>
      setCounterpartView(COUNTERPART_VIEW.organizationForm),
    showIndividualForm: () =>
      setCounterpartView(COUNTERPART_VIEW.individualForm),
    showContactForm: () => setCounterpartView(COUNTERPART_VIEW.contactForm),
    showBankAccountForm: () =>
      setCounterpartView(COUNTERPART_VIEW.bankAccountForm),
  };

  useEffect(() => {
    if (props.id) {
      return actions.showView();
    }

    if (props.type === CounterpartType.INDIVIDUAL) {
      return actions.showIndividualForm();
    }

    if (props.type === CounterpartType.ORGANIZATION) {
      return actions.showOrganizationForm();
    }
  }, [props.id, props.type]);

  const onCreate = useCallback(
    (id: string) => {
      actions.showView();
      props.onCreate && props.onCreate(id);
      setCounterpartId(id);
    },
    [props.onCreate]
  );

  const onUpdate = useCallback(() => {
    actions.showView();
    props.onUpdate && props.onUpdate();
  }, [props.onUpdate]);

  const onEdit = useCallback(
    (type: CounterpartType) => {
      if (type === CounterpartType.ORGANIZATION) {
        actions.showOrganizationForm();
      }

      if (type === CounterpartType.INDIVIDUAL) {
        actions.showIndividualForm();
      }

      props.onEdit && props.onEdit(type);
    },
    [props.onEdit]
  );

  const onContactCancel = useCallback(() => {
    actions.showView();
    setContactId(undefined);
  }, [props.onContactCreate]);

  const onContactCreate = useCallback(
    (id: string) => {
      actions.showView();
      props.onContactCreate && props.onContactCreate(id);
      setContactId(undefined);
    },
    [props.onContactCreate]
  );

  const onContactUpdate = useCallback(
    (id: string) => {
      actions.showView();
      props.onContactUpdate && props.onContactUpdate(id);
      setContactId(undefined);
    },
    [props.onContactUpdate]
  );

  const onContactEdit = useCallback(
    (id: string) => {
      setContactId(id);
      actions.showContactForm();
      props.onContactEdit && props.onContactEdit(id);
    },
    [props.onContactEdit]
  );

  return {
    counterpartId,
    contactId,
    counterpartView,
    actions,
    onCreate,
    onUpdate,
    onEdit,
    onContactCreate,
    onContactUpdate,
    onContactEdit,
    onContactCancel,
  };
}
