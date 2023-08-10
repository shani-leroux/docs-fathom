
# MDA8000HD

## Instrument Card

<div className="flex">

<div>

The Motor Drive Analyzer is built on an 8 channel, 12-bit resolution oscilloscope platform. It acquires any signal and performs three-phase electrical and mechanical power calculations. It provides complete power section and embedded control test coverage.

</div>

<img width="256" src="https://v5.airtableusercontent.com/v1/19/19/1691539200000/_QmdEStAhcfyO8Toh9UyHQ/jrclqjJlN3Pwn8KwUIVhoFimmG2D_V6N6E3poSD77HAOWR0wQ2HdVxYuOxT6EZaGpsit7yZeo6TqTp0tBzjaFe5wszyZpr0zhIja1vcqCp8/19TOuYREIP5Zk5lDGtmlGVAUV9rXcbTWPclE4iq82AI"/>

</div>

The Motor Drive Analyzer is built on an 8 channel, 12-bit resolution oscilloscope platform. It acquires any signal and performs three-phase electrical and mechanical power calculations. It provides complete power section and embedded control test coverage.>

<details open>
<summary><h2>Manufacturer Card</h2></summary>

Teledyne LeCroy is an American manufacturer of oscilloscopes, protocol analyzers and other test equipment. LeCroy is now a subsidiary of Teledyne Technologies. <a href="https://www.teledynelecroy.com/">Website</a>.

<ul>
  <li>Headquarters: USA</li>
  <li>Yearly Revenue (millions, USD): 5458.6</li>
</ul>
</details>

## Connect to the MDA8000HD in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)


### Instrumentkit

To connect to a MDA8000HD Oscilloscope using Instrumentkit, you can use the following code:

```python
import instrumentkit as ik

# Connect to the oscilloscope
oscilloscope = ik.teledyne.MAUI.open_visa("TCPIP0::192.168.0.10::INSTR")

# Perform operations on the oscilloscope
oscilloscope.run()
print(oscilloscope.trigger_state)

# Close the connection
oscilloscope.close()
```

This code imports the `instrumentkit` library and uses the `open_visa` method from the `ik.teledyne.MAUI` module to connect to the oscilloscope. The IP address "192.168.0.10" is used as an example, and you should replace it with the actual IP address of your oscilloscope.

Once connected, you can perform operations on the oscilloscope, such as starting the trigger in automatic mode and printing the trigger state. Finally, the `close` method is called to close the connection to the oscilloscope.

Note: This code assumes that you have already installed the `instrumentkit` library and its dependencies.
