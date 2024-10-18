 

const initialState = {
  employees: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES_SUCCESS':
      return { ...state, employees: action.payload || [] };
      case 'ADD_EMPLOYEE_SUCCESS':
        return { 
          ...state, 
          employees: action.payload && action.payload.firstName // Ensure valid employee
            ? [...state.employees, action.payload] 
            : state.employees 
        };
    case 'UPDATE_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp.id === action.payload.id ? action.payload : emp
        )
      };
    case 'DELETE_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: state.employees.filter(emp => emp.id !== action.payload)
      };
    default:
      return state;
  }
};

export default employeeReducer;
