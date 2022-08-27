package demo

class MedData {

    static hasMany = [medicament: Medicament]

    static hasOne = [docter: Docter]

    String dateOfIssue
    Integer countOfUsesLeft
    String useCase


    static constraints = {
    }
}
