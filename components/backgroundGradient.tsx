import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';

interface BackgroundGradientProps {
  children: ReactNode;
  style?: object;
  colors?: [string, string, ...string[]]; // Garante pelo menos dois elementos no array
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ children, style, colors }) => {
  return (
    <LinearGradient
      colors={colors || ['#daedf2', '#e3fdf4']} // Usa as cores fornecidas ou as cores padrão
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[{ flex: 1 }, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
