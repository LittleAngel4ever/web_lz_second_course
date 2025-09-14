/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the result of concatenation of two strings.
 */
function concatenateStrings(textA, textB) 
{
  return textA + textB;
}

/**
 * Returns the length of given string.
 */
function getStringLength(inputStr) 
{
  return inputStr.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 */
function getStringFromTemplate(first, last) 
{
  return `Hello, ${first} ${last}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 */
function extractNameFromTemplate(greeting) 
{
  return greeting.slice(7, -1);
}

/**
 * Returns a first char of the given string.
 */
function getFirstChar(textLine) 
{
  return textLine[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 */
function removeLeadingAndTrailingWhitespaces(rawText) 
{
  const trimmedText = rawText.trim();
  return trimmedText;
}

/**
 * Returns a string that repeated the specified number of times.
 */
function repeatString(pattern, times) 
{
  return pattern.repeat(times);
}

/**
 * Remove the first occurrence of string inside another string
 */
function removeFirstOccurrences(sentence, fragment) 
{
  return sentence.replace(fragment, '');
}

/**
 * Remove the first and last angle brackets from tag string
 */
function unbracketTag(tagStr) 
{
  return tagStr.slice(1, -1);
}

/**
 * Converts all characters of the specified string into the upper case
 */
function convertToUpperCase(inputWord) 
{
  return inputWord.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 */
function extractEmails(emailList) 
{
  return emailList.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 */
function getRectangleString(width, height) 
{
  const topLine = `┌${'─'.repeat(width - 2)}┐\n`;
  const middleBlock = `${`│${' '.repeat(width - 2)}│\n`.repeat(height - 2)}`;
  const bottomLine = `└${'─'.repeat(width - 2)}┘\n`;
  return topLine + middleBlock + bottomLine;
}

/**
 * Encode specified string with ROT13 cipher
 */
function encodeToRot13(message) 
{
  let encoded = '';
  for (let idx = 0; idx < message.length; idx += 1) 
    {
    const charCode = message.charCodeAt(idx);
    if (charCode >= 65 && charCode <= 90) 
    {
      encoded += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } 
    else if (charCode >= 97 && charCode <= 122) 
    {
      encoded += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } 
    else 
    {
      encoded += message[idx];
    }
  }

  return encoded;
}

/**
 * Returns true if the value is string; otherwise false.
 */
function isString(candidate) 
{
  return typeof candidate === 'string' || candidate instanceof String;
}

/**
 * Returns playid card id (zero-based index in a standard 52-card deck).
 */
function getCardId(card) 
{
  const suitsArr = ['♣', '♦', '♥', '♠'];
  const ranksArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const rankPart = card.slice(0, -1);
  const suitPart = card.slice(-1);

  return suitsArr.indexOf(suitPart) * ranksArr.length + ranksArr.indexOf(rankPart);
}

module.exports = 
{
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};