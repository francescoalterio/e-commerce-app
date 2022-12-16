import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../settings/colors";

interface Props {
  content: string;
  rounded: "semiCircle" | "corners";
  flex?: boolean;
  size: "small" | "large";
  onPress: () => void;
}

export function PrimaryButton({
  content,
  rounded,
  flex,
  size,
  onPress,
}: Props) {
  const roundedStyle =
    rounded === "corners" ? styles.corners : styles.semiCircle;

  const buttonPadding =
    size === "small"
      ? { paddingHorizontal: 15, paddingVertical: 5 }
      : size === "large"
      ? { paddingHorizontal: 15, paddingVertical: 10 }
      : undefined;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.touchable,
        roundedStyle,
        { flex: flex ? 1 : 0, alignItems: "center" },
        buttonPadding,
      ]}
    >
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.backgroundWhite,
  },
  semiCircle: {
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  corners: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
