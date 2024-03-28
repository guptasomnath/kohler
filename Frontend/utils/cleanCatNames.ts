export function cleanCatNames(catNames: string[]) {
    let tableNames = "";
    catNames?.map((item) => {
      tableNames +=
        " " +
        item
          .trim()
          .replaceAll("&", "")
          .replaceAll(" ", "_")
          .replaceAll("__", "_")
          .replaceAll("-", "_")
          .toLowerCase();
    });

    return tableNames.trim();
  }