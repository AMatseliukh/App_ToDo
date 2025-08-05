import React from 'react';
import { View, Pressable } from 'react-native';
import { Divider, Menu, Portal } from 'react-native-paper';

interface FloatingMenu {
  icon: string;
  title: string;
  onPress: () => void;
}

interface FloatingMenuProps {
  isVisible: boolean;
  onDismiss: () => void;
  items: FloatingMenu[];
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const FloatingMenu: React.FC<FloatingMenuProps> = ({
  isVisible: visible,
  onDismiss,
  items,
}) => {
  if (!visible) {
    return <></>;
  }

  return (
    <Portal>
      <Pressable
        onPress={onDismiss}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 998, 
        }}
      >
      </Pressable>

      <View style={{ position: 'absolute', top: 56, right: 6, zIndex: 999 }}>
        <View
          style={{
            width: 200,
            backgroundColor: '#f3edf7',
            borderRadius: 8,
            elevation: 4,
            overflow: 'hidden',
          }}
        >
          {items.map((item, index) => (
            <Menu.Item
              key={index}
              leadingIcon={item.icon}
              onPress={() => {
                item.onPress();
                onDismiss(); 
              }}
              title={item.title}
            />
          ))}
          <Divider />
          <Menu.Item
            leadingIcon="close-circle-outline"
            onPress={onDismiss}
            title="Close"
          />
        </View>
      </View>
    </Portal>
  );
};

export default FloatingMenu;
