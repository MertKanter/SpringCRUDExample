package tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.repository;

import org.springframework.data.repository.CrudRepository;
import tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.entity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
