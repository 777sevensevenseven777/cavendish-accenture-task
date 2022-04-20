enum State {
  PROCESSING = 'processing',
  ERROR = 'error',
  SUCCESS = 'success'
}

enum ErrorCode {
  NO_STOCK,
  INCORRECT_DETAILS
}

interface IProcessingState {
  state: State;
  errorCode?: ErrorCode | null;
}

interface IResponse {
  title: string;
  message: string | null;
}

const getProcessingPage = async (processingStates: IProcessingState[]): Promise<IResponse> => {
  return new Promise(async resolve => {
    for (const processingState of processingStates) {
      if (processingState.state === State.PROCESSING) {
        await waitForTheNextState();
        continue;
      }
      if (processingState.state === State.ERROR) {
        resolve({
          title: 'Error page',
          message: getErrorMessage(processingState.errorCode)
        });
        break;
      }
      if (processingState.state === State.SUCCESS) {
        resolve({
          title: 'Order completed',
          message: null
        });
        break;
      }
    }
  });
}

const waitForTheNextState = async (timeout: number = 2000): Promise<void> => new Promise(res => setTimeout(() => res(), timeout));

const getErrorMessage = (errorCode: ErrorCode | null | undefined): string | null => {
  switch (errorCode) {
    case ErrorCode.NO_STOCK:
      return 'No stock has been found';
    case ErrorCode.INCORRECT_DETAILS:
      return 'Incorrect details have been entered';
    default:
      return null;
  }
}

const testInputs: IProcessingState[][] = [
  [{state: State.PROCESSING}, {state: State.ERROR}],
  [{state: State.PROCESSING}, {state: State.ERROR, errorCode: ErrorCode.INCORRECT_DETAILS}],
  [{state: State.PROCESSING}, {state: State.ERROR, errorCode: ErrorCode.NO_STOCK}],
  [{state: State.PROCESSING}, {state: State.SUCCESS}],
  [{state: State.PROCESSING}, {state: State.PROCESSING}, {state: State.ERROR}, {state: State.PROCESSING}]
];

testInputs.forEach(input => getProcessingPage(input).then(res => console.log(res)));
