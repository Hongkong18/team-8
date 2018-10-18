# -*- coding: utf-8 -*-
"""
Created on Thu Oct 18 14:59:24 2018

@author: jeesu
"""

import json
import sys
#from pprint import pprint
    
def createHyperlink(destination):
    hyperlink = "https://www.google.com/maps/dir/?api=1&origin&destination="
    return hyperlink + destination

def main():
    with open('..\data\doctors.json', "r") as data_file:
        data = json.loads(data_file.read())
        
    #Pass a list of doctor indexes
    docIndexes = sys.argv[1]
    #docIndexes = [2, 3, 4, 5, 6]
    for x in docIndexes:
        print(createHyperlink(data[x]["Address"].replace(" ","+")))
    
if __name__ == "__main__":
    main()
    