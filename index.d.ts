interface sourceData {
  head: any[];
  body: any[];
}
declare const exportExcel: (sourceData: sourceData, name: string) => void;
export default exportExcel;
