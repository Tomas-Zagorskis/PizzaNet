using pizzareact.Data.Enums;
using pizzareact.Models;

namespace pizzareact.Data {
    public class DataGenerator {
        public static void Initialize(IApplicationBuilder app) {
            using (var serviceScope = app.ApplicationServices.CreateScope()) {
                var ctx = serviceScope.ServiceProvider.GetService<ApiDbContext>();

                ctx.Database.EnsureCreated();

                if (!ctx.Pizzas.Any()) {
                    ctx.Pizzas.AddRange(
                    new Pizza
                    {
                        Name = "Kebab",
                        Description = "Mozzarella, Beef Kebab, Onions, Pickles , Kebab Sauce",
                        Image = "/kebab.png"
                    },
                    new Pizza
                    {
                        Name = "Extravaganzza",
                        Description = "Bacon, Mushrooms, Onion, Mozzarella, Black Olives, Paprika, Pepperoni, Beef, Pizza Sauce",
                        Image = "/Extravaganzza.png"
                    },
                    new Pizza
                    {
                        Name = "Barbecue",
                        Description = "Bacon, Mushrooms, Chicken, Onion, Mozzarella, Barbecue Sauce",
                        Image = "/BBQ.png"
                    }
                    );

                    ctx.SaveChanges(); 
                }


                if (!ctx.Sizes.Any()) {
                    ctx.Sizes.AddRange(
                    new Size
                    {
                        PizzaSize = PizzaSize.Small,
                        SizeInCm = 24
                    },
                    new Size
                    {
                        PizzaSize = PizzaSize.Medium,
                        SizeInCm = 32
                    },
                    new Size
                    {
                        PizzaSize = PizzaSize.Large,
                        SizeInCm = 40
                    }
                    );

                    ctx.SaveChanges();
                }

                if (!ctx.Toppings.Any()) {
                    ctx.Toppings.AddRange(
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Jalapeno,
                        AmountInGrams = 100,
                    },
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Ham,
                        AmountInGrams = 100,
                    },
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Bacon,
                        AmountInGrams = 100,
                    },
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Pepperoni,
                        AmountInGrams = 100,
                    },
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Feta,
                        AmountInGrams = 100,
                    },
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Mozzarella,
                        AmountInGrams = 100,
                    },
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Mushrooms,
                        AmountInGrams = 100,
                    },
                    new Topping
                    {
                        PizzaTopping = PizzaTopping.Onion,
                        AmountInGrams = 100,
                    }
                    );

                    ctx.SaveChanges();
                }
            }
        }
    }
}
