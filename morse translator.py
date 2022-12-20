import sys

#defining the function of the words
def rhymingWords(word1, word2):

#defining the suffixes alignment w words
 w1 = len(word1)
 w2 = len(word2)

#defining rejection of words under 3 char
  if len(word1) < 3:
     return False

 if len(word2) < 3:
     return False



for a in range (w1):
    if (w1[word1 - a - 1]) != w2[word2 - a - 1]:
        return False
    return True


    if __name__ == "__main__":
        w1 = "news"
        w2 = "views"

result = rhymingWords(word1, word2)

if (result):
    print ("It rhymes!")
else:
    print ("It doesn't rhyme, sorry")    

