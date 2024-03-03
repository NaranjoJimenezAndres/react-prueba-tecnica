const CAT_ENDPOINT_RAMDOM_FACT = `https://catfact.ninja/fact`;

export const getRamdomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RAMDOM_FACT);
    const data = await response.json();
    const { fact } = data;
    return fact;
    }