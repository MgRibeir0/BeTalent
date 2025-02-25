import { useEffect, useState } from "react";
import EmployeesCard from "../EmployeesCard/EmployeesCard";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import style from "./EmployeesList.module.css";

interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployeesListProps {
  searchQuery: string;
}

function EmployeesList({ searchQuery }: EmployeesListProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:3000/employees");

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data: Employee[] = await response.json();
        setEmployees(data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Falha ao carregar dados",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("pt-BR");
  };

  const formatPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "").slice(2);
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phone;
  };

  if (loading) {
    return <div className={style.loading}>Carregando funcionários...</div>;
  }

  if (error) {
    return <div className={style.error}>❌ Erro: {error}</div>;
  }

  const filteredEmployees = employees.filter((employee) => {
    const query = searchQuery.toLowerCase();
    return (
      employee.name.toLowerCase().includes(query) ||
      employee.job.toLowerCase().includes(query) ||
      employee.phone.toLowerCase().includes(query)
    );
  });

  return (
    <div className={style.listContainer}>
      <EmployeesTable />
      {filteredEmployees.map((employee) => (
        <EmployeesCard
          key={employee.id}
          name={employee.name}
          avatarUrl={employee.image}
          position={employee.job}
          admissionDate={formatDate(employee.admission_date)}
          phone={formatPhone(employee.phone)}
        />
      ))}
    </div>
  );
}

export default EmployeesList;
