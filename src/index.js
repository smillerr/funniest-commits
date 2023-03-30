const commitMessages = [
    "lots of changes after a lot of time",
    "We Had To Use Dark Magic To Make This Work",
    "Ok, 5am, it works. For real",
    "Copy-paste to fix previous copy-paste",
    "the magic is real",
    "I am too old for this shit!",
    "Crap. Tonight is raid night and I am already late.",
    "You should have trusted me.",
    "You should have never trusted me.",
    "removed echo and die statements",
    "For the sake of my sanity, just ignore this…",
    "Replace all whitespaces with tabs.",
    "I dont know what I am doing",
    "Dont ask me how this is working",
    "Out for vacation… DONT YOU DARE TO CALL ME.",
    "pr is failing but merging anyways, because I am an admin",
    "“Get that shit outta my main.”",
    "Removing unecessary stuff",
    "The same thing we do every night, Pinky — try to take over the world!",
    "Too lazy to write descriptive message",
    "That last commit message about silly mistakes pales in comparision to this one",
    "We will figure it out on Monday",
    "It fucking compiles :D",
    "Merging “WIP: Do Not Merge This Branch” Into Master",
]


const funnyCommit = () => {
  const commitMessage = commitMessages[Math.floor(Math.random() * commitMessages.length)];
  console.log(`\x1b[35m${commitMessage}\x1b[89m`);
}


module.exports = {
    funnyCommit
};