export interface IInitalStateExcel {
  title: string;
  colState: {
    [key: number]: number;
  };
  currentStyles: {
    fontStyle: string;
    fontWeight: string;
    textAlign: string;
    textDecoration: string;
  };
  currentText: string;
  currentActiveCell: string;
  dataState: {
    [key: string]: string;
  };
  openedDate: string;
  rowState: {
    [key: number]: number;
  };
  stylesState: {
    [key: string]: {
      textDecoration: string;
      textAlign: string;
      fontWeight: string;
    };
  };
}
