##put nltk here 
import sys
#sys.path.append(r'C:\Users\jeesu\Desktop\CFG')
from rake_nltk import Rake
from nltk.corpus import wordnet as wn

def GetSignificant(mytext):
    r = Rake()
    #Internal Testing
    r.extract_keywords_from_text(mytext)
    
    listSig = {}
    #Get extracted scores and phrases
    extractedScores = r.get_ranked_phrases_with_scores()
    
    #calculate Average
    scoreAvg = 0
    for score, phrase in extractedScores:
        scoreAvg += score
    scoreAvg = scoreAvg/len(extractedScores)
    #adding this causes problems with all equal scores
    #scoreAvg += scoreAvg/2 
    for score, phrase in extractedScores:
        if phrase.count(' ') > 0 and score >= scoreAvg:
            for word in phrase.split():
                tmp = wn.synsets(word)[0].pos()
                #print (word, ":", tmp)
            listSig.update({phrase:score})
            
        elif score >= scoreAvg:
            tmp = wn.synsets(phrase)[0].pos()
            #print (phrase, ":", tmp)
            listSig.update({phrase:score})
            #swntmp = phrase + "." + tmp + ".01"
            #print (swn.senti_synset(swntmp))
    s = " "
    return s.join(list(listSig))

def loop():
    print ("I'm sorry, can you talk about how you feel?")
    return 0

def main():
    #returns string of significant phrases
    GetSignificant(sys.argv[1])
    
    sys.stdout.flush()
    
if __name__ == "__main__":
    main()