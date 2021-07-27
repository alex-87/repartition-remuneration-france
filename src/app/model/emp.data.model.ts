
/**
 * Data model
 */
export class EmpDataModel {

    /**
     * Tranche effectif
     */
    trancheEffectif!: string;

    /**
     * Convention collective
     */
    convColl!: string;

    /**
     * Département de résidence
     */
    deptResidence!: string;

    /**
     * Dommaine d'emploi de l'employeur
     */
    domEmploiEmployeur!: string;

    /**
     * Profession Catégorie SP
     */
    professionCatSocialPro!: string;

    /**
     * Genre
     */
    genre!: string;

    /**
     * Tranche d'age quadriennale
     */
    age!: string;

    /**
     * Type de contrat de travail
     */
    typeContratDeTravail!: string;


    /**
     * EmpDataModel Constructor.
     * 
     * @param trancheEffectif 
     * @param convColl 
     * @param deptResidence 
     * @param domEmploiEmployeur 
     * @param professionCatSocialPro 
     * @param genre 
     * @param age 
     * @param typeContratDeTravail 
     */
    constructor(
        trancheEffectif: string,
        convColl: string,
        deptResidence: string,
        domEmploiEmployeur: string,
        professionCatSocialPro: string,
        genre: string,
        age: string,
        typeContratDeTravail: string,
    ) {
        this.trancheEffectif = trancheEffectif;
        this.convColl = convColl;
        this.deptResidence = deptResidence;
        this.domEmploiEmployeur = domEmploiEmployeur;
        this.professionCatSocialPro = professionCatSocialPro;
        this.genre = genre;
        this.age = age;
        this.typeContratDeTravail = typeContratDeTravail;
    }

    isValidDamaModel() : boolean {
        return (
            this.trancheEffectif != '' ||
            this.convColl != '' ||
            this.deptResidence != '' ||
            this.domEmploiEmployeur != '' ||
            this.professionCatSocialPro != '' ||
            this.genre != '' ||
            this.typeContratDeTravail != ''
        );
    };

    /**
     * Get JSon struture.
     * 
     * @returns JSon with data of EmpDataModel
     */
    toJson() {
        return {
            'TREFF' : (this.trancheEffectif!='' && this.trancheEffectif.length!=2 ? '0' + this.trancheEffectif : this.trancheEffectif),
            'CONV_COLL' : this.convColl,
            'DEPR' : this.deptResidence,
            'DOMEMPL_EM' : this.domEmploiEmployeur,
            'PCS' : this.professionCatSocialPro,
            'GENRE' : this.genre,
            'AGE_TR' : this.age,
            'CONT_TRAV' : this.typeContratDeTravail,
        };
    }

}
