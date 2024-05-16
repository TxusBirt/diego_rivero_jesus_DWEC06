/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del modelo: Se encarga de encapsular los datos de la bbdd Firebase que es donde guardo los datos
*/
export class UsuarioClub {
    constructor(
        public nombreLista:string,
        public username:string,
        public email:string,
        public passwordLista: string,
        public edicion:boolean,
        public recetasFavoritas: RecetasElegidas[]
    ){}
}

export class RecetasElegidas {
    constructor(
       
        public idMeal: number,
        public strMeal: string,
        public strDrinkAlternate: string,
        public strCategory: string,
        public strArea: string,
        public strInstructions: string,
        public strMealThumb: string,
        public strTags: string,
        public strYoutube: string,
        public strIngredient1: string,
        public strIngredient2: string,
        public strIngredient3: string,
        public strIngredient4: string,
        public strIngredient5: string,
        public strIngredient6: string,
        public strIngredient7: string,
        public strIngredient8: string,
        public strIngredient9: string,
        public strIngredient10: string,
        public strIngredient11: string,
        public strIngredient12: string,
        public strIngredient13: string,
        public strIngredient14: string,
        public strIngredient15: string,
        public strIngredient16: string,
        public strIngredient17: string,
        public strIngredient18: string,
        public strIngredient19: string,
        public strIngredient20: string,
        public strMeasure1: string,
        public strMeasure2: string,
        public strMeasure3: string,
        public strMeasure4: string,
        public strMeasure5: string,
        public strMeasure6: string,
        public strMeasure7: string,
        public strMeasure8: string,
        public strMeasure9: string,
        public strMeasure10: string,
        public strMeasure11: string,
        public strMeasure12: string,
        public strMeasure13: string,
        public strMeasure14: string,
        public strMeasure15: string,
        public strMeasure16: string,
        public strMeasure17: string,
        public strMeasure18: string,
        public strMeasure19: string,
        public strMeasure20: string,
        public strSource: string,
        public strImageSource: string,
        public strCreativeCommonsConfirmed: string,
        public dateModified: string
    ) {}
}