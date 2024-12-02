import { View, Text, TouchableOpacity, Pressable, ImageBackground} from 'react-native';
import { useState } from 'react';
import { router, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';

export default function WelcomeScreen() {
  const [idade, setIdade] = useState(''); // Estado para armazenar a idade selecionada.
  // const router = useRouter();

  const handleContinue = async () => {
    if (idade) {
      await AsyncStorage.setItem('idade', idade); // Salva a idade no armazenamento
      router.push('./(tabs)/home');
    } else {
      alert('Por favor, informe sua idade.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      {/* <LinearGradient
        // Cores do gradiente com base nos seus requisitos
        colors={[
          'rgba(148,105,164,1)', // 0%
          'rgba(132,101,166,1)', // 45%
          'rgba(91,130,187,1)',   // 60%
          'rgba(36,174,212,1)',   // 70%
          'rgba(81,206,208,1)',   // 82%
          'rgba(126,238,204,1)',  // 100%
        ]}
        start={{ x: 0.8, y: 0 }}  // Início do gradiente (meio à esquerda)
        end={{ x: 1, y: 0.4}}    // Fim do gradiente
        style={styles.background} // Aplicar estilo
      /> */}
      <ImageBackground
      source={require('@/assets/images/background.png')}
      style={styles.background}
    >
        <ThemedText type="subtitle">Quantos anos você tem?</ThemedText>
        <View style={styles.row}>
        {/* Contêiner para o Picker com bordas arredondadas */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={idade}
              style={styles.picker}
              onValueChange={(itemValue) => setIdade(itemValue)}
            >
              <Picker.Item label="Selecione..." value="" />
              {[...Array(12)].map((_, index) => {
                const age = index + 5;
                return <Picker.Item key={age} label={`${age} anos`} value={`${age}`} />;
              })}
            </Picker>
          </View>
            <TouchableOpacity style={styles.addButton} onPress={handleContinue}>
              <Ionicons style={styles.addButtonText} name="send" />
            </TouchableOpacity>
        </View>
        {/* <Button title="Continuar" onPress={handleContinue} /> */}
        </ImageBackground>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // ajusta o comportamento da imagem
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row', // Coloca os componentes lado a lado
    alignItems: 'center',  // Alinha verticalmente os itens
    marginBottom: 20,
  },
  pickerContainer: {
    height: 50,  // Ajuste a altura conforme necessário
    width: 288,
    backgroundColor: '#FFFFFF',
    borderWidth: 0,  // Remove a borda
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 10.5,
    elevation: 5,
    overflow: 'hidden',  // Garante que o conteúdo dentro do contêiner fique dentro das bordas arredondadas
  },
  // Estilo do Picker para preencher o contêiner
  picker: {
    height: '100%',
    width: '100%',
  },
  addButton: {
    // position: 'absolute',
    // bottom: 40,
    // right: 40,
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#295271', // Cor do botão
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  addButtonText: {
    fontSize: 20,
    color: '#FFFCFB',
  },
});
