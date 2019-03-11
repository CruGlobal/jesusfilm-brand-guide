import React from 'react';
import {Page, ReactSpecimen, ColorSpecimen, DownloadSpecimen} from 'catalog';
import Color from '../components/Color';

export default () => (
  <Page >
    <div style={{width: '100%'}}>
      <h1>Examples</h1>
      <h3>Color Swatch</h3>
      <p>The color swatches are useful to document single or important colors like the main brand scheme.</p>
    </div>

    <DownloadSpecimen
      title="Figma Color Palette"
      url="/jfp-colors.fig"
      span={2}
    />
    <DownloadSpecimen
      title="Adobe Swatch Exchange"
      url="/jfp-colors.ase"
      span={2}
    />
    <DownloadSpecimen
      title="Sketch Palette"
      url="/jfp-colors.sketchpalette"
      span={2}
    />

    <ReactSpecimen span={2}>
      <Color
        primaryRed
        descriptionList={[
        "Primary Red",
        "#EF3340",
        "PMS Red 032",
        "C 0 M 86 Y 63 K 0 R 239 G 51 B 64"
      ]} />
    </ReactSpecimen>

    <ReactSpecimen span={2}>
      <Color
        neutralBeige
        descriptionList={[
          "Neutral Beige",
          "#F0EDE3",
          "PMS 7527 @20%",
          "C5 M 4 Y 9 K 0",
          "R 240 G 237 B 228",
      ]} />
    </ReactSpecimen>

    <ReactSpecimen span={2}>
      <Color
        neutralGray
        descriptionList={[
          "Neutral Gray",
          "#D8D8D8",
          "PMS Cool Gray 4",
          "C 12 M 8 Y 9 K 23 R 187 G 188 B 188",
      ]} />
    </ReactSpecimen>

    <ReactSpecimen span={2}>
      <Color
        secondaryRed1
        descriptionList={[
          "Secondary Red 1",
          "#F8485E",
          "PMS 1785",
          "C 0 M 76 Y 54 K 0 R 248 G 72 B 94",
      ]} />
    </ReactSpecimen>

    <ReactSpecimen span={2}>
      <Color
        secondaryRed2
        descriptionList={[
          "Secondary Red 2",
          "#CB333B",
          "PMS 1797",
          "C 2 M 97 Y 85 K 7 R 203 G 51 B 59",
      ]} />
    </ReactSpecimen>

    <ReactSpecimen span={2}>
      <Color
        secondaryRed3
        descriptionList={[
          "Secondary Red 3",
          "#A4343A",
          "PMS 1807",
          "C 10 M 93 Y 71 K 33 R 164 G 52 B 5",
      ]} />
    </ReactSpecimen>

    <ReactSpecimen span={2}>
      <Color
        secondaryRed4
        descriptionList={[
          "Secondary Red 4",
          "#643335",
          "PMS 1817",
          "C 30 M 85 Y 59 K 70 R 100 G 51 B 53",
      ]} />
    </ReactSpecimen>

  </Page>
);
