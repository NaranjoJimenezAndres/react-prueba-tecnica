import { useState , useEffect } from "react";
import { getRamdomFact } from "../facts";

export function useCatFact() {
    const [fact, setFact] = useState('');
    // CUSTOM HOOKS
    const refreshRamdomFact = () => {
        getRamdomFact().then((fact) => setFact(fact));
    }
      
    useEffect(refreshRamdomFact, []);
      
    return { fact, refreshRamdomFact };
      
    }