import { useState, useEffect } from "react";
import { ChevronDown } from "../../icons";
import style from "./EmployeesCard.module.css";

interface EmployeeCardProps {
  name: string;
  avatarUrl: string;
  position: string;
  admissionDate: string;
  phone: string;
}

function EmployeesCard({
  name,
  avatarUrl,
  position,
  admissionDate,
  phone,
}: EmployeeCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <div className={style.card}>
      <div
        className={style.header}
        onClick={toggleAccordion}
        role={isMobile ? "button" : undefined}
        tabIndex={isMobile ? 0 : -1}
      >
        <img className={style.avatar} src={avatarUrl} alt={name} />

        <div className={style.profileInfo}>
          <h3 className={style.name}>{name}</h3>
        </div>

        {/* Ícone de accordion (aparece só no mobile) */}
        {isMobile && (
          <span className={style.accordionIcon}>
            {isOpen ? <ChevronDown /> : <ChevronDown up />}
          </span>
        )}
      </div>

      {/* Bloco de informações adicionais (abre só no mobile, no desktop fica sempre visível) */}
      <div className={`${style.additionalInfo} ${isOpen ? style.open : ""}`}>
        <div className={style.infoItem}>
          <span>Cargo</span>
          <strong>{position}</strong>
        </div>
        <div className={style.infoItem}>
          <span>Data de admissão</span>
          <strong>{admissionDate}</strong>
        </div>
        <div className={style.infoItem}>
          <span>Telefone</span>
          <strong>{phone}</strong>
        </div>
      </div>
    </div>
  );
}

export default EmployeesCard;
