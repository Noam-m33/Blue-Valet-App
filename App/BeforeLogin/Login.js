/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
  Text, View, TextInput, StyleSheet, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard, TouchableOpacity, StatusBar, Image
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Logo from '../../assets/LogoWhite.png';

export default function Login({ navigation }) {
  const {
    control, handleSubmit, formState: { errors }
  } = useForm();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View>
        <View style={{ marginBottom: 80, alignItems: 'center', justifyContent: 'space-around' }}>
            <Image source={Logo} style={{ height: 51, width: 85}} />
        </View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Email"
              />
            )}
            name="email"
            rules={{ pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ }}
          />
          {errors.email && <Text style={{ color: 'red', marginTop: 5 }}>Merci d'entrer un email valide</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                secureTextEntry
                placeholder="Mots de passe"
              />
            )}
            name="password"
            rules={{ required: true, minLength: 6 }}
          />
          {errors.password && <Text style={{ color: 'red', marginTop: 5 }}>Ce champs doit faire au moins 6 caractères</Text>}
          <View>
            <Text style={{ color: 'white', marginTop: 10 }} >Mots de passe oublié</Text>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ fontWeight: 'bold', color: '#2E4CB9', fontSize: 14 }}>CONNEXION</Text>
            </TouchableOpacity>
            <View style={{ alignItems:'center', marginTop: 20}}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14 }}>Vous n'avez pas de compte ?</Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#2E4CB9', borderWidth: 2, borderColor: 'white'}]}
              onPress={() => navigation.navigate('Register')}
              >
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14 }}>S'INSCRIRE</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 60,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E4CB9',
    paddingHorizontal: 2,
    paddingVertical: 1
  },
  input: {
    backgroundColor: 'white',
    fontWeight: '700',
    marginTop: 10,
    padding: 10,
    height: 50,
    borderRadius: 8,
  },
});