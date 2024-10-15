import { Guide, Component } from "../types/apiTypes";

export const fetchGuides = async ():Promise<Guide[]> => {
    const response = await fetch ('http://localhost:8080/api')
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      const data: Guide[] = await response.json();
      console.log(`Current Response: ${response.json()}`);
      return data;
}