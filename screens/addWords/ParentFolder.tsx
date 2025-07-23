import React from 'react';
import { Text, View } from 'react-native';
interface ParentFolderProps {
  folderName: string;
}
const ParentFolder: React.FC<ParentFolderProps> = ({ folderName }) => {
  return (
    <View
      style={{
        paddingHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
    
      <Text style={{ fontSize: 18, color: '#000' }}>Parent folder: </Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
        root
      </Text>
    </View>
  );
};

export default ParentFolder;