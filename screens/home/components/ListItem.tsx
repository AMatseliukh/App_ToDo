import React, { FC, JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';

import DotsVertical from '@/assets/icons/DotsVertical';
import Repository from '@/assets/icons/Repository';
import { Colors } from '@/constants/Colors';
import ArchiveIcon from '../../../assets/icons/ArchiveIcon';
import ArrowDropDown from '../../../assets/icons/ArrowDropDown';
import ArrowRight from '../../../assets/icons/ArrowRight';
import CardsIcon from '../../../assets/icons/CardsIcon';
import ChatIcon from '../../../assets/icons/ChatIcon';
import FolderIcon from '../../../assets/icons/FolderIcon';
import GloboIcon from '../../../assets/icons/GlobeIcon';

const IconMap: Record<string, JSX.Element> = {
  FolderIcon: <FolderIcon />,
  GloboIcon: <GloboIcon />,
  CardsIcon: <CardsIcon />,
  ArrowDropDown: <ArrowDropDown />,
  ArrowRight: <ArrowRight />,
  ArchiveIcon: <ArchiveIcon />,
  ChatIcon: <ChatIcon />,
  DotsVertical: <DotsVertical />,
  Repository: <Repository />,
};

interface Props {
  name: string;
  type: "folder" | "deck"| "repository_folder" | "repository_deck";
  childrenCount: string;
  author: string | undefined;
  isUnpublishedChangesPresent: boolean;
  isOutOfSync: boolean;
  isPublished: boolean;
  onItemPress?: () => void;
}

const ListItem: FC<Props> = ({
  name,
  type,
  childrenCount,
  author,
  isUnpublishedChangesPresent,
  isOutOfSync,
  isPublished,
  onItemPress,
}) => {
  const getChildrenCountText = () => {
    const contentParts = [childrenCount];

    if (type == 'folder' || type == 'repository_folder') {
      contentParts.push('items');
    } else {
      contentParts.push('words');
    }

    if (author) {
      contentParts.push(`• by ${author}`);
    }

    return contentParts.join(' ');
  };

  const getTypeIcon = () => {
    if (type === 'folder') {
      return <FolderIcon />;
    }
    if (type === 'repository_folder') {
      return <Repository />;
    }
    if (type === 'deck') {
      return <CardsIcon />;
    }
    return <></>;
  };

  
  const getItemStatusElement = () => {
    if (!isPublished) {
      return <></>;
    }

    if (isUnpublishedChangesPresent) {
      return ( <Text style={[styles.itemStatus, { color: Colors.unpublished }]}>Unpublished changes</Text> )
    }
    if (isOutOfSync) {
      return ( <Text style={[styles.itemStatus, { color: Colors.outOfDate }]}>Out of date</Text> )
    }
      return ( <Text style={[styles.itemStatus, { color: Colors.published }]}>Up to date</Text> )
  }

  return (
    <View>
      <List.Item
        title={() => (
            <Text style={styles.heading3} numberOfLines={3}>
              {name}
            </Text>
          )}
          description={() => (
            <View>
              <Text style={styles.textDescription} numberOfLines={3}>
                {getChildrenCountText()}
              </Text>

              {getItemStatusElement()}

            </View>
        )}        
        onPress={onItemPress}
        titleNumberOfLines={3}
        descriptionNumberOfLines={3}
        left={(props) =>
          (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {getTypeIcon()}
            </View>
          ) 
        }
        right={(props) =>(
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 4,
              }}
            >
              <DotsVertical />
            </View>
          )
        }
        style={{
          minHeight: 80,
          paddingLeft: 12,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      />
      <Divider style={{ backgroundColor: 'gray' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading3: {
    fontSize: 16,
    color: '#09090B',
    flexWrap: 'wrap',
  },
  textDescription: {
    fontSize: 14,
    color: '#71717a',
  },
  itemStatus: {
    // color: '#d97706',
    fontSize: 12,
  }
})

export default ListItem;