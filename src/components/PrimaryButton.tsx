import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../settings/colors";

interface Props {
  content: string;
  rounded: "semiCircle" | "corners";
  flex?: boolean;
}

export function PrimaryButton({ content, rounded, flex }: Props) {
  const roundedStyle =
    rounded === "corners" ? styles.corners : styles.semiCircle;
  return (
    <TouchableOpacity
      style={[
        styles.touchable,
        roundedStyle,
        { flex: flex ? 1 : 0, alignItems: "center" },
      ]}
    >
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  text: {
    color: COLORS.white,
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
