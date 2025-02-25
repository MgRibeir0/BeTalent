import style from "./EmployeesTable.module.css";

function EmployeesTable() {
  return (
    <div className={style.container}>
      <h2 className={style.columnPhoto}>FOTO</h2>
      <h2 className={style.columnName}>NOME</h2>
      <h2 className={style.columnJob}>CARGO</h2>
      <h2 className={style.columnDate}>DATA DE ADMISSÃO</h2>
      <h2 className={style.columnPhone}>TELEFONE</h2>
      <h4 className={style.mobileDot}>⬤</h4>
    </div>
  );
}

export default EmployeesTable;
