import React from 'react';
import {
  Button,
  Header,
  IconButton,
  ModalLayout,
  Text,
  UMultiply,
  UPen,
  UTrashAlt,
  UPlusCircle,
} from '@monite/ui-kit-react';

import { useComponentsContext } from 'core/context/ComponentsContext';

import {
  getName,
  isIndividualCounterpart,
  isOrganizationCounterpart,
} from '../../helpers';

import { CounterpartDetailsBlock, CounterpartHeader } from '../styles';

import CounterpartOrganizationView from './CounterpartOrganizationView';
import CounterpartIndividualView from './CounterpartIndividualView';
import CounterpartContactView from './CounterpartContactView';

import {
  prepareCounterpartIndividual,
  prepareCounterpartOrganization,
} from '../CounterpartForm';
import { prepareCounterpartContact } from '../CounterpartContactForm';

import CounterpartBankView from './CounterpartBankView';
import useCounterpartView, { CounterpartViewProps } from './useCounterpartView';

const CounterpartView = (props: CounterpartViewProps) => {
  const { t } = useComponentsContext();
  const { counterpart, banks, contacts, deleteBank, deleteContact } =
    useCounterpartView(props);

  if (!counterpart) return null;

  return (
    <ModalLayout
      scrollableContent
      size={'md'}
      isDrawer
      header={
        <CounterpartHeader>
          <Header
            rightBtn={
              <IconButton onClick={props.onClose} color={'black'}>
                <UMultiply size={18} />
              </IconButton>
            }
          >
            <Text textSize={'h3'}>{getName(counterpart)}</Text>
          </Header>
        </CounterpartHeader>
      }
    >
      <CounterpartDetailsBlock sx={{ gap: '32px !important', padding: 24 }}>
        {isOrganizationCounterpart(counterpart) && (
          <CounterpartOrganizationView
            actions={
              <>
                <Button
                  onClick={() => props.onEdit(counterpart.type)}
                  size={'sm'}
                  variant={'text'}
                  leftIcon={<UPen />}
                >
                  {t('counterparts:actions.edit')}
                </Button>
              </>
            }
            counterpart={prepareCounterpartOrganization(
              counterpart.organization
            )}
          />
        )}

        {isIndividualCounterpart(counterpart) && (
          <CounterpartIndividualView
            counterpart={prepareCounterpartIndividual(counterpart.individual)}
            actions={
              <Button
                onClick={() => props.onEdit(counterpart.type)}
                size={'sm'}
                variant={'text'}
                leftIcon={<UPen />}
              >
                {t('counterparts:actions.edit')}
              </Button>
            }
          />
        )}

        {isOrganizationCounterpart(counterpart) && (
          <CounterpartDetailsBlock
            title={t('counterparts:contactPersons')}
            action={
              <Button
                onClick={() => props.onContactCreate()}
                size={'sm'}
                variant={'text'}
                leftIcon={<UPlusCircle />}
              >
                {t('counterparts:actions.addContactPerson')}
              </Button>
            }
          >
            {contacts?.map((contact) => (
              <CounterpartContactView
                key={contact.id}
                contact={prepareCounterpartContact(contact)}
                actions={
                  <>
                    <Button
                      onClick={() => props.onContactEdit(contact.id)}
                      size={'sm'}
                      variant={'text'}
                      leftIcon={<UPen />}
                    >
                      {t('counterparts:actions.edit')}
                    </Button>
                    <Button
                      onClick={deleteContact}
                      size={'sm'}
                      variant={'text'}
                      color={'danger'}
                      leftIcon={<UTrashAlt />}
                    >
                      {t('counterparts:actions.delete')}
                    </Button>
                  </>
                }
              />
            ))}
          </CounterpartDetailsBlock>
        )}

        <CounterpartDetailsBlock
          title={t('counterparts:bankAccounts')}
          action={
            <Button
              onClick={() => props.onBankCreate()}
              size={'sm'}
              variant={'text'}
              leftIcon={<UPlusCircle />}
            >
              {t('counterparts:actions.addBankAccount')}
            </Button>
          }
        >
          {banks?.map((bank) => (
            <CounterpartBankView
              key={bank.id}
              bank={bank}
              actions={
                <>
                  <Button
                    onClick={() => props.onBankEdit(bank.id)}
                    size={'sm'}
                    variant={'text'}
                    leftIcon={<UPen />}
                  >
                    {t('counterparts:actions.edit')}
                  </Button>
                  <Button
                    onClick={deleteBank}
                    size={'sm'}
                    variant={'text'}
                    color={'danger'}
                    leftIcon={<UTrashAlt />}
                  >
                    {t('counterparts:actions.delete')}
                  </Button>
                </>
              }
            />
          ))}
        </CounterpartDetailsBlock>
      </CounterpartDetailsBlock>
    </ModalLayout>
  );
};

export default CounterpartView;