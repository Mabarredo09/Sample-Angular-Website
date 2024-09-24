import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = [{

    id: 1,
    name: "Nike Dri-FIT Hyverse",
    description:"We made the sweat-wicking Hyverse Tank to help you get through your hardest of workouts, whether you're going on a quick run, doing reps at the gym or finding your centre on the yoga mat. It's built to handle your best, so give it all you've got.",
    price: 1695,
    color:['Black', ' White '],
    availability: true,
    size: ['Small ', ' Medium ', ' Large ', ' X-Large ', ' XX-Large'],
    imgsrc : "assets/nikeDriFit.png"
  },
  {
    id: 2,
    name: "Jordan Flight Essentials",
    description:"Basic shouldn't mean boring. The heavyweight cotton gives this classic-cut tee a stiff drape and structured feel. The woven patch adds sophisticated style, ideal for everyday wear. See, nothing boring about it.",
    price: 1995,
    color:['Black'],
    availability: true,
    size: ['Small ', ' Medium ', ' Large ', ' X-Large ', ' XX-Large'],
    imgsrc: "assets/jordanFlights.png"
  },
  {
    id: 3,
    name: "Jordan Dri-FIT Sport",
    description:"You ready to ball? Made from light, breathable mesh with sweat-wicking technology, these shorts set you up with versatile wearability for your whole day, on or off the court.",
    price: 1895,
    color:['Gym Red ', 'Black'],
    availability: true,
    size: ['Small ', ' Medium ', ' Large ', ' X-Large ', ' XX-Large'],
    imgsrc: "assets/jordanDriFitSport.png"
  },
  {
    id: 4,
    name: "Jordan Flight MVP",
    description:"Shout out Jordan's time on the baseball diamond in this classic cotton tee. Made from midweight cotton that's soft and structured, its big and bold graphic puts a new spin on the Jumpman.",
    price: 1685,
    color:['Pure Platinum/Black', 'Black '],
    availability: true,
    size: ['Small ', ' Medium ', ' Large ', ' X-Large ', ' XX-Large'],
    imgsrc: "assets/jordanFlightMvp.jpg"
  },
  {
    id: 5,
    name: "Jordan Jumpman Flight",
    description:"Take flight in the Jordan Jumpman Flight Men's T-Shirt with its iconic graphic and soft cotton fabric.",
    price: 1339,
    color:['White ', 'Navy'],
    availability: true,
    size: ['Small ', ' Medium ', ' Large ', ' X-Large ', ' XX-Large'],
    imgsrc: "assets/jordanJumpMan.jpg"
  }]
}
