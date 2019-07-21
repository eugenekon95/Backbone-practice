var Vehicle = Backbone.Model.extend({
  defaults: {
    registrationNumber: 'AZF216'
  },


  UrlRoot:'/api/vehicles',
  idAttribute: 'registrationNumber' ,
  start: function () {
    console.log('Vehicle started')
  },

  validate: function (attrs) {
    if (!attrs.regustrationNumber) {
      return 'Registration number is required';
    }
  }
});

var Car = Vehicle.extend({
  start: function () {
    console.log(`Car with registration number ${this.get('registrationNumber')} is started`);
}
});

var car = new Car({
  registrationNumber: 'XLI887',
  color: 'Blue'
});
car.unset('registrationNumber')

if (!car.isValid()) {
  console.log(car.validationError);
}

car.set('registrationNumber', 'XLI887');

car.start();



