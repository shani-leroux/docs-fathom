---
title: Connecting to TopMode by Toptica in Python
sidebar_label: TopMode
description: TOPTICA’s TopMode lasers operate as easily as a HeNe, but also offer higher power and the choice of wavelength. The TopMode series sets records in terms of power, coherence and wavelength stability. The proprietary CoHerence-Advanced Regulation Method (CHARM) provides an active stabilization of the lasers’ coherence and ensures continuous single-frequency operation. TopMode and CHARM means nothing less than reliable 24/7 operation.
keywords: [lasers, Toptica, Instrumentkit]
slug: /instruments-wiki/lasers/toptica/topmode
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200868/Instruments/Lasers/TopMode/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TopMode

## Instrument Card

<div className="flex">

<div>

TOPTICA’s TopMode lasers operate as easily as a HeNe, but also offer higher power and the choice of wavelength. The TopMode series sets records in terms of power, coherence and wavelength stability. The proprietary CoHerence-Advanced Regulation Method (CHARM) provides an active stabilization of the lasers’ coherence and ensures continuous single-frequency operation. TopMode and CHARM means nothing less than reliable 24/7 operation.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692200868/Instruments/Lasers/TopMode/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<details>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692125974/Instruments/Vendor%20Logos/Toptica.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

TOPTICA Photonics is a manufacturer of [lasers](https://en.wikipedia.org/wiki/Laser) for quantum technologies, biophotonics and material inspection. <a href="https://www.toptica.com/">Website</a>.

<ul>
  <li>Headquarters: Germany</li>
  <li>Yearly Revenue (millions, USD): 75.0</li>
</ul>
</details>

## Connect to the TopMode in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="Instrumentkit" label="Instrumentkit">

To connect to a TopMode laser using Instrumentkit, you can use the following Python script:

```python
from instrumentkit import toptica

# Connect to the TopMode laser
tm = toptica.TopMode.open_serial('/dev/ttyUSB0', 115200)

# Access laser properties
print(tm.laser[0].wavelength)
```

This script imports the `toptica` module from Instrumentkit and uses the `TopMode.open_serial()` method to connect to the TopMode laser using the specified serial port and baud rate. The `open_serial()` method returns a `TopMode` object, which can be used to access the properties and methods of the laser.

In this example, the script accesses the `wavelength` property of the first laser (`tm.laser[0].wavelength`) and prints its value.

</TabItem>
</Tabs>