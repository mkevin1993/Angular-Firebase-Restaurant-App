
import { Injectable } from '@angular/core';
import { Food } from './food';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FoodService {

    food_img_path = '../../../../assets/img/';

    // tslint:disable-next-line:label-position
    starters: Food[] = [
         // tslint:disable:max-line-length
         {name: 'Bamboo Sushi', image: this.food_img_path + 'starters/bamboo_sushi.jpg', value: '400', category: 'starter', selected: false},
         {name: 'Basil Vegetables', image: this.food_img_path + 'starters/basil_vegetables.jpg', value: '200', category: 'starter', selected: false},
         {name: 'Beetroot Soup', image: this.food_img_path + 'starters/beetroot_soup.jpg', value: '200', category: 'starter', selected: false},
         {name: 'Brownie Appetizer', image: this.food_img_path + 'starters/brownie_appetizer.jpg', value: '170', category: 'starter', selected: false},
         {name: 'Delicious Grapes', image: this.food_img_path + 'starters/delicious_grapes.jpg', value: '100', category: 'starter', selected: false},
         {name: 'Hummus', image: this.food_img_path + 'starters/hummus.jpg', value: '200', category: 'starter', selected: false},
         {name: 'Pasta Vegetable', image: this.food_img_path + 'starters/pasta_vegetable.jpg', value: '170', category: 'starter', selected: false},
         {name: 'Prawn Shrimps', image: this.food_img_path + 'starters/prawn_shrimps.jpg', value: '770', category: 'starter', selected: false},
         {name: 'Puff Pastry', image: this.food_img_path + 'starters/puff_pastry.jpg', value: '270', category: 'starter', selected: false},
         {name: 'Pumpkin Soup', image: this.food_img_path + 'starters/pumpkin_soup.jpg', value: '170', category: 'starter', selected: false},
         {name: 'Sausage Chopsticks', image: this.food_img_path + 'starters/sausage_chopsticks.jpg', value: '200', category: 'starter', selected: false},
         {name: 'Tomato Vegetables', image: this.food_img_path + 'starters/tomato_vegetables.jpg', value: '120', category: 'starter', selected: false},
         {name: 'Vegetable Salad', image: this.food_img_path + 'starters/vegetable_salad.jpg', value: '220', category: 'starter', selected: false},
         {name: 'Broiled Vegetables', image: this.food_img_path + 'starters/broiled_vegetables.jpg', value: '180', category: 'starter', selected: false},
         {name: 'Gourmet Sushi', image: this.food_img_path + 'starters/gourmet_sushi.jpg', value: '700', category: 'starter', selected: false}
    ];

    main_course: Food[] = [
        {name: 'Carrot Noodles', image: this.food_img_path + 'main_course/carrot_noodles.jpg', value: '350', category: 'main course', selected: false},
        {name: 'Chips & Fish', image: this.food_img_path + 'main_course/chips_fish.jpg', value: '300', category: 'main course', selected: false},
        {name: 'Beef Stew', image: this.food_img_path + 'main_course/beef_stew.jpg', value: '450', category: 'main course', selected: false},
        {name: 'Broccoli', image: this.food_img_path + 'main_course/broccoli.jpg', value: '300', category: 'main course', selected: false},
        {name: 'Goulash Meat', image: this.food_img_path + 'main_course/goulash_meat.jpg', value: '540', category: 'main course', selected: false},
        {name: 'Grilled Fish', image: this.food_img_path + 'main_course/grilled_fish.jpg', value: '640', category: 'main course', selected: false},
        {name: 'Halloumi', image: this.food_img_path + 'main_course/halloumi.jpg', value: '300', category: 'main course', selected: false},
        {name: 'Meat Noodles', image: this.food_img_path + 'main_course/meat_noodles.jpg', value: '350', category: 'main course', selected: false},
        {name: 'Mussels', image: this.food_img_path + 'main_course/mussels.jpg', value: '400', category: 'main course', selected: false},
        {name: 'Paella', image: this.food_img_path + 'main_course/paella.jpg', value: '350', category: 'main course', selected: false},
        {name: 'Pasta', image: this.food_img_path + 'main_course/pasta.jpg', value: '300', category: 'main course', selected: false},
        {name: 'Pizza Slice', image: this.food_img_path + 'main_course/pizza_slice.jpg', value: '350', category: 'main course', selected: false},
        {name: 'Honey Steak', image: this.food_img_path + 'main_course/honey_steak.jpg', value: '400', category: 'main course', selected: false},
        {name: 'Noodles', image: this.food_img_path + 'main_course/noodles.jpg', value: '240', category: 'main course', selected: false},
        {name: 'Osso Buco', image: this.food_img_path + 'main_course/osso_buco.jpg', value: '400', category: 'main course', selected: false}
    ];

    dessert: Food[] = [
        {name: 'Acai', image: this.food_img_path + 'dessert/acai.jpg', value: '240', category: 'dessert', selected: false},
        {name: 'Banana Dessert', image: this.food_img_path + 'dessert/banana_dessert.jpg', value: '200', category: 'dessert', selected: false},
        {name: 'Blueberries', image: this.food_img_path + 'dessert/blueberries.jpg', value: '150', category: 'dessert', selected: false},
        {name: 'Cake Dessert', image: this.food_img_path + 'dessert/cake_dessert.jpg', value: '200', category: 'dessert', selected: false},
        {name: 'Egg', image: this.food_img_path + 'dessert/egg.jpg', value: '70', category: 'dessert', selected: false},
        {name: 'Peach', image: this.food_img_path + 'dessert/peach.jpg', value: '100', category: 'dessert', selected: false},
        {name: 'Rolls', image: this.food_img_path + 'dessert/rolls.jpg', value: '200', category: 'dessert', selected: false},
        {name: 'Caramel Cake', image: this.food_img_path + 'dessert/caramel_cake.jpg', value: '300', category: 'dessert', selected: false},
        {name: 'Dates', image: this.food_img_path + 'dessert/dates.jpg', value: '100', category: 'dessert', selected: false},
        {name: 'Dried Apricots', image: this.food_img_path + 'dessert/dried_apricots.jpg', value: '140', category: 'dessert', selected: false},
        {name: 'Peonies', image: this.food_img_path + 'dessert/peonies.jpg', value: '100', category: 'dessert', selected: false},
        {name: 'Strawberry Cake', image: this.food_img_path + 'dessert/strawberry_cake.jpg', value: '240', category: 'dessert', selected: false},
        {name: 'Figs', image: this.food_img_path + 'dessert/figs.jpg', value: '90', category: 'dessert', selected: false},
        {name: 'Strawberries', image: this.food_img_path + 'dessert/strawberries.jpg', value: '110', category: 'dessert', selected: false},
        {name: 'Pancake Fruit', image: this.food_img_path + 'dessert/pancake_fruit.jpg', value: '120', category: 'dessert', selected: false},



    ];

    wines: Food[] = [
        {name: 'BG Chateau NeufDuPape', image: this.food_img_path + 'wines/BGPasseport_Chateau_NeufDuPape.jpg', value: '3540', category: 'wine', selected: false},
        {name: 'BGReserve PinotNoir', image: this.food_img_path + 'wines/BGReserve_PinotNoir.jpg', value: '1250', category: 'wine', selected: false},
        {name: 'Chile Anakena Merlot', image: this.food_img_path + 'wines/Chile_Anakena_Merlot.jpg', value: '1340', category: 'wine', selected: false},
        {name: 'Chile Quereu Carmenere', image: this.food_img_path + 'wines/Chile_Quereu_Carmenere.jpg', value: '2000', category: 'wine', selected: false},
        {name: 'Chile Quereu Merlot', image: this.food_img_path + 'wines/Chile_Quereu_Merlot.jpg', value: '1020', category: 'wine', selected: false},
        {name: 'HardysNH Cabernet', image: this.food_img_path + 'wines/HardysNH_Cabernet_Sauvignon.jpg', value: '1500', category: 'wine', selected: false},
        {name: 'Neethlingshof Malbec', image: this.food_img_path + 'wines/Neethlingshof_Malbec.jpg', value: '1450', category: 'wine', selected: false},
        {name: 'Zonnebloem Laureat', image: this.food_img_path + 'wines/SA_Zonnebloem_Laureat.jpg', value: '1950', category: 'wine', selected: false},
        {name: 'Zonnebloem Pinotage', image: this.food_img_path + 'wines/SA_Zonnebloem_Pinotage.jpg', value: '1620', category: 'wine', selected: false},
        {name: 'RMWB Shiraz', image: this.food_img_path + 'wines/USA_RMWB_Shiraz.jpg', value: '3400', category: 'wine', selected: false},
        {name: 'Viala Rosso Sweet', image: this.food_img_path + 'wines/Viala_Rosso_Sweet.jpg', value: '1738', category: 'wine', selected: false},
        {name: 'KimCrawford Pinot Noir', image: this.food_img_path + 'wines/KimCrawford_Pinot_Noir.jpg', value: '1850', category: 'wine', selected: false},
        {name: 'MudHouse Pinot Noir', image: this.food_img_path + 'wines/MudHouse_Pinot_Noir.jpg', value: '4500', category: 'wine', selected: false},
        {name: 'Nederburg BinPetit Verdit', image: this.food_img_path + 'wines/Nederburg_BinPetit_Verdit.jpg', value: '4000', category: 'wine', selected: false},
        {name: 'Flagstone Longitude', image: this.food_img_path + 'wines/Flagstone_Longitude_Dry_Red.jpg', value: '2500', category: 'wine', selected: false},
    ];

    fromservice = new Subject<any>();
    addorderstopanel = new Subject<any>();
    unselectfoodcard = new Subject<any>();
    orders: Food[] = [];
    steps = 0;
    array_steps = 0;
    food_sum = 0;
    flow = [
       {step: 2, now: 'Order Wine', next: 'Starters'},
       {step: 3, now: 'Order Starters', next: 'Main Course'},
       {step: 4, now: 'Order Main Course', next: 'Desserts'},
       {step: 5, now: 'Order Desserts', next: 'Checkout'}
    ];

    constructor() {

    }

    getStarters() {
    return this.starters;
    }

    getMainCourse() {
        return this.main_course;
        }

    getDesserts() {
        return this.dessert;
    }

    getWines() {
     return this.wines;
    }

    addOrder(order: Food) {
        this.orders.push(order);

    }

    removeOrder(order: Food) {
             this.orders = this.orders.filter(item =>
             item.name !== order.name
            );

    }

    step() {
       this.fromservice.next(this.steps);
    }

    onOrder() {
    this.addorderstopanel.next();
    this.unselectfoodcard.next();
    }

    nextMeal() {
        if (this.steps < 3) {
            this.array_steps++;
            }
            if (this.steps < 4) {
            this.steps++;
            }
            this.step();
    }

}

