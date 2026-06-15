import type { Config } from "jest";

const nativeConfig: Config = {
    preset: "jest-expo",
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
    ],
};

export default nativeConfig;
