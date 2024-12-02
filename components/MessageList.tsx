import React from 'react';
import { FlatList } from 'react-native';
import MessageBubbleComponent from './MessageBubble';

interface MessageListProps {
  historico: { role: string; content: string }[];
  selectedAssistantImage: any; // Tipo ajustado para refletir as imagens
}

const MessageListComponent: React.FC<MessageListProps> = ({ historico, selectedAssistantImage }) => {
  return (
    <FlatList
      data={historico}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <MessageBubbleComponent
          content={item.content}
          role={item.role}
          image={item.role === 'assistant' ? selectedAssistantImage : undefined}
        />
      )}
    />
  );
};

export default MessageListComponent;
