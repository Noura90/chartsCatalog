class ProductDetails {
    activity : string;
    currentYear: number;
    lastYear : number;
    currentYearValue : string;
    lastYearValue: string;
}

export class ProductDetailsService {

    title: string = 'Détail des produits par Activité Budget Réalisé-';
    tilteMin : string = 'Produits par Activité';
    subtitle : string = 'Exercice en cours et N-1 en Euros';
    productDetails : ProductDetails[] = [
        {"activity" : "Aides/Subventions",
         "currentYear": 12.108,
         "lastYear": 23.375,
         "currentYearValue": "2017/2018",
          "lastYearValue": "2018/2019"},

           {"activity" : "Activités courantes",
           "currentYear": 305.980,
           "lastYear": 732.243,
           "currentYearValue": "2017/2018",
            "lastYearValue": "2018/2019"},

            {"activity" : "Activités Spécif. Jeunes",
            "currentYear": 7.615,
            "lastYear": 8.937,
            "currentYearValue": "2017/2018",
             "lastYearValue": "2018/2019"},

             {"activity" : "Activités Insertion",
             "currentYear": 8.556,
             "lastYear": 10.285,
             "currentYearValue": "2017/2018",
              "lastYearValue": "2018/2019"},

              {"activity" : "Activités de proximité et Convivialité",
              "currentYear": 3.989,
              "lastYear": 4.728,
              "currentYearValue": "2017/2018",
               "lastYearValue": "2018/2019"},

               {"activity" : "Activités Spectacles",
               "currentYear": 0,
               "lastYear": 0,
               "currentYearValue": "2017/2018",
                "lastYearValue": "2018/2019"},

                
                {"activity" : "Activités Hors jeunes",
                "currentYear": 6.155,
                "lastYear": 7.311,
                "currentYearValue": "2017/2018",
                "lastYearValue": "2018/2019"},
    ];

    getTitleMin(){
        return this.tilteMin;
    }

    getTitle(){
        return this.title;
    }

    getSubtitle(){
        return this.subtitle;
    }

    getProductDetails(){
        return this.productDetails.slice();
    }

}