---
title: Running an Accuracy Classification Model in Python with Flojoy
description: How to strip the labels from data, extract only the features of a datatest, and run a prediction accuracy classification model in Python with Flojoy.
keywords: [AI, Classification, Python, DataFrame, Accuracy, Prediction]
image: https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/AI_ML/CLASSIFICATION/ACCURACY/examples/EX1/output.jpeg
---

In this example, the [iris dataset](https://archive.ics.uci.edu/dataset/53/iris) is split into two parts, one for training and the other for testing. The labels from the test data are stripped using an `EXTRACT_COLUMNS` node, extracting only the features of the data. 

The true labels are also extracted with another `EXTRACT_COLUMNS` to be passed to the `ACCURACY` node, along with the `SUPPORT_VECTOR_MACHINE` predictions.

In the output, we see that the `SUPPORT_VECTOR_MACHINE` node has made correct predictions for all of the test data.
