

export default function LanguageColor(props) {
  // For language colors, see: https://github.com/hanford/github-language-colors/blob/master/colors.json
  switch (props.language) {
    case "JavaScript":
      return ("#f1e05a");
    case "TypeScript":
      return ("#2b7489");
    case "Python":
      return ("#3572A5");
    case "Objective-C++":
      return("#6866fb");
    case "CSS": 
      return ("#563d7c");
    case "HTML":
      return("#e44b23");
    default: (console.log("No language color found for this repository."))
  }
}