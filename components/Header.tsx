// import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CoinsBadge from "@/screens/home/components/CoinsBadge";
import { router } from "expo-router";
import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title?: string;
  backIcon?: ReactNode;
  actionMenuIcon?: ReactNode;
  onBackIconPress?: () => void;
  onActionMenuPress?: () => void;
  hideBackIcon?: boolean;
  hideActionMenuIcon?: boolean;
}

// const router = useRouter();
const Header: React.FC<HeaderProps> = ({
  title,
  backIcon,
  actionMenuIcon,
  onBackIconPress,
  onActionMenuPress,
  hideBackIcon = false,
  hideActionMenuIcon = false,
}) => {
  const handleGoBack = () => {
    router.back();
  };
  return (
    <View style={styles.wrapper}>
      {/* Back Icon */}
      <View style={styles.iconWrapper}>
        {backIcon ? (
          <Pressable
            onPress={onBackIconPress}
            disabled={hideBackIcon}
            style={hideBackIcon ? styles.invisible : undefined}
          >
            {backIcon}
          </Pressable>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>

      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <CoinsBadge />
      </View>

      {/* Action Menu Icon */}
      <View style={styles.iconWrapper}>
        {actionMenuIcon ? (
          <Pressable
            onPress={onActionMenuPress}
            disabled={hideActionMenuIcon}
            style={hideActionMenuIcon ? styles.invisible : undefined}
          >
            {actionMenuIcon}
          </Pressable>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    // paddingHorizontal: 8,
    backgroundColor: "white",
  },
  iconWrapper: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    width: 24,
    height: 24,
  },
  invisible: {
    opacity: 0,
    pointerEvents: "none",
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.h1,
  },
});

export default Header;
