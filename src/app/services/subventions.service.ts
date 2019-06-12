class Subvention {
    origin : string;
    value: number
}

export class SubventionService{
    title : string= 'Origine des Subventions Budget Revisité -'
    subtitle: string = ' Année 2018/2019 En %';
    tilteMin : string = 'Origine des Subventions'

    subventions : Subvention[]= [
        {"origin": "Paris", "value": 95},
        {"origin": "Etat", "value": 5},
        {"origin": "Region", "value": 0},
        {"origin": "UE", "value": 0},
        {"origin": "Autres", "value": 0}
    ];

    getTitle(){
        return this.title;
    }

    
    getTitleMin(){
        return this.tilteMin;
    }

    getSubtitle(){
        return this.subtitle;
    }

    getSubventions(){
        return this.subventions.slice();
    }

}