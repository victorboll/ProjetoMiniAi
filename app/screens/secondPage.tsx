import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType} from 'react-native';
import { enviarPergunta, historico } from '@/services/GroqService'; // Certifique-se de que o caminho está correto
import { useFonts } from 'expo-font';
import { Amiko_400Regular } from '@expo-google-fonts/amiko';
import BackgroundGradient from '@/components/backgroundGradient';
import InputRowComponent from '@/components/InputRow';
import MessageListComponent from '@/components/MessageList';
import { secondPageStyles } from '@/app/styles/styles';
import { useLocalSearchParams, useNavigation } from 'expo-router';


export default function SecondPage() {

  let [fontsLoaded] = useFonts({
    Amiko_400Regular,
    'ADLaM Display': require('@/assets/fonts/ADLaMDisplay.ttf'),
  });

  const params = useLocalSearchParams();
  const name = Array.isArray(params.name) ? params.name[0] : params.name;
  const image = Array.isArray(params.image) ? params.image[0] : params.image;

  const [currentAssistant, setCurrentAssistant] = useState(name);

  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  const navigation = useNavigation();

  function clearHistorico(setResposta: React.Dispatch<React.SetStateAction<string>>) {
    if (historico.length > 0) {
      historico.length = 0; // Limpa o histórico apenas se necessário
      setResposta(''); // Força a re-renderização
    }
  }
  
  const handleEnviar = async () => {
    if (pergunta.trim() !== '') {
      // Chamando a função separada para enviar a pergunta
      const resultado = await enviarPergunta(pergunta, name);

      if (resultado.success) {
        setResposta(resultado.resposta);
      } else {
        setResposta(resultado.mensagem || 'Erro desconhecido');
      }
      setPergunta(''); // Limpa o campo após enviar
    } else {
      alert('Por favor, digite sua pergunta.');
    }
  };

  /*
  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (e.nativeEvent.key === 'Enter') {
      handleEnviar();
      Keyboard.dismiss(); // Fecha o teclado após o envio
    }
  };*/

  useEffect(() => {
    // Configura o cabeçalho com base nos parâmetros recebidos
    if (name && image) {
      navigation.setOptions({
        headerTitle: () => (
          <View style={secondPageStyles.headerContainer}>
            <Image
              source={image || require('@/assets/images/Tommy.png')} 
              style={secondPageStyles.assistantThumbnail}
            />
            <Text style={secondPageStyles.assistantName}>{name}</Text>
          </View>
        ),
      });
    }
  }, [navigation, name, image]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (   
          <View style={secondPageStyles.headerContainer}>
            <TouchableOpacity
              style={secondPageStyles.clearButton} // Aplica o estilo personalizado
              onPress={() => clearHistorico(setResposta)}
            >
              <Text style={secondPageStyles.clearButtonText}>Nova Conversa</Text>
            </TouchableOpacity>
          </View>
      ),
    });
  }, [navigation]);

  return (
    <BackgroundGradient>
      <View style={secondPageStyles.containerPage2}>
        <MessageListComponent
          historico={historico}
          selectedAssistantImage={image}
        />
        <InputRowComponent
          pergunta={pergunta}
          setPergunta={setPergunta}
          handleEnviar={handleEnviar}
        />
      </View>
      </BackgroundGradient>
  );
}
