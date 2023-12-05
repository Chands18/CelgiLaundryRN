/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Input, Stack } from 'native-base';

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <Stack space={4} w="100%" maxW="300px" mx="auto">
      <Text>Nama Pengguna</Text>
      <Input variant="filled" placeholder="Input" />
      <Text>Nomor Telephone</Text>
      <Input variant="filled" placeholder="Input" />
      <Text>Email</Text>
      <Input variant="filled" placeholder="Input" />
      <Text>Kata Sandi</Text>
      <Input variant="filled" placeholder="Input" />
      </Stack>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
