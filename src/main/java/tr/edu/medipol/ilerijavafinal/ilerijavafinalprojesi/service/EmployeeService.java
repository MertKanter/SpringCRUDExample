package tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.entity.Employee;
import tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.repository.EmployeeRepository;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployee(){
        return (List<Employee>) employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long employeeId){
        return employeeRepository.findById(employeeId).get();
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public void deleteEmployeeById(Long employeeId){
        employeeRepository.deleteById(employeeId);
    }
}
