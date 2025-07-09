import React, { FC, JSX } from 'react';
import { Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';

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
};

interface Props {
  name: string;
  description?: string;
  leadingIconName?: string | null;
  trailingIconName?: string | null;
  onItemPress?: () => void;
  align?: 'left' | 'center';
}

const ListItem: FC<Props> = ({
  name,
  description,
  leadingIconName,
  trailingIconName,
  onItemPress,
  align = 'left',
}: Props) => {
  const isCentered = align === 'center';

  const LeadingIconComponent =
    leadingIconName && IconMap[leadingIconName]
      ? IconMap[leadingIconName]
      : null;

  const TrailingIconComponent =
    trailingIconName && IconMap[trailingIconName]
      ? IconMap[trailingIconName]
      : null;

  return (
    <View>
      <List.Item
        title={() => (
          <Text
            style={{
              textAlign: isCentered ? 'center' : 'left',
              fontSize: 16,
              fontWeight: '500',
              flexWrap: 'wrap',
            }}
            numberOfLines={3}
          >
            {name}
          </Text>
        )}
        description={() =>
          description ? (
            <Text
              style={{
                textAlign: isCentered ? 'center' : 'left',
                fontSize: 14,
                color: '#6b7280',
                flexWrap: 'wrap',
              }}
              numberOfLines={3}
            >
              {description}
            </Text>
          ) : null
        }
        onPress={onItemPress}
        titleNumberOfLines={3} // або undefined
        descriptionNumberOfLines={3} // або undefined
        contentStyle={isCentered ? { alignItems: 'center' } : {}}
        left={(props) =>
          LeadingIconComponent ? (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {LeadingIconComponent}
            </View>
          ) : null
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

export default ListItem;
