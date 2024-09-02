from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/process_lists', methods=['POST'])




def process_lists():
    def addDialog(newBackground, newDialog, newCharA = "X", newCharB = "X", newCharC = "X"):
        charA.append(newCharA)
        charB.append(newCharB)
        charC.append(newCharC)
        scenes.append(newBackground)
        dialogs.append(newDialog)

    def presentation():
        bgs = ["assets/backgrounds/Main Hall F1.png", "assets/backgrounds/Passage To Bar.png", "assets/backgrounds/Bar.png", "assets/backgrounds/Cafeteria.png", "assets/backgrounds/Kitchen.png", "assets/backgrounds/Pink Room.png", "assets/backgrounds/Smoking Area Hall.png", "assets/backgrounds/Game Room.png", "assets/backgrounds/Blue Room.png", "assets/backgrounds/Red Room.png"]
        bgNames = ["main hall", "passage to bar", "bar", "cafeteria", "kitchen", "pink room", "smoking area hall", "game room", "blue room", "red room"]
        
        namesIdsToPlace = []
        for i in range(len(names)): namesIdsToPlace.append(i)

        peoplePlacements = []
        while len(namesIdsToPlace)>0:
            number = random.randint(1,3)
            prelist = []
            for n in range(number):
                if len(namesIdsToPlace)>0:
                    rngId = random.randint(0,len(namesIdsToPlace)-1)
                    prelist.append(namesIdsToPlace[rngId])
                    namesIdsToPlace.pop(rngId)
            if len(prelist)>0: peoplePlacements.append(prelist)

        addDialog("assets/backgrounds/Main Hall F1.png", "Hi!! This is the beta-test version of the game, so nothing much to see here (press space or left click)", "X", "X", "X")
        addDialog("assets/backgrounds/Main Hall F1.png", "The characters seems to spend some time exploring the first floor though, let's go see them!", "X", "X", "X")
        index = 0
        for i in peoplePlacements:
            currentBg = bgs[index]
            currentBgName = bgNames[index]
            if len(i) == 1:
                preDialog = names[i[0]] + " is spending time alone in the " + currentBgName +"."
                addDialog(currentBg, preDialog, images[i[0]], "X", "X")
            elif len(i) == 2:
                preDialog = names[i[0]] + " is spending time with " + names[i[1]] + " in the " + currentBgName +"."
                addDialog(currentBg, preDialog, "X", images[i[0]], images[i[1]])
            elif len(i) == 3:
                preDialog = names[i[0]] + " is spending time with " + names[i[1]] + " and "+ names[i[2]] + " in the " + currentBgName +"."
                addDialog(currentBg, preDialog, images[i[1]], images[i[0]], images[i[2]])
            index += 1
            index %= len(bgNames)
        addDialog("assets/backgrounds/Main Hall F1.png", "And that's pretty much it for now! Please tell me about any glitch or suggestion on the discord server!", "X", "X", "X")
        addDialog("assets/backgrounds/Main Hall F1.png", "Again thanks for checking this project out. I'm very happy to see people are still looking forward to it! :D", "X", "X", "X")
        
        return

    data = request.json
    names = data.get('names', [])
    images = data.get('images', [])
    
    charA = []
    charB = []
    charC = []
    scenes = []
    dialogs = []

    backgroundList = [ "assets/backgrounds/Main Hall F1.png" ]
    presentation()

    return jsonify({
        "charA": charA,
        "charB": charB,
        "charC": charC,
        "scenes": scenes,
        "dialogs": dialogs
    })

if __name__ == '__main__':
    app.run(debug=True)