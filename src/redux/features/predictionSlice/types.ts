export interface PredictionStructure {
  location: LocationStructure;
  current: CurrentStructure;
}

export interface LocationStructure {
  name: string;
  localtime: string;
}

export interface CurrentStructure {
  temp_c: number;
  condition: ConditionStructure;
}

export interface ConditionStructure {
  text: string;
  icon: string;
}
