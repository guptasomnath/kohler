// Function to fetch limited data from selected tables
function fetchDataFromMultipleTableQuery(selectedTables, limit, skip) {
  let query = "";
  let tableQueries = [];
  let limitPerTable = Math.ceil(limit / selectedTables.length);

  // Constructing the SQL query dynamically based on selected tables
  selectedTables.forEach((table) => {
    tableQueries.push(`
                (SELECT * FROM ${table} LIMIT ${limitPerTable} OFFSET ${skip})
            `);
  });

  query = `SELECT * FROM (${tableQueries.join(
    " UNION ALL "
  )}) AS combined_tables;`;

  return query;
}

module.exports = {
  fetchDataFromMultipleTableQuery,
};
