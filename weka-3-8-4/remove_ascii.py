import string
import pandas as pd
printable = set(string.printable)

csv_file = "other-datasets/scared-tweets.csv"
df = pd.read_csv(csv_file)
col = df.iloc[:, 0]

for i, tweet in enumerate(col):
	tweet = "".join(list(filter(lambda x: x in printable, tweet)))
	df.at[i, "tweet"] = tweet

df.to_csv("other-datasets/scared-tweets.csv", index=False)
