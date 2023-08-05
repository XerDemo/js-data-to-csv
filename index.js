const exportExcel = (sourceData, name) => {
  // 1.处理数据格式
  const { head = [], body = [] } = sourceData;
  let data = [];
  const fieldNames = head.map((item) => item.fieldName);
  data.push(head.map((item) => item.title).join(","));
  body.forEach((item) => {
    let line = [];
    fieldNames.forEach((fieldName) => {
      line.push(`\"${item[fieldName]}\"`); // 单元格内容，逗号转义
    });
    data.push(line.join(","));
  });
  data = data.join("\n"); // 每行加上换行符

  // 2. 利用blob结合a标签下载文件
  const blob = new Blob(["\ufeff", data], { type: "text/plain" }); // “\ufeff”解决中文乱码
  const a = document.createElement("a");
  a.download = `${name}.csv`;
  a.href = window.URL.createObjectURL(blob);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export default exportExcel;
