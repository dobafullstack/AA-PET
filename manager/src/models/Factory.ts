const BASIC_SALARY = 3000000;
const FULL_TIME_STAFF = 2;
const PART_TIME_STAFF = 1.5;
const SECURITY = 1.7;

interface IStaff {
    getSalary(): number;
}

class StaffFullTime implements IStaff{
    getSalary(): number {
        return BASIC_SALARY * FULL_TIME_STAFF;
    }
}

class StaffPartTime implements IStaff {
    getSalary(): number {
        return BASIC_SALARY * PART_TIME_STAFF;
    }
}

class Security implements IStaff {
    getSalary(): number {
        return BASIC_SALARY * SECURITY;
    }
}

export default class UserFactory{
    private typeStaff: string;
    private staff: IStaff;

    constructor(typeStaff: string){
        this.typeStaff = typeStaff;

        switch(this.typeStaff){
            case 'fulltime': 
                this.staff = new StaffFullTime();
                break;
            case 'part time':
                this.staff = new StaffPartTime();
                break;
            case 'security':
                this.staff = new Security();
                break;
            default:
                this.staff = new StaffFullTime();
        }
    }

    getSalary(){
        return this.staff.getSalary();
    }
}