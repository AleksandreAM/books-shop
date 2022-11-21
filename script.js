let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google";

let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);

let firsth1 = document.querySelector('h1');
firsth1.remove();

firstParagraph.parentElement.append(firstParagraph);