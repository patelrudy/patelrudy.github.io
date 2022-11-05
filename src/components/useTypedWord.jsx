import { useEffect, useState } from 'react';

export var Phase;
(function (Phase) {
    Phase[Phase["Typing"] = 0] = "Typing";
    Phase[Phase["Pausing"] = 1] = "Pausing";
    Phase[Phase["Deleting"] = 2] = "Deleting";
})(Phase || (Phase = {}));

const TYPING_INTERVAL = 150
const PAUSE_TIME = 1000
const DELTEING_INTERVAL = 50 

export const useTypedWord = (words: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(Phase.Typing)
  const [typedWord, setTypedWord] = useState('');

  useEffect(() => {
    switch(phase) {
      case Phase.Typing: {
        const nextTypedWord = words[selectedIndex].slice(0, typedWord.length + 1);

        if (nextTypedWord === typedWord) {
          setPhase(Phase.Pausing)
          return
        }
        
        const timeout = setTimeout(() => {
          setTypedWord(nextTypedWord);
        }, TYPING_INTERVAL);
        return () => clearTimeout(timeout);
      }
      
      case Phase.Deleting: {
        if (!typedWord) {
          const nextIndex = selectedIndex + 1
          setSelectedIndex(words[nextIndex] ? nextIndex : 0)
          setPhase(Phase.Typing)
          return
        }

        const nextRemaining = words[selectedIndex].slice(0, typedWord.length - 1);

        const timeout = setTimeout(() => {
          setTypedWord(nextRemaining);
        }, DELTEING_INTERVAL);
        return () => clearTimeout(timeout);
      }
      
      case Phase.Pausing:
        default:
          const timeout = setTimeout(() => {
            setPhase(Phase.Deleting)
          }, PAUSE_TIME);

          return () => clearTimeout(timeout);
    }
  }, [words, typedWord, selectedIndex, phase]);
  return typedWord;
};
