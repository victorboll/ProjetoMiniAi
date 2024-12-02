import React from 'react';
import { View, Text, Image } from 'react-native';
import { messageBubbleComponentStyles } from '@/app/styles/styles';

interface MessageBubbleProps {
  content: string;
  role: string;
  image?: any; // O tipo pode ser ajustado dependendo de como você manipula as imagens
}

const MessageBubbleComponent: React.FC<MessageBubbleProps> = ({ content, role, image }) => {
  return (
    <View>
      <View style={messageBubbleComponentStyles.messageContainer}>
        {/* Bolha de texto */}
        <View
          style={[
            messageBubbleComponentStyles.bubble,
            role === 'user' ? messageBubbleComponentStyles.userBubble : messageBubbleComponentStyles.assistentBubble,
          ]}
        >
          <Text
            style={
              role === 'user' ? messageBubbleComponentStyles.userBubbleText : messageBubbleComponentStyles.assistantBubbleText
            }
          >
            {content}
          </Text>
        </View>
      </View>

      {/* Imagem condicional para o assistente */}
      {role === 'assistant' && image && (
        <View style={messageBubbleComponentStyles.imageWrapper}>
          <Image source={image} style={messageBubbleComponentStyles.assistantImage} />
        </View>
      )}
    </View>
  );
};

export default MessageBubbleComponent;
