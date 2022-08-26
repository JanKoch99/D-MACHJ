package d.machj

class Patientdata {

    static belongsTo = [person: Person]

    static hasMany = [medData: MedData]

    String firstname
    String lastname
    String sex
    String address
    Integer zip
    String city


    static constraints = {
    }
}
