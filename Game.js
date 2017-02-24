//Introduction

confirm("Welcome to Game Title");
confirm("Would you like to begin?");

var name = prompt("What is your name?");

confirm("Okay " + name + ", you are ready to begin your journey!");

confirm("You slowly open your eyes, unable to remember anything from before you woke. You feel a sharp pain at the back of your head, it hurts to try and remember.");

confirm("You decide that you need to get back your memories somehow");

confirm("You get up to check your surroundings");

confirm("You realise that you are locked in some kind of cell.");

var cell = prompt("do you want to try to FIND something to break out or use brute FORCE?").toUpperCase();
if(cell === "FIND")
{
}
else if(cell === "FORCE") {
    confirm("You run head first into the iron bars, unable to budge the door");
}
else
{
    confirm("You choose to run head first into the iron bars, unable to budge the door");
}

confirm("You search the room, trying to find something useful to pick the lock of the cell door.");

confirm("Under a dusty old rag you find a screwdriver.");

confirm("You jam the screwdriver in to the lock and it breaks open");

confirm("You sprint out of your cell to find that you are the only one around");

confirm("As you run around a corner you see a guard coming closer");

var guard = prompt("Do you choose to ATTACK the guard or RUN?").toUpperCase();

if(guard === "ATTACK")
{
   confirm("You charge the guard, throwing him head first into a wall");
   
   confirm("The guard is unconcious");
   
   confirm("You drag the guard in to the room closest to you");
   
   confirm("You trade clothes with the guard to try and blend in, in case you are spotted.");
   
   confirm("You continue through the dungeons and see a large number of people close to you");
   
   confirm("You quickly enter the room closest to you.");
   
   confirm("As you enter the room you see two weapons");
}
else if(guard === "RUN")
{
    confirm("You turn back before the guard sees you and you run the other way");
    
    confirm("You keep running down the hall you came from.");
    
    confirm("You enter a room that appears to be empty");
    
    confirm("As you walk into the room you see two weapons");
    
}
else
{
    confirm("You didn't make the right decision and the guard kills you");
    ProgDOram.restart();
}
var weapon = prompt("You realise that this could come in useful. Which do you choose? SWORD or BOW?").toUpperCase();

if(weapon === "SWORD")
{
    confirm("You feel the power of the sword flowing inside of you. Good choice.");
    
    confirm("You sheath the sword and continue on your way.");
    
    confirm("You continue through the dungeon and come to a flight of stairs");
    
    confirm("You go up the stairs");
    
    confirm("The entrance to the dungeon is now in front of you");
    
    confirm("You exit the dungeon before you are seen by more guards");
    
    confirm("The sharp pain in the back of your head becomes blinding as you recall a memory of the town you lived in");
    
    confirm("The town is called Murkwell");
    
    confirm("You believe that you must travel to Murkwell in order to restore your remaining memories");
    
    confirm("You begin to wander around as you have no clue where Murkwell is");
    
    confirm("As you feel like giving up on searching for the town in your memories a woman on a horse gallops over to you")
    
    confirm("You wait for her to approach you so you can ask her about Murkwell");
    
    confirm("As she gets closer you see the anger in her eyes");
    
    confirm("She retrieves her sword from her sheath and directs it at you");
    
    var girl = prompt("Will you DODGE or FIGHT back?").toUpperCase();
    
    if(girl === "DODGE")
    {
    confirm("You dart to the left, avoiding the sword by inches");
        
        
    }
    else if(girl === "FIGHT")
    {
    
        confirm("You unsheathe your sword and parry her attack")
    
        confirm("She gets off her horse and meets you at eye level")
    
        confirm("She says 'Why are you here and what do you want?'")
    
        confirm("You explain to her that you aren't an enemy and that you are looking for Murkwell to recover your memories");
    
        confirm("Her killing intent turns to curiousity, she seems to be relieved that you aren't a threat");
    
        confirm("She tells you that Murkwell is where she is heading to and that you can ride with her");
    
        confirm("You agree to get on the horse and continue to Murkwell")
        
    
    }
    else
    {
        confirm("You do not do anything and the woman slices off your head");
        Program.restart();
    }
    
    confirm("As you travel down the path to Murkwell you discover that the woman once knew you")
    
    confirm("She tells you that you were childhood friends who lived in Murkwell together, her name is Jasmine");
    
    confirm("You memories are still foggy and the pain in your neck is getting stronger");
    
    confirm("You're getting closer to Murkwell, the place you grew up");
    
    confirm("As you come to the entrance of the town you start to bleed from your neck");
    
    var travel = prompt("Do you want to continue into Murkwell? YES or NO?").toUpperCase();
    
    if(travel === "YES")
    {
        confirm("You continue on to Murkwell");
    }    
    else if(travel === "NO")
    {
        confirm("You choose not to continue and live your life without getting your memories back");
        
        confirm("END")
        
        Program.restart();
        
    }
    else
    {
        confirm("You made the wrong choice");
        Program.restart();
    }
    
    confirm("Jasmine sees the blood trickling down your neck and starts to freak out");
    
    confirm("You get her to calm down as you stop the bleeding");
    
    confirm("You still don't know why you suddenly started bleeding from your neck");
    
    confirm("As you get into Murkwell you are greeted by an old man in a hood");
    
    confirm("There is a strange aura around him");
    
    confirm("The horse you are riding on collapses as it gets close to the man");
    
    confirm("The horse is dead");
    
    confirm("You unsheathe your sword and face the old hooded man");
    
    confirm("He is definitely evil");
    
    confirm("Jasmine stands beside you, ready to fight");
    
    confirm("The old man shoots lightning out of his hands");
    
    confirm("You get electrocuted");
    
    confirm("You lie on the ground screaming in pain");
    
    confirm("Suddenly a large screech is heard from the skies");
    
    confirm("A dragon swoops in front of you, protecting you from the man");
    
    confirm("The man is shocked from the dragons appearance, he stumbles backwards");
    
    confirm("The man begs to let him live, he will give you back your memories");
    
    confirm("You're confused, you didn't realise this man was the one who held the key to your memories");
    
    confirm("The man returns your memories, you remember that you are a dragon rider");
    
    confirm("The only man who has ever been able to tame a dragon");
    
    confirm("The dragon crushes the man");
    
    confirm("You have accomplished your mission");
    
    confirm("You have your memories");
}
