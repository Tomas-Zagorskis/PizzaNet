using Microsoft.EntityFrameworkCore;
using pizzareact.Models;

namespace pizzareact.Data {
    public class ApiDbContext : DbContext {
        protected override void OnConfiguring
      (DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseInMemoryDatabase(databaseName: "PizzaDb");
        }
        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<Topping> Toppings { get; set; }

    }
}
