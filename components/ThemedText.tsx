import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'smallRegular'
    | 'smallBold'
    | 'adlam';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'smallRegular' ? styles.smallRegular : undefined,
        type === 'smallBold' ? styles.smallBold : undefined,
        type === 'adlam' ? styles.adlam : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Amiko_400Regular',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Amiko_700Bold',
  },
  title: {
    fontSize: 40,
    lineHeight: 48,
    fontFamily: 'Amiko_700Bold',
    color: '#FFFFEA',
  },
  subtitle: {
    fontSize: 30,
    lineHeight: 36,
    fontFamily: 'Amiko_700Bold',
    color: '#FFFFEA',
    marginBottom: 20
  },
  link: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Amiko_700Bold',
    color: '#230C00',
  },
  smallRegular: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Amiko_400Regular',
  },
  smallBold: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Amiko_700Bold',
  },
  adlam: {
    fontSize: 24,
    lineHeight: 40,
    fontFamily: 'ADLaM Display',
  },
});
