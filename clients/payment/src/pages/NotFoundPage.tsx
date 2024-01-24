import { Heading } from "@swan-io/lake/src/components/Heading";
import { Space } from "@swan-io/lake/src/components/Space";
import { G, Path, Svg } from "@swan-io/lake/src/components/Svg";
import { StyleSheet, View } from "react-native";
import { t } from "../utils/i18n";

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  icon: {
    height: 96,
    width: 96,
  },
});

export const NotFoundPage = () => {
  return (
    <View style={styles.base}>
      <Svg viewBox="0 0 96 96" style={styles.icon}>
        <G fill="none">
          <Path d="M54.857 3.037v4.016c0 .882-.686 1.567-1.567 1.567H42.71a1.547 1.547 0 01-1.567-1.567V3.037c0-.882.686-1.568 1.567-1.568h10.482c.881 0 1.665.686 1.665 1.568zM48 87.184c-17.829 0-32.327-14.498-32.327-32.327 0-17.828 14.498-32.326 32.327-32.326s32.327 14.498 32.327 32.326c0 17.829-14.498 32.327-32.327 32.327z" />
          <Path d="M78.465 80.229c5.682-6.858 9.208-15.674 9.208-25.372 0-21.943-17.73-39.673-39.673-39.673S8.327 32.914 8.327 54.857 26.057 94.531 48 94.531c9.502 0 18.122-3.331 24.98-8.817M48 87.184c-17.829 0-32.327-14.498-32.327-32.327 0-17.828 14.498-32.326 32.327-32.326s32.327 14.498 32.327 32.326c0 17.829-14.498 32.327-32.327 32.327z" />
          <Path d="M51.33 51.527L48 35.363l-3.33 16.164-16.164 3.33 16.163 3.33L48 74.352l3.33-16.163 16.164-3.33z" />
          <Path d="M48 60.343l11.265 5.78-5.877-11.266 5.877-11.265L48 49.469l-11.265-5.877 5.877 11.265-5.877 11.265z" />

          <Path
            fillOpacity={0.5}
            fill="#BFBFBF"
            d="M52.31 50.547l-8.62 8.62 22.824 14.204zm0 0l-8.62 8.62-14.204-22.824z"
          />

          <Path
            d="M45.943 57.012a2.956 2.956 0 010-4.212 2.956 2.956 0 014.212 0 2.956 2.956 0 010 4.212c-1.175 1.078-3.135 1.078-4.212 0z"
            fill="#FFF"
          />

          <Path
            d="M88.653 93.453H60.735c4.702-1.567 9.012-3.918 12.93-7.053.392-.294.49-.98.098-1.371-.294-.392-.98-.49-1.371-.098-25.078 20.375-63.086 2.547-63.086-30.074 0-21.355 17.339-38.694 38.694-38.694 21.355 0 38.694 17.339 38.694 38.694 0 9.012-3.135 17.829-8.914 24.784-.392.392-.294 1.077.098 1.371.391.392 1.077.294 1.371-.098 6.073-7.249 9.404-16.555 9.404-25.959 0-20.865-15.87-38.106-36.147-40.36V9.699h.686c1.371 0 2.547-1.176 2.547-2.547V3.037c0-1.372-1.176-2.547-2.547-2.547H42.71c-1.371 0-2.547 1.175-2.547 2.547v4.016c0 1.371 1.176 2.547 2.547 2.547h.784v4.898C23.216 16.751 7.347 33.992 7.347 54.858c0 17.926 11.755 33.207 27.918 38.595H6.661c-.588 0-.98.392-.98.98 0 .587.392.98.98.98h38.694c1.96.097 3.233.097 5.192 0h38.008c.588 0 .98-.393.98-.98 0-.588-.392-.98-.882-.98zm-46.53-86.4V3.037c0-.294.293-.588.587-.588h10.482c.294 0 .588.294.588.588v4.016c0 .294-.294.588-.588.588H42.71c-.294 0-.588-.294-.588-.588zm3.33 2.547h5.094v4.702a44.184 44.184 0 00-5.094 0V9.6z"
            fill="#898C8C"
          />

          <Path
            d="M2.547 93.453H.98c-.588 0-.98.392-.98.98 0 .587.392.98.98.98h1.567c.588 0 .98-.393.98-.98 0-.588-.392-.98-.98-.98zm92.473 0h-2.547c-.587 0-.98.392-.98.98 0 .587.393.98.98.98h2.547c.588 0 .98-.393.98-.98 0-.588-.49-.98-.98-.98z"
            fill="#BFBFBF"
          />

          <Path
            d="M48 21.551c-18.416 0-33.306 14.988-33.306 33.306 0 18.319 14.988 33.306 33.306 33.306 18.416 0 33.306-14.987 33.306-33.306 0-18.318-14.89-33.306-33.306-33.306zm0 64.653c-17.339 0-31.347-14.106-31.347-31.347C16.653 37.617 30.76 23.51 48 23.51c17.339 0 31.347 14.106 31.347 31.347S65.339 86.204 48 86.204z"
            fill="#898C8C"
          />

          <Path
            d="M67.69 53.878l-11.461-2.351 3.82-7.543a1.042 1.042 0 00-.196-1.176 1.042 1.042 0 00-1.175-.196l-7.543 3.919-2.155-11.364c-.098-.49-.49-.783-.98-.783s-.882.294-.98.783l-1.959 9.698-15.085-9.404c-.392-.294-.882-.196-1.176.098-.294.294-.392.784-.098 1.176l9.404 15.183-9.796 1.96c-.49.098-.783.49-.783.98 0 .489.293.88.783.979l11.461 2.35-3.82 7.446a1.04 1.04 0 00.196 1.175 1.04 1.04 0 001.175.196l7.543-3.918 2.155 11.46c.098.49.49.785.98.785s.882-.294.98-.784l1.959-9.796 15.085 9.404c.196.098.392.098.49.098.294 0 .49-.098.686-.294.294-.294.392-.783.098-1.175l-9.306-14.988 9.698-1.96c.49-.097.783-.49.783-.979 0-.49-.293-.881-.783-.98zm-13.617-2.351l-.98-1.47c0-.098-.097-.098-.195-.196 0-.098-.098-.098-.196-.196l-1.47-.881 5.682-2.94-2.84 5.683zM48 40.26l1.47 7.25h-.099l-2.547-1.47L48 40.26zm2.743 10.482l-.588.588-.098.098c-1.47-.882-3.526-.686-4.8.587-1.273 1.274-1.47 3.33-.588 4.8l-.685.686L32.522 39.38l18.22 11.363zm-1.372 5.486c-.783.783-2.155.685-2.84 0a2.01 2.01 0 010-2.841 2.01 2.01 0 012.84 0c.784.783.882 2.057 0 2.84zm-15.967-1.372l5.78-1.175 1.567 2.547-.098.098-7.249-1.47zm8.523 3.33l.881 1.47.294.294 1.47.98-5.682 2.938 3.037-5.681zM48 69.454l-1.47-7.445 2.646 1.665L48 69.453zm-2.743-10.482l.686-.685c1.371.881 3.428.783 4.8-.588 1.273-1.274 1.47-3.33.588-4.8l.685-.686L63.38 70.335 45.257 58.97zm11.56-2.938l-1.666-2.645 7.347 1.47-5.682 1.175zM49.176 79.64c-.196-.097-.588-.195-.98-.391-.588-.098-.784-.196-.784-.294 0-.098-.098-.098-.098-.196s0-.196.098-.196c.098-.098.392-.196.588-.196.196 0 .392.098.588.098l.196.196a.539.539 0 00.49.294.539.539 0 00.49-.294.624.624 0 000-.588l-.295-.293c-.293-.294-.783-.392-1.371-.392-.392 0-.686.098-.882.196a.998.998 0 00-.587.49c-.098.195-.196.49-.196.685 0 .392.098.686.391.98.196.196.588.392 1.078.49.392.098.588.195.686.195.196.098.294.098.294.196.098.098.098.098.098.196 0 .196-.098.294-.196.392-.098.098-.392.196-.588.196-.294 0-.49-.098-.588-.196-.098-.098-.196-.196-.196-.294-.098-.196-.294-.392-.588-.294-.195 0-.293.098-.391.196-.098.098-.098.294-.098.49.098.294.294.49.49.686.293.294.783.392 1.37.392.393 0 .785-.098.98-.196.294-.098.49-.294.686-.588.196-.196.196-.49.196-.784 0-.294-.098-.587-.196-.783-.294-.098-.49-.294-.685-.392zM46.53 32.033c.392 0 .588-.196.588-.49v-2.351l1.568 2.449c.098.196.294.294.587.294a.67.67 0 00.686-.686v-3.625c0-.195-.196-.49-.49-.49h-.098c-.195 0-.49.197-.49.49v2.45l-1.567-2.547c-.098-.196-.294-.294-.587-.294a.67.67 0 00-.686.685v3.625c0 .294.196.49.49.49zM25.96 52.506c-.197 0-.49.196-.49.392l-.588 2.547-.588-2.351c-.098-.392-.392-.588-.784-.588s-.686.196-.783.588l-.588 2.35-.49-2.546c-.098-.196-.294-.392-.49-.392s-.294.098-.392.196c-.196.098-.196.294-.196.392l.882 3.526c.098.294.392.588.686.588a.737.737 0 00.685-.49l.686-2.645.686 2.645c.098.294.392.49.686.49.294 0 .587-.196.685-.588l.882-3.526v-.098c0-.294-.196-.49-.49-.49zm48.979 3.821h-2.057v-1.078h1.86c.295 0 .49-.196.49-.49 0-.196-.195-.49-.49-.49h-1.86v-.881h1.959c.294 0 .49-.196.49-.49s-.196-.49-.49-.49h-2.645c-.294 0-.49.196-.49.49v3.82c0 .196.196.49.49.49h2.645c.294 0 .49-.196.49-.49.098-.196-.098-.391-.392-.391z"
            fill="#898C8C"
          />
        </G>
      </Svg>

      <Space height={20} />

      <Heading level={1} size={20} align="center">
        {t("error.pageNotFound")}
      </Heading>
    </View>
  );
};
