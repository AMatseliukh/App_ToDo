import React, { FC, JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';

import ArchiveIcon from '../../../assets/icons/ArchiveIcon';
import ArrowDropDown from '../../../assets/icons/ArrowDropDown';
import ArrowRight from '../../../assets/icons/ArrowRight';
import CardsIcon from '../../../assets/icons/CardsIcon';
import ChatIcon from '../../../assets/icons/ChatIcon';
import FolderIcon from '../../../assets/icons/FolderIcon';
import GloboIcon from '../../../assets/icons/GlobeIcon';
import DotsVertical from '@/assets/icons/DotsVertical';
import Repository from '@/assets/icons/Repository';

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
  type: "folder | deck | repository_folder | repository_deck";
  // childrenCount: number;
  isUnpublishedChangesPresent: boolean;
  isOutOfSync: boolean;
  isPublished: boolean;
  description: string;
  itemStatus: string;
  typeIconName?: string | null;
  actionIconName?: string | null;
  onItemPress?: () => void;
}

const ListItem: FC<Props> = ({
  name,
  type,
  // childrenCount,
  isUnpublishedChangesPresent,
  isOutOfSync,
  isPublished,
  description,
  itemStatus,
  typeIconName,
  actionIconName,
  onItemPress,

//   align = 'left',
// }: Props) => {
//   const isCentered = align === 'center';
}) => {
  const typeIconComponent =
    typeIconName && IconMap[typeIconName]
      ? IconMap[typeIconName]
      : null;

  const TrailingIconComponent =
    actionIconName && IconMap[actionIconName]
      ? IconMap[actionIconName]
      : null;

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
              {description ? (
                <Text style={styles.textDescription} numberOfLines={3}>
                  {description}
                </Text>
              ) : null}
              {itemStatus ? (
                <Text style={styles.itemStatus} numberOfLines={3}>
                  {itemStatus}
                </Text>
              ) : null}
            </View>
  )}        onPress={onItemPress}
        titleNumberOfLines={3} // або undefined
        descriptionNumberOfLines={3} // або undefined
        // contentStyle={isCentered ? { alignItems: 'center' } : {}}
        left={() =>
          // typeIconComponent ? 
          (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {typeIconComponent}
            </View>
          ) 
          // : null
        }
        right={(props) =>
          TrailingIconComponent ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 4,
              }}
            >
              {TrailingIconComponent}
            </View>
          ) : null
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
    color: '#d97706',
    fontSize: 12,
  }

})



export default ListItem;