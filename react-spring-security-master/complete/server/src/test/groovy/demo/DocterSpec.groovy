package demo

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class DocterSpec extends Specification implements DomainUnitTest<Docter> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
