package tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.entity.Employee;
import tr.edu.medipol.ilerijavafinal.ilerijavafinalprojesi.service.EmployeeService;

import java.util.List;


@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/add")
    public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee){
        System.out.println("employee add service called");
        Employee savedEmployee = employeeService.saveEmployee(employee);
        return new ResponseEntity<Employee>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployee(){
        System.out.println("employee list service called");
        List<Employee> allEmployee = employeeService.getAllEmployee();
        return new ResponseEntity<List<Employee>>(allEmployee, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable(name = "id") Long employeeId){
        System.out.println("employee list id service called");
        Employee employee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<Employee>(employee, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@RequestBody Employee employee){
        System.out.println("employee update service called");
        Employee updatedEmployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<Employee>(updatedEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEmployeeById(@PathVariable(name = "id") Long employeeId){
        System.out.println("employee delete service called");
        employeeService.deleteEmployeeById(employeeId);
        return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
    }
}
