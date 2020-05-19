import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcularButton = styled.TouchableOpacity`
  width: 90%;
  margin-top: 10px;
  background-color: #57D2FF;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 10px rgba(0,0,0, .3);
`;

const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

const ResultArea = styled.View`
  width: 90%;
  margin-top: 30px;
  background-color: #eee;
  padding: 10px 20px;
  border-radius: 10px;
`;

const ResultTitle = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const Result = styled.Text`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
  color: ${props => props.color} ;
`;

const PorcentagemArea = styled.View`
  width: 90%;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

const PorcentagemButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const PorcentagemText = styled.Text`
  color: #45A8CC;
`;


const Calculadora = () => {

  const [bill, setBill] = useState('');
  const [backupBill, setBackupBill] = useState('');

  const [tip, setTip] = useState(0);

  const [percent, setPercent] = useState(10);
  const [backupPercent, setBackupPercent] = useState(10);

  function handleChangeBill(number) {
    if (!number) {
      setTip(0);
    }
    
    setBackupBill(number);
  }

  function handleCalcular() {
    let backupBillValue = parseFloat(backupBill);
    
    if (!backupBillValue) {
      alert('Digite o valor da conta!');
      return false;
    }

    setPercent(backupPercent);
    setBill(backupBillValue);
    setTip(backupBillValue * (backupPercent/100));

  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <PorcentagemArea>
        <PorcentagemButton onPress={() => setBackupPercent(5)}>
          <PorcentagemText>05%</PorcentagemText>
        </PorcentagemButton>

        <PorcentagemButton onPress={() => setBackupPercent(10)}>
          <PorcentagemText>10%</PorcentagemText>
        </PorcentagemButton>

        <PorcentagemButton onPress={() => setBackupPercent(15)}>
          <PorcentagemText>15%</PorcentagemText>
        </PorcentagemButton>

        <PorcentagemButton onPress={() => setBackupPercent(20)}>
          <PorcentagemText>20%</PorcentagemText>
        </PorcentagemButton>
      </PorcentagemArea>
      <Input 
        placeholder="Quanto deu a conta?"
        keyboardType="numeric"
        value={(backupBill).toString()}
        onChangeText={handleChangeBill}
      />

      <CalcularButton title="Calcular" onPress={handleCalcular} >
        <TextButton>Calcular {backupPercent ? backupPercent + '%' : ''}</TextButton>
      </CalcularButton>

      {tip > 0 &&
        <ResultArea>
          <ResultTitle>Valor da conta:</ResultTitle>
          <Result color="#3BCC3D">R$ {parseFloat(bill).toFixed(2)}</Result>

          <ResultTitle>Gorjeta: {percent ? '(' + percent + '%)' : ''}</ResultTitle>
          <Result color="#3BCC3D">+ R$ {parseFloat(tip).toFixed(2)}</Result>

          <ResultTitle>Total:</ResultTitle>
          <Result color="#3BCC3D ">R$ {(parseFloat(bill) + tip).toFixed(2)}</Result>

        </ResultArea>
      }
      
    </Page>
  );
}

export default Calculadora;