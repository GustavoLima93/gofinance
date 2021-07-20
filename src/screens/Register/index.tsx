import React, { useState } from 'react';
import { Modal } from 'react-native';

import { 
  Container, 
  Header, 
  Title, 
  Form,
  Fields,
  TransactionTypes
} from './styles';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect'

export function Register() {
  const [category, setcategory] = useState({
    key: 'category',
    name: 'Categoria'
  })
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransactionsTypeSelect(type: 'down' | 'up') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="nome"/>
          <Input placeholder="preço"/>

          <TransactionTypes>
            <TransactionTypeButton 
              title="Income" 
              type="up" 
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              title="Outcome" 
              type="down"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>
          <CategorySelectButton onPress={handleOpenSelectCategoryModal} title="Categoria" />
         
        </Fields>
       
        <Button title="Enviar"/>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category} 
          setCategory={setcategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
      
    </Container>
  )
}