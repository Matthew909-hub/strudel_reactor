export function Preprocess({ inputText, volume }) {

    let outputText = inputText + "\n//Hello, this is a test";
    outputText = outputText.replaceAll("{$VOLUME}",volume)


    return outputText

}

//export default Preprocess;

//let outputText = inputText + "\n//Hello, this is a test";

//let regex = /[a-zA-Z0-9_]+:\s*\n[\s\S]+?\n(?=[a-zA-Z0-9_]*[:\/])/gm;

//let m;

//let matches = []

//while ((m = regex.exec(outputText)) !== null) {
//    if (m.index === regex.lastIndex) {
//        regex.lastIndex++;
//    }
//    m.forEach((match, groupIndex) => {
//        matches.push(match)
//    });
//}

//let matches2 = matches.map(
//    match => match.replaceAll(/(?<!post)gain\(([\d.]+)\)/g, (match, captureGroup) => `gain(${captureGroup}*${volume})`
//    )
//);

//let matches3 = matches.reduce(
//    (text, original, i) => text.replaceAll(original, matches2[i]),
//    outputText);



//return matches3