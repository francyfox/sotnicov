export interface StageProps {
  stageIndex: number
  name?: string
}

export interface TaskProps {
  stageIndex: number
  taskIndex: number
  id: string
  text?: string
}

export interface StageFooterProps {
  stageIndex: number
  taskCount: number
}

export interface ITask {
  id: string
  text: string
}

export interface IStage {
  id: string
  name: string
  stack: ITask[]
}