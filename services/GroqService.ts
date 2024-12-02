//import { API_TOKEN } from '@env';
//import * as SecureStore from 'expo-secure-store';

import { BijuConfig, KimuConfig, TommyConfig } from "./AssistantConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export let historico: {role:string; content: string}[] = [];

export async function enviarPergunta(pergunta: string, assistente: string) {

  const storedIdade = await AsyncStorage.getItem('idade');
  const idade = storedIdade || '10'; // Define um padrão se a idade não for encontrada

  let config;

  switch (assistente) {
    case 'Tommy':
      config = TommyConfig;
      break;
    case 'Kimu':
      config = KimuConfig;
      break;
    case 'Biju':
      config = BijuConfig;
      break;
    default:
      config = TommyConfig; // Padrão para Tommy se nenhum for selecionado
  }

  
  
  const model = "llama-3.2-90b-vision-preview"
  const systemInfo = `You are an AI assistant designed to provide educational and child-appropriate responses. 
                Ensure that all answers are safe, appropriate, and suitable for a ${idade}-year-old audience\n\n
                Please respond in JSON format.`
  const task = `Answer questions in a way that a ${idade}-year-old can easily understand, using simple and fun words. 
                The clind interacting with you is ${idade}-year-old.` 
  const token = "insert-token-here"

  try {
    /*
    console.log('Iniciando a função enviarPergunta');
    // Recupera o token do SecureStore ou usa o do .env
    let token: string | null = await SecureStore.getItemAsync('authToken');

    console.log('Token recuperado:', token);

    if (!token) {
      token = API_TOKEN;
      await saveToken(token); // Armazena para uso futuro, se necessário
      console.log('Token armazenado:', token);
    }*/

    historico.push({
      role: "user",
      content: pergunta
    }); 

    //console.log('Fazendo a chamada para o endpoint...');
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        "model": `${model}`,
        "messages": [
          {
            "role": "system",
            "content": `${systemInfo}\n\nTask: ${task} \nContext: ${config.context} \nPersona: ${config.persona} \nFormat: ${config.format} \nTone: ${config.tone}.\nExemplar:\n ${config.exemplar} `
          },
          ...historico
        ],
        max_tokens: config.maxTokens,
        temperature: config.temperature,
    }),
    });

    //console.log('Resposta recebida:', response);

    const data = await response.json();
    //console.log('Dados recebidos:', data);

    if (response.ok) {
      // Extraindo a mensagem corretamente
      const messageContent = data.choices[0]?.message?.content;
      if (messageContent) {
         // Adiciona a resposta ao histórico
         historico.push({
          role: "assistant",
          content: messageContent
        });
        return { success: true, resposta: messageContent };
      } else {
        console.error('A resposta não contém conteúdo esperado:', data);
        return { success: false, mensagem: 'A resposta não contém conteúdo.' };
      }
    } else {
      console.error('Erro na resposta:', response.status, data);
      return { success: false, mensagem: data.error?.message || 'Ocorreu um erro ao obter a resposta.' };
    }
  } catch (error) {
    console.error('Erro na função enviarPergunta:', error);
    return { success: false, mensagem: 'Erro de rede ou no servidor. Tente novamente mais tarde.' };
  }
}

/*// Função para salvar o token de forma segura
async function saveToken(token: string) {
  await SecureStore.setItemAsync('authToken', token);
}*/