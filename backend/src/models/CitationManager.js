const AbstractManager = require("./AbstractManager");

class CitationManager extends AbstractManager {
  constructor() {
    super({ table: "citation" });
  }

  insert(citation) {
    return this.connection.query(
      `insert into ${this.table} (text) values (?)`,
      [citation.text]
    );
  }
}

module.exports = CitationManager;
