export interface Question {
  id: number;
  text: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  image?: string; 
  type?: 'standard' | 'syllogism';
  multiPartCorrect?: number[]; // For syllogisms: [1, 0, 1, 1, 0] (1=Follows, 0=Doesn't)
  multiPartLabels?: string[]; // ["Conclusion 1", "Conclusion 2", ...]
}

export interface UCATSet {
  setId: number;
  section: 'Quantitative Reasoning' | 'Decision Making' | 'Verbal Reasoning' | 'Situational Judgement';
  title: string;
  type: 'TABLE' | 'PIE_CHART' | 'BAR_CHART' | 'LINE_GRAPH' | 'MULTI_TABLE' | 'PIE_AND_TABLE' | 'IMAGE_SET' | 'TEXT_LOGIC' | 'SCENARIO' | 'PASSAGE';
  context: string;
  dataSource: any; 
  questions: Question[];
}
