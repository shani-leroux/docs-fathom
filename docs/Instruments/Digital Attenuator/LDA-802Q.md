
# LDA-802Q

## Instrument Card

<div className="flex">

<div>

The LDA-802Q Digital Attenuator is a 4-channel high dynamic range, bidirectional, 50 Ohm step attenuator. The LDA-802Q provides 120 dB of attenuation control range from 200 to 8000 MHz with a step size of 0.1 dB. The attenuators are easily programmable for fixed attenuation, swept attenuation ramps and fading profiles directly from the included Graphical User Interface (GUI). Alternatively, for users wishing to develop their own interface, Vaunix supplies LabVIEW drivers, Windows API DLL files, Linux drivers, Python examples and much more.

</div>

<img width="256" src="https://v5.airtableusercontent.com/v1/19/19/1691539200000/msi29RvVQAga6rPCyBcvEQ/9_rNwI1iiSG0nTauv6_DY-vBD9BX3X8mX6Vzl5dcP_L-aSt9ZkV70HFvtvM79i278DiiOrq-XTMRZxBG6VUcyGSpm2MJDJdT0H0ODlctk3E/fJRKrpbD_laDPuz9sNJIkq_GjXxQ2Cwq0KXLp0Oc4P4"/>

</div>

The LDA-802Q Digital Attenuator is a 4-channel high dynamic range, bidirectional, 50 Ohm step attenuator. The LDA-802Q provides 120 dB of attenuation control range from 200 to 8000 MHz with a step size of 0.1 dB. The attenuators are easily programmable for fixed attenuation, swept attenuation ramps and fading profiles directly from the included Graphical User Interface (GUI). Alternatively, for users wishing to develop their own interface, Vaunix supplies LabVIEW drivers, Windows API DLL files, Linux drivers, Python examples and much more.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Vaunix Technology Corp. designs, manufactures, and services RF and microwave test equipment and digital radio communications products. Utilizing our deep RF and software engineering expertise, rooted in microwave radio and wireless equipment repair and testing, Vaunix developed the Lab Brick® family of electronic test products, which set a new standard for cost, size, and simplicity of wireless testing devices. Powered by a USB connection and controlled by easy-to-use, graphical-user-interface (GUI) software, Lab Bricks have been designed to meet the needs of wireless engineers and technicians who want to create flexible, customized system solutions either in the lab or in the field. We 've expanded our Lab Brick® family of electronic test products to include Attenuator Matrix solutions that double as Wireless [Handover Test Systems](https://vaunix.com/handover-test-systems/) to give our test technicians and product engineers the advanced capability to solve unique wireless _handover _testing challenges and bring affordability, functionality, reliability and simplicity to the microwave test bench. <a href="https://vaunix.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5.0</li>
</ul>
</details>

## Connect to the LDA-802Q in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Qcodes Community

To connect to a LDA-802Q using Qcodes Community, you can use the following Python script:

```python
from qcodes import Station
from qcodes_contrib_drivers.drivers.Vaunix_LDA import LDA

# Create a station to hold the instruments
station = Station()

# Connect to the LDA-802Q
lda = LDA('lda', serial_number=802, dll_path='path/to/dll')

# Add the LDA to the station
station.add_component(lda)

# Print the IDN of the LDA
print(lda.get_idn())

# Set the attenuation to 10 dB on channel 1
lda.ch1.attenuation(10)

# Close the connection to the LDA
lda.close()
```

Make sure to replace `'path/to/dll'` with the actual path to the DLL files for the LDA-802Q.
