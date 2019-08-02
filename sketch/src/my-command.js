import * as React from "react";
import { render, Artboard, Page, Text, View } from "react-sketchapp";

const Document = () => (
  <Page name="Buttons">
    <Artboard
      name="React Styled Buttons"
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        width: (96 + 8) * 4
      }}
    >
      <View
        name={`Demo`}
        style={{
          height: 96,
          width: 96,
          margin: 4,
          backgroundColor: "pink",
          padding: 8
        }}
      >
        <Text>TODO: render theme styleguide here</Text>
      </View>
    </Artboard>
  </Page>
);

export default () => {
  // eslint-disable-next-line no-undef
  render(<Document />, context.document.currentPage());
};
