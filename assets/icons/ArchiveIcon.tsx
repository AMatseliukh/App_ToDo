import * as React from "react";
import { TextProps } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props extends TextProps {
  color?: string;
  size?: number;
}

const ArchiveIcon: React.FC<Props> = ({ color = "black", size = 24 }) => (
  <MaterialIcons name="bookmark-outline" size={size} color={color} />
);

export default ArchiveIcon