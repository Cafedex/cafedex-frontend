// Defines the structure of a guide, including optional components for brewing instructions
export interface Guide {
    id: number;
    name: string;
    author: string;
    category: string;
    components?: Component[];
  }
  
  // Defines the structure of components used in brewing guides (e.g., grinder, weight, time)
  export interface Component {
    grinder?: string;
    weight?: number;
    time?: number;
  }
  