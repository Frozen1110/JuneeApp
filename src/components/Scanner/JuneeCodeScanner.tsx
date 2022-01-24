import useScanner from '@junee/hooks/useScanner';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import JuneeButton from '../Button';

type Props = {
  eventType: string,
  quantity: number,
  onScanSuccess: () => void,
  onCancelPressed: () => void
}

const JuneeCodeScanner = ({
  eventType,
  quantity,
  onScanSuccess,
  onCancelPressed,
  
}: Props) => {
  const { record } = useScanner(eventType, quantity);
  const [scanned, setScanned] = useState(false)
  const [error, setError] = useState('');

  const onSuccess = async (e: any) => {
    try {
      setScanned(true)
      await record(e.data)
      onScanSuccess();  
    } catch (err) {
      console.log(err)
      setError('Scan failed')
    }
  }

  const rescan = () => {
    setError('');
    setScanned(false);
  }

  if (scanned) {
    if (error) {
      return (
        <>
          <Text>{error}</Text>
          <JuneeButton
            mode="contained"
            onPress={rescan}
            style={{ marginTop: 24 }}
          >
            Try again
          </JuneeButton>
        </>
      )
    }
    return (
      <Text>
        Thank you!
      </Text>
    )
  }

  return (
    <>
      <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      <JuneeButton
        mode="contained"
        onPress={onCancelPressed}
        style={{ marginTop: 24 }}
      >
        Cancel
      </JuneeButton>   
    </>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default JuneeCodeScanner;