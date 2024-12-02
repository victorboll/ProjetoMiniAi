import { BijuConfig, KimuConfig, TommyConfig } from '@/services/AssistantConfig';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Amiko_700Bold } from '@expo-google-fonts/amiko';
import BackgroundGradient from '@/components/backgroundGradient';
import { router } from 'expo-router';
import { historico } from '@/services/GroqService';


export default function Home() {
    const [fontsLoaded] = useFonts({
        'ADLaM Display': require('@/assets/fonts/ADLaMDisplay.ttf'), // Fonte local
        Amiko_700Bold, // Fonte do pacote @expo-google-fonts/amiko
    });
    
    const [selectedAssistant] = useState<"Tommy" | "Kimu" | "Biju" | null>(null);
    const [currentAssistant, setCurrentAssistant] = useState<string | null>(null);

    const assistants = [TommyConfig, KimuConfig, BijuConfig];

    const handleAssistantSelection = (assistant: typeof assistants[number]) => {
      if (currentAssistant !== assistant.name) {
        historico.length = 0; // Limpa o histórico globalmente
        setCurrentAssistant(assistant.name); // Atualiza o assistente atual
      } else {
      }
  
      // Navega para a segunda página com os parâmetros do assistente
      router.push({
        pathname: '../screens/secondPage',
        params: {
          name: assistant.name,
          image: assistant.image,
        },
      });
    };

    return (
        <View style={styles.container}>
          <ImageBackground
      source={require('@/assets/images/background.png')}
      style={styles.background}
      >
          <Text style={styles.title}>MiniAI </Text>
          <Text style={styles.subTitle}>Conheça os Mini: </Text>
          {assistants.map((assistant) => (
              <TouchableOpacity
              key={assistant.name}
              style={[
                  styles.card,
                  selectedAssistant === assistant.name ? styles.selectedCard : {},
              ]}
              onPress={() => handleAssistantSelection(assistant)}
              >
              <BackgroundGradient style={styles.imageContainer} colors={['#88A2CB', '#96CAE3']}>
                  <Image source={assistant.image} style={styles.image} />
              </BackgroundGradient>
              <View style={styles.info}>
                  <Text style={styles.assistantName}>{assistant.name}</Text>
                  <Text style={styles.description}>{assistant.description}</Text>
              </View>
              </TouchableOpacity>
          ))}
          </ImageBackground>
        </View>
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
    title: {
      fontSize: 24,
      fontWeight: '400',
      marginVertical: 40,
      color: '#FFFFEA',
      fontFamily: 'ADLaM Display',
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#FFFFEA',
        fontFamily: 'Amiko_700Bold',
      },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff', // Fundo branco
      width: 325,
      height: 117,
      borderRadius: 500, // Faz com que pareça um cilindro
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 20, // Controle do espaço interno
      overflow: 'hidden', // Garante que nada saia do card
      paddingLeft: 0, // Remove o deslocamento da esquerda
    },
    selectedCard: {
      borderColor: '#007bff', // Cor de borda para assistente selecionado
      backgroundColor: '#e6f2ff', // Fundo diferente para o selecionado
    },
    imageContainer: {
        maxWidth: 117, // Largura do círculo
        height: 117, // Altura do círculo
        borderRadius: 58.5, // Metade da largura/altura para fazer um círculo perfeito
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20, // Espaço entre o círculo e o texto
    },
    image: {
        aspectRatio: 1, // Mantém a proporção da imagem (ajuste conforme necessário)
        resizeMode: 'contain', // Ajusta o conteúdo da imagem dentro de seu contêiner
        maxWidth: 77, // Define um limite máximo opcional para o tamanho
        maxHeight: 77, // Define um limite máximo opcional para o tamanho
    },
    info: {
      flex: 1, // Para ocupar o restante do espaço
    },
    assistantName: {
        fontSize: 20,
        fontWeight: '400',
        color: '#230C00',
        fontFamily: 'ADLaM Display',
        marginBottom: 10,
        marginLeft: 30,
    },
    description: {
        fontSize: 16,
        color: '#656565',
        fontFamily: 'Amiko_700Bold',
    },
    selection: {
      marginTop: 20,
      fontSize: 16,
      fontStyle: 'italic',
      color: '#333',
    },
  });
  
