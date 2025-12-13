// Script to add hint words to words.js
import fs from 'fs';

// Simple word association mapping for generating hint words
const wordAssociations = {
  // Add some specific associations
  'abduction': 'kidnapping',
  'abortion': 'termination',
  'absurd': 'ridiculous',
  'abundance': 'plenty',
  'abuse': 'mistreatment',
  'acceptance': 'approval',
  'accident': 'mishap',
  'achievement': 'success',
  'activate': 'enable',
  'addict': 'dependent',
  'admired': 'respected',
  'adorable': 'cute',
  'adult': 'grownup',
  'advantage': 'benefit',
  'adventure': 'quest',
  'affection': 'love',
  'afraid': 'scared',
  'aggressive': 'hostile',
  'agility': 'speed',
  'agony': 'pain',
  'agreement': 'contract',
  'air': 'atmosphere',
  'alcoholic': 'drunkard',
  'alert': 'aware',
  'alien': 'extraterrestrial',
  'alimony': 'support',
  'alive': 'living',
  'allergy': 'reaction',
  'alley': 'lane',
  'alone': 'solitary',
  'aloof': 'distant',
  'ambition': 'drive',
  'ambulance': 'emergency',
  'angel': 'seraph',
  'anger': 'rage',
  'angry': 'furious',
  'anguished': 'tormented',
  'ankle': 'joint',
  'annoy': 'irritate',
  'answer': 'response',
  'anxious': 'nervous',
  'applause': 'cheers',
  'appliance': 'device',
  'arm': 'limb',
  'army': 'military',
  'aroused': 'excited',
  'arrogant': 'conceited',
  'art': 'painting',
  'assassin': 'killer',
  'assault': 'attack',
  'astonished': 'amazed',
  'astronaut': 'cosmonaut',
  'athletics': 'sports',
  'autumn': 'fall',
  'avalanche': 'snowslide',
  'avenue': 'boulevard',
  'awed': 'wonderstruck',
  'baby': 'infant',
  'bake': 'cook',
  'bandage': 'dressing',
  'bankrupt': 'insolvent',
  'banner': 'flag',
  'bar': 'pub',
  'barrel': 'cask',
  'basket': 'container',
  'bastard': 'jerk',
  'bath': 'soak',
  'bathroom': 'restroom',
  'bathtub': 'tub',
  'beach': 'shore',
  'beast': 'monster',
  'beautiful': 'gorgeous',
  'beauty': 'loveliness',
  'bed': 'mattress',
  'bees': 'wasps',
  'beggar': 'panhandler',
  'bench': 'seat',
  'bereavement': 'grief',
  'betray': 'deceive',
  'beverage': 'drink',
  'bird': 'avian',
  'birthday': 'anniversary',
  'black': 'ebony',
  'blackmail': 'extortion',
  'bland': 'tasteless',
  'blase': 'indifferent',
  'blasphemy': 'profanity',
  'bless': 'sanctify',
  'blind': 'sightless',
  'bliss': 'ecstasy',
  'blister': 'bubble',
  'blond': 'fair',
  'bloody': 'gory',
  'blossom': 'flower',
  'blubber': 'whale',
  'blue': 'azure',
  'board': 'plank',
  'body': 'corpse',
  'bold': 'brave',
  'bomb': 'explosive',
  'book': 'novel',
  'bored': 'tedious',
  'bottle': 'flask',
  'bouquet': 'flowers',
  'bowl': 'dish',
  'boxer': 'fighter',
  'boy': 'lad',
  'brave': 'courageous',
  'breast': 'bosom',
  'breeze': 'wind',
  'bride': 'newlywed',
  'bright': 'luminous',
  'broken': 'shattered',
  'brother': 'sibling',
  'brutal': 'savage',
  'building': 'structure',
  'bullet': 'ammunition',
  'bunny': 'rabbit',
  'burdened': 'overloaded',
  'burial': 'interment',
  'burn': 'scorch',
  'bus': 'coach',
  'busybody': 'meddler',
  'butter': 'margarine',
  'butterfly': 'moth',
  'cabinet': 'cupboard',
  'cake': 'pastry',
  'cancer': 'tumor',
  'candy': 'sweet',
  'cane': 'stick',
  'cannon': 'artillery',
  'capable': 'competent',
  'car': 'automobile',
  'carcass': 'remains',
  'carefree': 'relaxed',
  'caress': 'stroke',
  'cash': 'money',
  'casino': 'gambling',
  'cat': 'feline',
  'cell': 'prison',
  'cellar': 'basement',
  'cemetery': 'graveyard',
  'chair': 'furniture'
};

// Function to generate a hint word for a given word
function generateHintWord(word) {
  // Check if we have a specific association
  if (wordAssociations[word.toLowerCase()]) {
    return wordAssociations[word.toLowerCase()];
  }

  // Simple fallback: add a suffix or modify the word slightly
  const lowerWord = word.toLowerCase();

  // For words ending in common patterns, create related words
  if (lowerWord.endsWith('ing')) {
    return lowerWord.slice(0, -3) + 'er'; // running -> runner
  }
  if (lowerWord.endsWith('ed')) {
    return lowerWord.slice(0, -2) + 'ing'; // played -> playing
  }
  if (lowerWord.endsWith('er')) {
    return lowerWord.slice(0, -2) + 'ing'; // runner -> running
  }
  if (lowerWord.endsWith('y')) {
    return lowerWord.slice(0, -1) + 'ies'; // party -> parties
  }
  if (lowerWord.endsWith('s')) {
    return lowerWord.slice(0, -1); // cats -> cat
  }

  // Default: just add "related" prefix or modify slightly
  if (lowerWord.length > 3) {
    return lowerWord + 's'; // Make plural
  }

  return lowerWord + 'like'; // Add "like" suffix
}

try {
  // Read the words.js file
  const wordsContent = fs.readFileSync('src/words.js', 'utf8');

  // Extract the words array
  const wordsMatch = wordsContent.match(/const words = (\[[\s\S]*?\]);/);
  if (!wordsMatch) {
    console.error('Could not find words array in file');
    process.exit(1);
  }

  const wordsArrayStr = wordsMatch[1];
  const wordsArray = eval(wordsArrayStr); // Be careful with eval in production!

  console.log(`Processing ${wordsArray.length} words...`);

  // Add hint_word to each word object
  const updatedWords = wordsArray.map(wordObj => {
    const hintWord = generateHintWord(wordObj.word);
    return {
      ...wordObj,
      hint_word: hintWord
    };
  });

  // Create the new file content
  const newContent = `const words = ${JSON.stringify(updatedWords, null, 2)};

export default words;`;

  // Write back to file
  fs.writeFileSync('src/words.js', newContent, 'utf8');

  console.log('Successfully added hint words to all word objects!');
  console.log(`Processed ${updatedWords.length} words`);

} catch (error) {
  console.error('Error processing words.js:', error);
  process.exit(1);
}
