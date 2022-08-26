package d.machj

class MedData {

    static belongsTo = [patientData: Patientdata]

    String dateOfIssue
    String medicament
    Integer useAmount
    String useCase
    String doctor

    static constraints = {
    }
}
