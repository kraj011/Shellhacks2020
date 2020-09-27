import pandas as pd

csv_file = "other-datasets/scared-tweets-vectors.csv"
headers = ['tweet', 'magnitude']
embeddings = []
for i in range(100):
	embeddings.append("embedding" + str(i))
lexicons = ['nrc-anger', 'nrc-anticipation', 'nrc-disgust', 'nrc-fear', 'nrc-joy', 'nrc-sadness', 'nrc-surprise', 'nrc-trust', 'senti-pos', 'senti-neg']
headers = headers + embeddings + lexicons

df = pd.read_csv(csv_file, names=headers)
df.to_csv("final-datasets/scared-tweets-headers.csv", index=False)