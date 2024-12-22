import { Project } from "@/src/interfaces/Project";

export const getGithubProjects = async (): Promise<Project[]> => {
  const apiUrl = 'https://api.github.com/users/tomaszjader/repos';
  
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as Project[];
    
  } catch (error) {
    console.error('Błąd podczas pobierania danych z GitHub:', error);
    throw error;
  }
};