import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones
import { inputRowComponentStyles } from '@/app/styles/styles';


interface InputRowProps {
  pergunta: string;
  setPergunta: (value: string) => void;
  handleEnviar: () => void;
}

const InputRowComponent: React.FC<InputRowProps> = ({ pergunta, setPergunta, handleEnviar }) => {
  return (
    <View style={inputRowComponentStyles.inputRow}>
      <TextInput
        style={inputRowComponentStyles.input}
        placeholder="Digite sua pergunta aqui"
        value={pergunta}
        onChangeText={setPergunta}
        onSubmitEditing={handleEnviar} // Envia ao pressionar "Enter"
        returnKeyType="send" // Define o botão "Enter" no teclado como "Enviar"
        multiline={true} // Permite múltiplas linhas, não funciona com a funcionalidade de enviar a pergunta com enter
      />
      <TouchableOpacity style={inputRowComponentStyles.sendButton} onPress={handleEnviar}>
        <Ionicons name="send" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default InputRowComponent;
