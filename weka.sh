#!/usr/bin/env bash

export CLASSPATH="C:\Code\Azure\ShellHacks2020\weka-3-8-4\weka.jar"

java -Xmx1024m weka.Run weka.filters.unsupervised.attribute.TweetToEmbeddingsFeatureVector -S AVERAGE_ACTION -embeddingHandler "affective.core.CSVEmbeddingHandler -K C:\\Users\\Eugene\\wekafiles\\packages\\AffectiveTweets\\resources\\w2v.twitter.edinburgh.100d.csv.gz -sep TAB -I last" -K 15 -stan -stemmer weka.core.stemmers.NullStemmer -stopwords-handler "weka.core.stopwords.Null " -I 1 -U -tokenizer "weka.core.tokenizers.TweetNLPTokenizer " -i "C:\Code\Azure\ShellHacks2020\other-datasets\angry-tweets.csv" -o "C:\Code\Azure\ShellHacks2020\output.csv"

$SHELL

# weka.filters.unsupervised.attribute.TweetToLexiconFeatureVector -P -Q -stan /
# 	-stemmer weka.core.stemmers.NullStemmer -stopwords-handler "weka.core.stopwords.Null " -I 1 /
# 	-U -tokenizer "weka.core.tokenizers.TweetNLPTokenizer "