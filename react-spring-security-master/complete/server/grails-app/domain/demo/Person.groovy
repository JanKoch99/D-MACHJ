package demo

class Person {

    static hasOne = [patientData: PatientData]

    Role role
    String user
    String password
    String mail

    static constraints = {
    }
}
