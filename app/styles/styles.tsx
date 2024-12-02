import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    backgroundColor: '#295271', // Cor do botão
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    marginLeft: 10,
    width: 60,
  },
  addButtonText: {
    color: '#FFFCFB',
    fontSize: 24,
  },
  background: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  picker: {
    backgroundColor: '#3A86FF',
    height: '100%',
    width: '80%',
  },
  row: {
    alignItems: 'center', // Alinha verticalmente os itens
    flexDirection: 'row', // Coloca os componentes lado a lado
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const secondPageStyles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  assistantThumbnail: {
    aspectRatio: 1, // Mantém a proporção da imagem (ajuste conforme necessário)
    resizeMode: 'contain', // Ajusta o conteúdo da imagem dentro de seu contêiner
    maxWidth: 40, // Define um limite máximo opcional para o tamanho
    maxHeight: 40, // Define um limite máximo opcional para o tamanho
    marginRight:15
  },
  assistantName: {
    fontSize: 20,
    fontWeight: '400',
    color: '#230C00',
    fontFamily: 'ADLaM Display',
  },
  clearButton: {
    backgroundColor: '#295271', // Cor de fundo do botão
    padding: 10,
    borderRadius: 30, // Bordas arredondadas
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  clearButtonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerPage2: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  
});

const messageBubbleComponentStyles = StyleSheet.create({
  messageContainer: {
    alignItems: 'flex-start', // Alinha o conteúdo à esquerda por padrão
    paddingLeft: 30,
    paddingBottom: 0,
  },
  bubble: {
    padding: 10,
    marginVertical: 5,
    maxWidth: '90%',
    borderRadius: 30,
    fontSize: 13,
    fontFamily: 'Amiko_400Regular',
    fontWeight: '400',
    lineHeight: 17.34,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: 'hsla(273, 34%, 64%, 1)',
    borderBottomRightRadius: 0, // Remove o arredondamento da quina inferior direita
  },
  assistentBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'hsla(207, 3%, 100%, 1)',
    borderBottomLeftRadius: 0, // Remove o arredondamento da quina inferior esquerda
  },
  userBubbleText: {
    fontSize: 13,
    fontFamily: 'Amiko_400Regular',
    fontWeight: '400',
    lineHeight: 17.34,
    color: 'hsla(0, 0%, 100%, 1)', // Cor da fonte para a bolha do usuário
  },
  assistantBubbleText: {
    fontSize: 13,
    fontFamily: 'Amiko_400Regular',
    fontWeight: '400',
    lineHeight: 17.34,
    color: 'hsla(0, 0%, 40%, 1)', // Cor da fonte para a bolha do assistente
  },
  imageWrapper: {
    maxHeight: 56, // Define um limite máximo opcional para o tamanho
  },
  assistantImage: {
    alignSelf: 'flex-start', // Alinha a imagem ao topo
    aspectRatio: 1, // Mantém a proporção da imagem (ajuste conforme necessário)
    resizeMode: 'contain', // Ajusta o conteúdo da imagem dentro de seu contêiner
    maxWidth: 64, // Define um limite máximo opcional para o tamanho
    maxHeight: 56, // Define um limite máximo opcional para o tamanho
  },
});

const inputRowComponentStyles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 30, // Bordas arredondadas
    paddingVertical: 10, // Adiciona espaçamento vertical
    maxHeight: 105, // Limita o crescimento do input até certo ponto
    textAlignVertical: 'top', // Garante que o texto digitado fique alinhado ao topo
  }, // Garante que o texto fique alinhado no topo em inputs multiline
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
  },
  sendButton: {
    alignItems: 'center',
    backgroundColor: '#295271',
    borderRadius: 25, // Botão arredondado
    justifyContent: 'center',
    marginLeft: 10,
    padding: 10,
  },
});

export default styles;

export {
  secondPageStyles, 
  inputRowComponentStyles, 
  messageBubbleComponentStyles};
