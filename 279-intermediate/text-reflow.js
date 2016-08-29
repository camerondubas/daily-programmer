function reflow(input, lineLength) {
  return input
    .split(/\n\n/g)
    .map(paragraph => paragraph
      .split(/\n/g)
      .map(fragment => fragment.trim())
      .join('__')
      .replace(/__/g, ' ')
    )
    .map(paragraph => { 
      let updatedParagraph = [];

      while(paragraph.length > 0) {
        updatedParagraph.push(splitAtSpace(lineLength));

        function splitAtSpace(pos) {
          if (paragraph.charAt(pos) === ' ' || paragraph.length < lineLength) {
            let fragment = paragraph.substr(0,pos);
            paragraph = paragraph.substring(pos).trim();
            return fragment;
          } else {
            return splitAtSpace(pos-1);
          }
        }
      }
      
      return updatedParagraph.join('\n');
    }).join('\n\n');
}
