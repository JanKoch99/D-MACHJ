package demo

class PatientData {

    static hasMany = [medData: MedData]

    static belongsTo = [person: Person]

    String firstName
    String lastName
    String sex
    String address
    Integer zip
    String city

    static constraints = {
    }
}
