
export interface TriviaQuestion {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
}

/**
 * Converts an array of trivia questions to CSV format
 */
export const convertToCSV = (questions: TriviaQuestion[]): string => {
  const headers = ['Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Correct Answer'];
  const csvRows = [];
  
  // Add the header row
  csvRows.push(headers.join(','));
  
  // Add the data rows
  for (const question of questions) {
    const values = [
      `"${question.question.replace(/"/g, '""')}"`,
      `"${question.optionA.replace(/"/g, '""')}"`,
      `"${question.optionB.replace(/"/g, '""')}"`,
      `"${question.optionC.replace(/"/g, '""')}"`,
      `"${question.optionD.replace(/"/g, '""')}"`,
      `"${question.correctAnswer}"`
    ];
    csvRows.push(values.join(','));
  }
  
  return csvRows.join('\n');
};

/**
 * Downloads a CSV file with the given data
 */
export const downloadCSV = (csvData: string, filename = 'trivia_questions.csv'): void => {
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Simulates uploading to a cloud database
 * In a real application, this would make an API call to your backend
 */
export const uploadToCloud = async (csvData: string): Promise<boolean> => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Uploading to cloud...', csvData.substring(0, 100) + '...');
      resolve(true);
    }, 2000);
  });
};
